import { useState } from "react";
import BookCard from "../components/ui/BookCard";
import { useGetAllBooksQuery } from "../redux/features/bookSlice";
import { useAppSelector } from "../redux/hooks";
import { IBookInterface } from "../types/dataTypes";
// import { IBookInterface } from "../types/dataTypes";
import { Link } from 'react-router-dom';



 
const Home = () => {
    const {search} =useAppSelector(state=> state?.searchItem)
    
    const {data, isLoading, isError} = useGetAllBooksQuery(search, {refetchOnMountOrArgChange: true})
    const [filterItems, setFilterItems] = useState([])
 
   
     let content;

     if(isLoading) <div>Loading...</div>
     if(isError) <div>{isError}</div>
     if(!isLoading && !isError && data?.data[0]['Rows'].length > 0){
        content= <BookCard books={data?.data[0]['Rows']} />
     }

     const ShowByFilter=(genre: unknown)=>{
       let filterItem= data?.data[0]['Rows'].filter((item:IBookInterface)=> item.genre === genre);
       setFilterItems(filterItem)
     }



     let filterData=[...new Set(data?.data[0]['Rows']?.map((item:IBookInterface)=> item.genre))]
   
      
console.log(filterData);


    
    return (
        <div className="container">
            <div className="flex flex-wrap justify-center">
            <div className='w-full flex justify-center align-center items-center '>
    {filterData?.map((genre:any,ind)=> (
        <div onClick={()=> ShowByFilter(genre)}  key={ind} className='  bg-white shadow-lg rounded-lg p-4 m-2 w-[100px] text-center'>
            <span>{genre} </span>
        </div>
    ))}
    </div>
    {
    filterItems.length > 0 ? (
  filterItems?.map((book:any)=>(
    
    <Link key={book._id} to={`/details/${book._id}`}>

<div className="bg-white shadow-lg rounded-lg p-4 m-2">
<h2 className="text-xl font-semibold">{book.title}</h2>
    <p className="text-gray-600">{book.genre}</p>
    <p className="text-gray-600">{book.author}</p>

</div>

</Link>

))):(
<>
{content}</>
)
              
  }
            </div>
        
        </div>
    );
};

export default Home;