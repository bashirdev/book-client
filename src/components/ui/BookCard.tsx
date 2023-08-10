
import { IBookInterface } from './../../types/dataTypes';
import { Link } from 'react-router-dom';

interface IProps {
  books: IBookInterface[];
}

const BookCard = ({ books }: IProps) => {


    
  return (
    <>
  {books.map(book=>(
    
        <Link key={book._id} to={`/details/${book._id}`}>

    <div className="bg-white shadow-lg rounded-lg p-4 m-2">
    <h2 className="text-xl font-semibold">{book.title}</h2>
    <p className="text-gray-600">{book.genre}</p>
    <p className="text-gray-600">{book.author}</p>
    
   
    {/* Add more book details here */}
  </div>

</Link>
  
)
)}
   
    </>
   
  );
};

export default BookCard;
