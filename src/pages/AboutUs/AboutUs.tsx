import image from '../../assets/images/person-avatar-placeholder.png';
import { ImageBlock } from '../../components/image-block/image-block';
import { Title } from '../../components/Title/title';
import { GITHUB_ACCOUNTS } from '../../constants/constants';

const WHAT_DO_IN_PROJECT = ['Managed team work.', 'Developed the back-end part of the project (server on NodeJS + Express, integration with MongoDB, setting up and populating the database, developing a REST API, adding user registration and authorization).', 'Using Figma developed design that meets the needs of functionality and allows to keep the user\'s attention on the application as a result of ease of interaction. Came up with the location of the elements, the color scheme and the animations. Tested UI and UX. Developed design of user page, constructor, recipes page.'];
const NAME = ['Kohno Alexander', 'Klyosov Alexander', 'Shamkolovich Sergey'];
const POSITION = ['Team lead, frontend developer', 'Frontend developer', 'Frontend developer'];
const ANOTHER = ['Developed the front-end of the project: made layouts of most of pages, implemented responsible design for the application using HTML and SCSS.', 'Implemented the logic of receiving and sending data using the written API on the front-end (data of recipes, articles, user data), rendering content based on the received data and processing front-end events (adding to favorites, filtering on the recipe page and working recipe builder).', 'Handled DOM events using Typescript and programming approach. Added UI elements from side libraries like noUiSlider on constructor page.'];

const AboutUs: React.FC = () => {
  return (
    <div className="container page about-page">
      <Title text='About Us'/>
      {NAME.map((_, i) => {
        return <ImageBlock
                    key={i}
                    image={image}
                    name={NAME[i]}
                    position={POSITION[i]}
                    do={WHAT_DO_IN_PROJECT[i]}
                    another={ANOTHER[i]}
                    github={GITHUB_ACCOUNTS[i]}
                />
      })}
    </div>
  )
}

export default AboutUs
