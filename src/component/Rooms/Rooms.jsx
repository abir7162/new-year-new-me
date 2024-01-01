import { useEffect, useState } from "react";
import Card from "./Card";
import Category from "./Category";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Heading";


const Rooms = () => {


    const [rooms, setRooms] = useState([]);
    const [params, setParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const category = params.get('category')
    // console.log(rooms);
    useEffect(() => {
        setLoading(true)
        fetch('../../../public/Room.json')
        .then(res => res.json())
        .then(data =>{
            if(Category) {
                const filtered = data.filter(room=>room.category === category)
          setRooms(filtered)
         
            } else setRooms(data)
            setLoading(false)
        });

        
    }, [category])

    return (

       <div>

        {rooms && rooms.length>0 ?  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16">
           {
            rooms?.map((item) => <Card key={item.id} item={item}></Card>)
           }
        </div>: <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            
        <Heading center={true} title='No Rooms Available In This Category!' subtitle='Please Select Other Categories'></Heading>
            </div>}
       </div>
    );
};

export default Rooms;