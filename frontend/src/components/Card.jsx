function Card({ item }) {
  return (
    <div className="w-60 h-80 ">
      <div className="w-44 h-52 shadow-md overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={item.cover_image}
          alt={item.title}
        />
      </div>
      <div className="m-4 mt-2">
        <h3 className="text-base font-semibold">{item.title}</h3>
        <p className="text-sm">{item.author}</p>
        <p className="text-sm">${item.price}</p>
      </div>
    </div>
  );
}

export default Card;
