import { useContext } from "react";

import { AuthContext } from "../../Providers/AuthProvider";
import Rooms from "../../component/Rooms/Rooms";
import Category from "../../component/Rooms/Category";


const Home = () => {

  const AuthInfo = useContext(AuthContext);
  console.log(AuthInfo);
    return (
        <div className="">
          <Category></Category>
          {/* {AuthInfo.name} */}
         
          <Rooms></Rooms>

        </div>
    );
};

export default Home;