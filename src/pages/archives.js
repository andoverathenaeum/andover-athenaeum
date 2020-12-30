import React, {useState} from 'react'

export default function Archives() {
    const [pdfs, setPdfs] = useState([])

    fetch('/pdfs/pdfs.json')
        .then((j) => j.json())
        .then(function (j) {
            setPdfs(j)
        })
        .catch(console.log)

    return (
        <div className="pt-10 px-4 sm:px-6 lg:pt-16 lg:px-8">
            <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="title text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                        Archives
                    </h2>
                    <p className="subtitle mt-3 text-xl text-gray-500 sm:mt-4">
                    </p>
                </div>
                {Object.keys(pdfs).map((key) => {
                    const pdf = pdfs[key]

                    return (
                        <div>
                            <h2 className="cinzel-md w-full text-center mt-5">{key}</h2>
                            <div className="w-full p-10 flex justify-center items-center" style={{height: 650}}>
                                <object data={`/pdfs/sources/${pdf}`} type="application/pdf" className="" width={400}
                                        height={600}>
                                    <embed src={`/pdfs/sources/${pdf}`} type="application/pdf" width={400}
                                           height={600}/>
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
                    )
                })}
            </div>
        </div>
    )
}