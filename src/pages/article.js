import React, {useState} from 'react'
import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import _ from 'lodash'
import Markdown from '../components/markdown'

export default function Article({}) {
    const [images, setImages] = useState(null)
    const [articleMeta, setArticleMeta] = useState(null)
    const [articleMdUrl, setArticleMdUrl] = useState(null)
    const [adverts, setAdverts] = useState(null)

    const router = useRouter()
    console.log(router.query)
    const {slug} = router.query

    if (articleMeta === null) {
        fetch('/articles/articles.json')
            .then((i) => i.json())
            .then(function (i) {
                i = i[0]
                fetch('/adverts/adverts.json')
                    .then((j) => j.json())
                    .then(function (j) {
                        setAdverts(j[i['issue']])
                    })
                    .catch(console.log)
                const article = _.find(i['articles'], (o) => o['slug'] === slug)
                if (article) {
                    setArticleMeta(article)
                    setArticleMdUrl(`/articles/sources/${article['source']}/article.md`)
                }
            })
            .catch(console.log)
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
        <div className="pt-6 mx-auto max-w-6xl">
            <div>
        <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
          {articleMeta !== null && articleMeta['section']}
        </span>
                <h2 className="pt-3 title text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    {articleMeta !== null && articleMeta['title']}
                </h2>
                <p className="subtitle mt-3 text-xl text-gray-500 sm:mt-4">
                    {articleMeta !== null && articleMeta['issue']} Issue
                </p>
            </div>
            <table className="w-full">
                <colgroup>
                    <col
                        span="1"
                        style={{width: '15%'}}
                    />
                    <col
                        span="1"
                        style={{width: '85%'}}
                    />
                </colgroup>
                <tbody>
                <tr>
                    <td className="align-top pr-3">
                        <h3 className="text-center cinzel-sm text-xl mb-12">Authors</h3>
                        <div className="flex flex-col space-y-10">
                            {images !== null && articleMeta !== null && articleMeta['authors'].map((author, i) =>
                                <div
                                    className="flex flex-col items-center space-y-2"
                                    key={i}
                                >
                                    <div className="flex-shrink-0">
                                        <span className="sr-only">{author}</span>
                                        <img
                                            className="h-32 w-32 object-cover rounded-full transform hover:scale-105 transition-all"
                                            src={`/authors/sources/${images[author] && images[author]['src']}`}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="utopia-light text-md text-gray-900">
                                            {author}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </td>
                    <td>
                        {articleMdUrl ? <Markdown
                            src={articleMdUrl}
                            columns={articleMeta['columns'] || 1}
                        /> : <div className="prose article">Article Unavailable</div>}
                    </td>
                </tr>
                </tbody>
            </table>
            {adverts && adverts.length > 0 && <div style={{ width: 500 }} className="mx-auto">
                <h2 className="utopia">This article was brought to you by:</h2>
                <div>{adverts ? adverts.map((src) => <img src={`/adverts/sources/${src}`} alt={src} style={{ width: 500}} />) : null}</div>
            </div>}
        </div>
    )
}