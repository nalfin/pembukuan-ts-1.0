import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            <main className={`${GeistSans.variable} ${GeistMono.variable} font-sans container-fluid max-w-[1600px] md:px-6 lg:px-10 px-4 mx-auto`}>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    )
}
