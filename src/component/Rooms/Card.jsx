

const Card = ({ item }) => {


    const { location, title, from, price, guests, bedrooms, bathrooms, description, image, name } = item;

    return (
        <div>
            <div className="card h-[701px] w-96 bg-base-100 shadow-xl mx-auto mb-2 rounded-none mt-2 ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Location : {location}</p>
                   {name}
                    <p>Price :$ {price} night</p>
                    <p>{description}</p>
                  
                </div>
            </div>
        </div>
    );
};

export default Card;