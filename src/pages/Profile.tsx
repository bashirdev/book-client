
import { useDeleteBookMutation , useGetAllBooksQuery } from "../redux/features/bookSlice";
import { useAppSelector } from "../redux/hooks";
import { IBookInterface } from "../types/dataTypes";
import { Link} from 'react-router-dom';



 
const Profile = () => {
    
    const {search} =useAppSelector(state=> state?.searchItem)
    const {user}=useAppSelector(state=> state.user)
    const {data, isLoading, isError} = useGetAllBooksQuery(search, {refetchOnMountOrArgChange: true,
        pollingInterval: 3000})

  const [deleteBook] = useDeleteBookMutation();

     if(isLoading) <div>Loading...</div>
     if(isError) <div>{isError}</div>
    

     let filterItems= data?.data[0]['Rows'].filter((item:IBookInterface)=> item.email === user.email);
      
     const handleDelete = (id:string) => {
        // Call the deleteBook mutation with the bookId
        deleteBook(id)
          .unwrap()
          .then(() => {
            console.log('Book deleted successfully');
            
          <Link to='/profile'></Link>
          })
          .catch((error) => {
            console.error('Error deleting book:', error);
            // Handle any error cases
          });
      };

    return (
        <div className="container">
            <h1 className="text-center font-extrabold">Your Total Books {filterItems?.length}</h1>
            <div className="flex flex-wrap justify-center">
          
    {
    filterItems?.length  &&  (
  filterItems?.map((book:any)=>(

    <div className="card flex gap-4 flex-col bg-white shadow-lg rounded-lg p-4 m-2">

<Link key={book._id} to={`/details/${book._id}`}>

<div className="bg-white shadow-lg rounded-lg p-4 m-2">
 <h2 className="text-xl font-semibold">{book.title}</h2>
    <p className="text-gray-600">{book.genre}</p>
    <p className="text-gray-600">{book.author}</p>
   
</div>

</Link>
<div className="">
<div onClick={()=> handleDelete(book._id)} className="text-red-700 cursor-pointer">Delete</div>
   <Link to={`/updateBook/${book._id}`}>
      <div  className="text-green-900">Edit</div>
   </Link>
</div>
 
    </div>
  

)))
              
  }
            </div>
        
        </div>
    );
};

export default Profile;