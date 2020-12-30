import Head from 'next/head'
import React from 'react'
import Markdown from '../components/markdown'

import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Andover Athenaeum</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div
                className="w-screen relative"
                style={{height: 'calc(100vh - 100px)'}}
            >
                <img
                    src="/assets/rome_bw.png"
                    alt="Photo by Mike Andrei from Pexels"
                    className="absolute top-0 left-0 object-cover"
                    style={{
                        height: 'calc(100vh - 100px)',
                        minWidth: '100vw',
                        filter: 'drop-shadow(2px 4px 6px black) opacity(0.4)'
                    }}
                />
                <div
                    className="relative text-center w-11/12 m-auto lg:w-7/12"
                    style={{
                        height: 'calc(100vh - 100px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        boxShadow: '0 0 15px 20px rgba(255, 255, 255, 0.4)'
                    }}
                >
                    <div
                        className="cinzel-lg text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none"
                        style={{paddingTop: 'calc(50vh - 150px)'}}
                    >
                        Phillips Academy's <span className="text-indigo-800">Classics Magazine</span>
                    </div>
                    <Link href={'/latest'}>
                        <button
                            type="button"
                            className="transition-all cinzel-md text-center tracking-wider leading-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none"
                            style={{
                                marginTop: 20
                            }}
                        >
                            Read Our Latest Issue!
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mt-6 sm:mt-12">
                <h1 className="mx-auto title">A Letter from the Founders</h1>
                <Markdown src='/ui-md/founders-letter.md' columns={2}/>
            </div>
        </div>
    )
}