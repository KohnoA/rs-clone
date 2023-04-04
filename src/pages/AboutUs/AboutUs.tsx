import image from '../../assets/images/person-avatar-placeholder.png'
import { ImageBlock } from '../../components/ImageBlock/ImageBlock'
import { Title } from '../../components/Title/Title'
import { DEVELOPERS_INFO } from '../../constants/constants'

const AboutUs: React.FC = () => {
  return (
    <div className='container page'>
      <Title text='About Us' />
      {DEVELOPERS_INFO.map((item) => (
        <ImageBlock
          key={`${item.name.replace(' ', '-')}`}
          image={item.image ? item.image : image}
          name={item.name}
          position={item.subTitle}
          location={item.location}
          do={item.contribution}
          another={item.description}
          github={item.gitHub}
        />
      ))}
    </div>
  )
}

export default AboutUs
