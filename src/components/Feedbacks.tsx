import { styles } from '@/constants/style.constant'
import SectionWrapper from '@/hoc/SectionWrapper.hoc'
import { motion } from 'framer-motion'
import { SectionTitle } from '.'
import { testimonials } from '@/constants/mock_data.constant'
import { fadeIn } from '@/utils/motion.util'

interface IFeedbackCardProps {
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
  idx: number
}

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  idx
}: IFeedbackCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', idx * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl '
    >
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>

            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  )
}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl md:min-h-[300px] min-h-[250px]`}>
        <SectionTitle
          subText='What others say'
          headText='Testimonials.'
        />
      </div>

      <div
        className={`${styles.paddingX} -mt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            idx={index}
            {...testimonial}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '')
