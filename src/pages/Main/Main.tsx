import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import RecipeList from '../../components/RecipeCard/RecipeList/RecipeList';

const Main: React.FC = () => {
  // https://www.npmjs.com/package/react-multi-carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className={'container page'} style={{maxWidth: '1000px', margin: '0 auto'}}>
      <Carousel responsive={responsive}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Carousel>
    </div>
  )
}

export default Main
