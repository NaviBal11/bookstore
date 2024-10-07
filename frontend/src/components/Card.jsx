function Card({ item }) {
  return (
    <div className="w-60 h-80 p-5 shadow-lg rounded-lg flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="w-44 h-54 rounded-md overflow-hidden shadow-md mb-4">
        <img
          className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          src={item.cover_image}
          alt={item.title}
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.author}</p>
        <p className="text-lg font-semibold text-blue-600">${item.price}</p>
      </div>
    </div>
  );
}

export default Card;
