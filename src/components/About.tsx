import { services } from '@/constants/mock_data.constant'
import SectionWrapper from '@/hoc/SectionWrapper.hoc'
import { fadeIn } from '@/utils/motion.util'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { SectionTitle } from '.'

interface IServiceProps {
  service: {
    title: string
    icon: string
  }
  idx: number
}
const ServiceCard = ({ service, idx }: IServiceProps) => {
  const { icon, title } = service
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * idx, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='title'
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <SectionTitle
        subText='Introduction'
        headText='Overview.'
      />

      <motion.p
        variants={fadeIn('up', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
        I'm a full-stack developer with a passion for building beautiful and functional user
        interfaces. I have a strong foundation in web development and I'm always looking to learn
        new technologies and improve my skills. I'm a quick learner and I'm always looking for new
        challenges to tackle. I'm a full-stack developer with a passion
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            service={service}
            idx={idx}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
