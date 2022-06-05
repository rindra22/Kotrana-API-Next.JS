import Container from '../components/Container/Container'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
