import { technologies } from '@/constants/mock_data.constant'
import SectionWrapper from '@/hoc/SectionWrapper.hoc'
import { BallCanvas } from '.'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, index) => (
        <div
          key={tech.name + index}
          className='w-28 h-28'
        >
          <BallCanvas imageUrl={tech?.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, 'technology')
