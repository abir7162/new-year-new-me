import Navber from "../navber/Navber";
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div className="">
            <Navber></Navber>
           <div className="pt-24 min-h-[calc (100vh-58px)]">
             
           <Outlet></Outlet>
           </div>
            
        </div>
    );
};

export default MainLayout;