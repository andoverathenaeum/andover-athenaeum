import '../styles/globals.css'
import Head from 'next/head'
import {DefaultSeo} from 'next-seo'
import {Navigation} from '../layouts/navigation'
import React, {Fragment} from 'react'

const DEFAULT_SEO_CONFIG = {
    title: 'Andover Athenaeum',
    description: 'Phillips Academy\'s Classics Magazine',
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'minimum-scale=1, initial-scale=1, width=device-width',
        }
    ],
    openGraph:
        {
            type: 'website', // locale: 'en_IE'
            url: 'https://andoverathenaeum.com/',
            site_name: 'Andover Athenaeum'
        }
}

function MyApp({Component, pageProps}) {
    return (
        <Fragment>
            <Head>
                <link rel="shortcut icon" href="favicon.ico" />
            </Head>
            <DefaultSeo {...DEFAULT_SEO_CONFIG} />
            <Navigation>
                <Component {...pageProps} />
            </Navigation>
        </Fragment>
    )
}

export default MyApp
