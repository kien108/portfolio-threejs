import { ComponentType, FC } from 'react'
import { motion } from 'framer-motion'
import { styles } from '@/constants/style.constant'
import { staggerContainer } from '@/utils/motion.util'

const SectionWrapper = <P extends object>(Component: ComponentType<P>, idName: string = '') => {
  const HOC: FC<P> = (props) => {
    return (
      <motion.section
        id={idName}
        className={`${styles.padding} container relative z-0`}
        variants={staggerContainer(5, 0)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.25 }}
      >
        <span
          className='hash-span'
          id={idName}
        >
          &nbsp;
        </span>
        <Component {...props} />
      </motion.section>
    )
  }

  return HOC
}

export default SectionWrapper
