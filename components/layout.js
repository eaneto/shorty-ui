import Head from 'next/head'
import homeStyle from '../styles/Home.module.css'

export default function Layout({ children, home }) {
    return (
        <div className={homeStyle.container}>
            <Head>
                <title>Shorty - URL Shortener</title>
            </Head>
            <h1>Shorty</h1>
            <main>
                {children}
            </main>
        </div>
    )
}