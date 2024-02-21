import { styles } from '@/constants/style.constant'
import { TypeAnimation } from 'react-type-animation'
import ComputerCanvas from './canvas/Computers'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] container flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-purple' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm &nbsp;
            <span className='text-purple'>
              <TypeAnimation
                sequence={['', 300, 'K', 300, 'Ki', 300, 'Kie', 300, 'Kien', 300]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Junior Front-End Developer based in Vietnam. I specialize in building user
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputerCanvas />
    </section>
  )
}

export default Hero
