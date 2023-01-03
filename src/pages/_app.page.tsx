import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

// A função de estilo global é executada aqui mesmo pois precisa ser carregado apenas uma vez
// então não necessariamento ela precisa estar dentro de um componente.
// Se a função for colocada dentro do componente o NextJS recarregará novamente a cada reload da página.

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
