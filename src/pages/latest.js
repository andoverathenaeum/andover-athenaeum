import React, {Fragment, useState} from 'react'
import Link from 'next/link'

const COLORS = ['red', 'yellow', 'green', 'indigo', 'purple', 'pink', 'blue', 'gray']

const COLORS_NEW = [
    {bg: '#FEE2E2', text: '#991B1B'},
    {bg: '#FEF3C7', text: '#92400E'},
    {bg: '#D1FAE5', text: '#065F46'},
    {bg: '#E0E7FF', text: '#3730A3'},
    {bg: '#EDE9FE', text: '#5B21B6'},
    {bg: '#FCE7F3', text: '#9D174D'},
    {bg: '#DBEAFE', text: '#1E40AF'},
    {bg: '#F3F4F6', text: '#1F2937'}
]

export default function Latest() {
    const [issueTitle, setIssueTitle] = useState('')
    const [articles, setArticles] = useState(null)
    const [images, setImages] = useState(null)
    const [previews, setPreviews] = useState(null)
    const [sectionColorMapping, setSectionColorMapping] = useState({})
    const [pdf, setPdf] = useState('')

    if (articles === null) {
        fetch('/articles/articles.json')
            .then((i) => i.json())
            .then(function (i) {
                i = i[0]
                fetch('/pdfs/pdfs.json')
                    .then((j) => j.json())
                    .then(function (j) {
                        setPdf(j[i['issue']])
                    })
                    .catch(console.log)

                setIssueTitle(i['issue'])
                setArticles(i['articles'])
                const articlePromises = i['articles'].map(({source}) => fetch(`/articles/sources/${source}/article.md`))
                let color_index = 0
                setSectionColorMapping(i['articles'].reduce((o, {section}) => {
                    if (!o?.hasOwnProperty(section)) {
                        o[section] = COLORS_NEW[color_index]
                        color_index += 1
                    }
                    return o
                }, {}))

                Promise.all(articlePromises)
                    .then(is => Promise.all(is.map(i => i.text())))
                    .then((i) => setPreviews(i.map((article) => (article.replace(/<.*?>/g, " ").replace(/#/g, " ").replace(/[\w,\s-_]+\.[A-Za-z]{3,4}/g, "")))))
            })
    }

    if (images === null) {
        fetch('/authors/authors.json')
            .then((i) => i.json())
            .then((o) => {
                const {club, former, board} = o
                setImages(Object.assign(club, former, board))
            })
            .catch(console.log)
    }

    return (
        <div className="pt-10 px-4 sm:px-6 lg:pt-16 lg:px-8">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="title text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        Latest Articles
                    </h2>
                    <p className="subtitle mt-3 text-xl text-gray-500 sm:mt-4">
                        {issueTitle} Issue
                    </p>
                </div>
                <div className="mt-3 mb-3 grid pt-12 lg:grid-cols-5">
                    {articles?.map(({slug, title, section, authors}, i) =>
                        <div key={i}>
                            <Link
                                to={`/article/[id]`}
                                href={`/article/${slug}`}
                            >
                                <div className="transition-all cursor-pointer p-6 hover:bg-gray-100">
                                    <div>
                                            <span
                                                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                                                style={{
                                                    backgroundColor: sectionColorMapping?.hasOwnProperty(section) ? sectionColorMapping[section].bg : COLORS_NEW[0].bg,
                                                    color: sectionColorMapping?.hasOwnProperty(section) ? sectionColorMapping[section].text : COLORS_NEW[0].text
                                                }}
                                            >
                                                {section}
                                            </span>
                                    </div>
                                    <div className="block mt-4">
                                        <div>
                                            <p className="utopia text-xl text-gray-900">
                                                {title}
                                            </p>
                                            {/*<p
                                                    className="mercury mt-3 text-base text-gray-500"
                                                    dangerouslySetInnerHTML={{__html: previews !== null && previews[i].substring(0, 200) + '...'}}
                                                />*/}
                                            <div className="mt-6 flex-col items-left space-y-2">
                                                {images !== null && authors.map((author, i) =>
                                                    <div
                                                        className="flex flex items-center"
                                                        key={i}
                                                    >
                                                        <div className="flex-shrink-0">
                                                            <a href="#">
                                                                <span className="sr-only">{author}</span>
                                                                <img
                                                                    className="h-10 w-10 object-cover rounded-full"
                                                                    src={`/authors/sources/${images[author] && images[author]['src']}`}
                                                                    alt=""
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="utopia-light text-md font-medium text-gray-900">
                                                                {author}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="w-full p-10 flex justify-center items-center" style={{height: 650}}>
                    <object data={`/pdfs/sources/${pdf}`} type="application/pdf" className="" width={400}
                            height={600}>
                        <embed src={`/pdfs/sources/${pdf}`} type="application/pdf" width={400} height={600}/>
                    </object>
                    <a href={`/pdfs/sources/${pdf}`}>
                        <button
                            type="button"
                            className="transition-all w-64 ml-20 cinzel-md text-center tracking-wider leading-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none"
                            style={{
                                marginTop: 20
                            }}
                        >
                            Or Download Our Print Version
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}