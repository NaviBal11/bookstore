function Card({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-60 ">
      <img className="" src={item.cover_image} alt={item.title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
    </div>
  );
}

export default Card;
