import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works
} from '@/components'
import AnimatedCursor from 'react-animated-cursor'

function App() {
  return (
    <div className='relative z-0 bg-primary'>
      <AnimatedCursor
        color='#fff'
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        showSystemCursor
        outerStyle={{
          mixBlendMode: 'difference',
          backgroundColor: '#915eff'
        }}
      />

      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default App
