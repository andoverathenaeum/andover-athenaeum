import React, { Fragment, useState } from 'react'
import Link from 'next/link'

export default function Latest() {
  const [issueTitle, setIssueTitle] = useState('')
  const [articles, setArticles] = useState(null)
  const [images, setImages] = useState(null)
  const [previews, setPreviews] = useState(null)

  if (articles === null) {
    fetch('/articles/articles.json')
      .then((i) => i.json())
      .then(function (i) {
        setIssueTitle(i[ 'issue' ])
        setArticles(i[ 'articles' ])
        const articlePromises = i[ 'articles' ].map(({ source }) => fetch(`/articles/sources/${source}/article.md`))
        Promise.all(articlePromises)
          .then(is => Promise.all(is.map(i => i.text())))
          .then((i) => setPreviews(i.map((article) => (article.substring(0, 200) + '...'))))
      })
  }

  if (images === null) {
    fetch('/authors/authors.json')
      .then((i) => i.json())
      .then(setImages)
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
        <div className="mt-3 grid pt-12 lg:grid-cols-3">
          {articles?.map(({ slug, title, section, authors }, i) =>
            <div key={i}>
              <Link
                to={`/article/[id]`}
                href={`/article/${slug}`}
              >
                <div className="transition-all cursor-pointer p-6 hover:bg-gray-100">
                  <div>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    {section}
                  </span>
                  </div>
                  <div className="block mt-4">
                    <div>
                      <p className="utopia text-xl text-gray-900">
                        {title}
                      </p>
                      <p
                        className="mercury mt-3 text-base text-gray-500"
                        dangerouslySetInnerHTML={{ __html: previews !== null && previews[ i ] }}
                      />
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
                                  className="h-10 w-10 rounded-full"
                                  src={`/authors/${images[ author ] && images[ author ][ 'src' ]}`}
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
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
      </div>
    </div>
  )
}