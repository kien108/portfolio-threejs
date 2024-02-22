import SectionWrapper from '@/hoc/SectionWrapper.hoc'
import { SectionTitle } from '.'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '@/constants/mock_data.constant'

interface IExperienceProps {
  experience: {
    title: string
    company_name: string
    icon: string
    iconBg: string
    date: string
    points: string[]
  }
}
const ExperienceCard = ({ experience }: IExperienceProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px]'>{experience.title}</h3>
        <p className='text-secondary text-[16px]'>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={index}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
      <SectionTitle
        subText='What I have done so far'
        headText='Work Experience.'
      />

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline layout='2-columns'>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
