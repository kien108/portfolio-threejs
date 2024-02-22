import { motion } from 'framer-motion'
import { textVariant } from '@/utils/motion.util'
import { styles } from '@/constants/style.constant'

interface IProps {
  subText: string
  headText: string
}
const SectionTitle = ({ subText, headText }: IProps) => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>{subText}</p>
      <h2 className={styles.sectionHeadText}>{headText}</h2>
    </motion.div>
  )
}

export default SectionTitle
