import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import styled, { keyframes, createGlobalStyle } from 'styled-components'
import Capsule from './components/Capsule'
import { capsules } from './data/timeLineData' // Asegúrate de que la ruta sea correcta

const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  background: 
    url("/textures/noisy.png"), 
    linear-gradient(-45deg, #1a1a1d, #2c1e2e, #2e1f3a, #3c2a38);
  background-size: auto, 400% 400%;
  background-blend-mode: overlay;
  animation: ${keyframes`
    0% { background-position: center 0%, 0% 50%; }
    50% { background-position: center 100%, 100% 50%; }
    100% { background-position: center 0%, 0% 50%; }
  `} 60s ease infinite;
  padding: 100px 20px 60px;
  color: #f8f0f0;
`

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #f8f0f0;
  font-weight: 300;
  font-family: 'Georgia', serif;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin: -40px auto 60px;
  color: #ddd;
  max-width: 700px;
  line-height: 1.6;
  font-family: 'Georgia', serif;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin: -30px auto 50px;
    padding: 0 10px;
  }
`

// Nueva sección de agradecimiento
const ThankYouSection = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 40px;
  margin-top: 60px;
  border-radius: 12px;
  max-width: 800px;
  margin: 60px auto;
  color: #f8f0f0;
  text-align: center;
  font-family: 'Georgia', serif;
  line-height: 1.6;
  font-size: 1.2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 30px;
  }
`

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <Background>
      <GlobalStyle />
      <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mp3" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <Title>Una historia en cápsulas</Title>
      <Subtitle>
        Quiero que repasemos juntos parte de todo lo que hemos vivido en este año.
      </Subtitle>

      {capsules.map((capsule, index) => (
        <Capsule key={index} {...capsule} />
      ))}

      {/* Sección de agradecimiento final */}
      <ThankYouSection>
        <p>
          Solo me queda darte las gracias por hacerme crecer cada día que paso a tu lado, por hacerme creer en el amor como voluntad,
          como decición de que se puede estasr mejor. Por ensañarme a amar de una manera tan hermosa como solo vos
          puedes hacerlo, por cuidarme, por hacerme sentir pleno, por darme la libertad de ser quien soy y por dejarme ser parte de tu vida.
          Al cabo ed un año no puedo expresarte mas que mi agradecimiento.
          Gracias por ser tan vos, gracias por confiar cuando todo parecía
          caerse, cuando la inestabilidad se acercó para llenarnos de dudas, por pelearla para seguir construyendo conmigo lo que ambos queremos.
          Te amo con toda mi alma. No quiero nada más sin vos.
          Siempre te voy a elegir, siempre voy a estar a tu lado.
          Siempre voy a estar para cuidarte y acompañarte en cada paso que des.
          Siempre voy a estar para hacerte reir y para hacerte sentir que sos la persona más especial del mundo.
          Te amo, y siempre lo haré.
        </p>
      </ThankYouSection>
    </Background>
  )
}

export default App
