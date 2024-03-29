import { styles } from '@/constants/style.constant'
import { TypeAnimation } from 'react-type-animation'
import ComputerCanvas from './canvas/Computers'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] container flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-purple' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
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
            I am a <span className='text-purple font-semibold'>Frontend Engineer</span> based in
            VietNam
            <br />
            <span className='mt-1 block'>Turning ideas into real life products is my calling</span>
          </p>
        </div>
      </div>
      <ComputerCanvas />

      <div className='absolute bottom-10 md:bottom-[-20px] w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
