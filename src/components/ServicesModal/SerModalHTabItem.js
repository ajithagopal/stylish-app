import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const SerModalHTabItem = (props) => {
    const {projectDetails} = props
    const {id, imageUrl} = projectDetails
    return (
        <li className='g-image'>
            <LazyLoadImage loading="lazy" src={imageUrl} alt={`imgItem${id}`} className='gal-img' />
        </li>
    )
}

export default SerModalHTabItem