function Home() {
  return (
    <>
      <div className="grid grid-cols-6  m-10">
        <div className="col-span-3 mt-9 p-10">
          <h1 className="font-extrabold text-6xl text-emerald-400 ">
            Discover Your Next Great Read
          </h1>
        </div>
        <div className="col-span-3 ml-12">
          <img src="home.png" />
        </div>
      </div>
      <div className="p-3">
        <div className="p-2">
          <img src="peggy.webp" />
        </div>
        <div className="p-2">
          <img src="fourthwing.webp" />
        </div>
      </div>
    </>
  );
}

export default Home;
