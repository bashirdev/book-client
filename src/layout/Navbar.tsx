import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from '../../src/assets/magnifying-glass-solid.svg'
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { inputSearchItemAction } from "../redux/features/SearchSlice";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/user/userSlice";



const Navbar = () => {
  const {user} =useAppSelector(state=> state.user)
    const [searchValue, setSearchValue] = useState<string>('')
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
 console.log(user);
 
    const dispatch=useAppDispatch()
    const toggleDropdown = () => {
      setIsDropdownOpen((prevState) => !prevState);
      
    };
console.log(user.email);

    useEffect(()=>{
      
    },[])



    const handleInputSearch=(e: { target:{ value: SetStateAction<string>} })=>{
       setSearchValue(e.target.value)
      
       if(searchValue.length > 0){
        dispatch(inputSearchItemAction(searchValue)) 
       }
    }

    const handleLogout = () => {
      signOut(auth).then(() => {
        dispatch(setUser(null));
      });
    };
    
    return (
     
            <nav className='w-full bg-green-900  top-16 z-40 hidden md:block'>
                <div className="container">
                  <div className="flex  py-[35px] ">
                     <div className="text-white">
                       <Link to='/'>  BooK  </Link>
                      </div>
                      
                     <div className="text-white flex flex-grow  gap-x-8 justify-end ">
                       <div className="flex flex-1 relative">
                           <input   type='text' value={searchValue} onChange={handleInputSearch} className="ml-[280px] w-[300px] p-2 border-slate-200 placeholder-slate-400 text-black contrast-more:border-slate-400 contrast-more:placeholder-slate-500"/>
                           <img  src={searchIcon} alt="" className="w-full h-[15px] absolute mt-3 ml-[70px]" />
                        </div>
                          <Link to='/'>Home</Link>
                          <Link to='/addBook'>Add Book</Link>
                          <div className="relative">
                          <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 py-2 px-4 bg-blue-500 text-white rounded"
      >
        {user.email ? (<>{user.email}</>):( <img
          className="w-6 h-6 rounded-full"
          src="/path/to/avatar-image.jpg"
          alt="User Avatar"
        />
        ) }
       
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 mt-2 text-black bg-white border border-gray-300 rounded">
        {user.email ? (
         <>
          <div className="p-5" onClick={handleLogout}>
            <Link to='/'>Logout</Link>  
          </div>
          <div className="p-5">
             <Link to={`/profile`}>Profile</Link>
          </div>
          </>
       
        ) 
        : (
          <>
          <Link to="/login" className="block py-2 px-4 hover:bg-gray-100">
            login
                          
          </Link>
          <Link to="/signup" className="block py-2 px-4 text-black hover:bg-gray-100">
              Signup
          </Link>
          </>
        )}
         
        </div>
      )}
    </div>
                       
                
                         </div>
                        </div>
             
                    </div>
                
          
               
            </nav>
           
       
    );
};

export default Navbar;