import Head from 'next/head'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from '../components/styles/GlobalStyles'
import NextNProgress from '../components/NextNProgress'
import '../public/styles/responsive.scss'

const theme = {
    colors: {
        primary:'#ff1493',
        secondary: '',
        body: '#fff',
        text: '#000',
    }
}

export default function App({Component, pageProps}){

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                <NextNProgress
                color="rgb(255, 20, 147)"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}