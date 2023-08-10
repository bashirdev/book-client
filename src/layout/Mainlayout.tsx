import Navbar from "./Navbar";
import {Outlet} from 'react-router-dom'

const Mainlayout = () => {
    return (
        <div>
    
            <Navbar />
            <div>
                <Outlet />
            </div>
            
        </div>
    );
};

export default Mainlayout;