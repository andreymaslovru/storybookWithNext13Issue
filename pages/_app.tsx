import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-ui/styles'
import theme from '@/src/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
