import { useSearchParams } from 'react-router-dom';
import { categories} from '../Rooms/Category/Categories'
import CategoryBox from './Category/CategoryBox';

const Category = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    console.log(category);
    return (
        <div className='flex gap-3 pt-5 items-center justify-between pb-3 overflow-x-auto'>
            {
                categories?.map((Category) => <CategoryBox key={Category.label} label={Category.label} icon={Category.icon} selected={category === Category.label}></CategoryBox>)
            }
        </div>
    );
};

export default Category;