import React, {useState} from 'react'
import Markdown from '../components/markdown'

export default function About() {
    const [images, setImages] = useState(null)
    if (images === null) {
        fetch('/authors/authors.json')
            .then((i) => i.json())
            .then(setImages)
    }

    return (
        <div className="pt-6 mx-auto max-w-6xl">
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
                <tr className="border-b border-gray-500">
                    <td className="align-top text-right pr-3 cinzel-sm text-xl">
                        <p>Who We Are</p>
                    </td>
                    <td>
                        <Markdown src="/ui-md/about-who-we-are.md"/>
                    </td>
                </tr>
                <tr className="border-b border-gray-500">
                    <td className="py-5 align-top text-right pr-3 cinzel-sm text-xl">
                        <p>Charter</p>
                    </td>
                    <td className="py-5">
                        <Markdown src="/ui-md/about-charter.md"/>
                    </td>
                </tr>
                <tr>
                    <td className="py-5 align-top text-right pr-3 cinzel-sm text-xl">
                        <p>Write for Us</p>
                    </td>
                    <td className="py-5">
                        <Markdown src="/ui-md/about-write-for-us.md"/>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="mt-6 sm:mt-12">
                <h1 className="mx-auto title">Meet the Board</h1>
                <div className="flex-1 w-full">
                    {images !== null && Object.keys(images).map((author, i) =>
                        <div className="w-full flex m-6" key={i}>
                            <div
                                className="flex flex-col items-center space-y-2"
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
                            <div className="w-full prose article ml-10" style={{width: "100%"}} dangerouslySetInnerHTML={{__html: images[author]['bio'] }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}