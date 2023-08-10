
import { useParams } from 'react-router-dom';
import { useGetSingleBookQuery } from '../redux/features/bookSlice';
const DetailsBook = () => {
    const {id} =useParams()
    const {data, isLoading, isError} =useGetSingleBookQuery(id)
    console.log(data?.data.title);
    
    return (
        <div>
            About {data?.data.title}
            <br/>
            Author:{data?.data.author}
        </div>
    );
};

export default DetailsBook;