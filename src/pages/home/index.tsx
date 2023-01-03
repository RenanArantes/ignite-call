import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUserNameForm } from './components/ClaimUserNameForm'

// Esse arquivo não segue a config de pageExtensions pois é importado e executado em
// src/pages/index.tsx para preservar a rota '/' como sendo a home.
// Se esse arquivo fosse index.page.tsx ele seria executado na seguinte rota:
// http://domain/home porém o que queremos é http://domain/

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          em seu tempo livre.
        </Text>

        <ClaimUserNameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
