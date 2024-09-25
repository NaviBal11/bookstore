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
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat p-10"
        style={{ backgroundImage: "url('colors.jpg')" }}
      >
        <h1 className="text-2xl mb-4 text-slate-950 ">Our Mission</h1>
        <h2 className="text-lg m-2">OUR MISSION</h2>
        <p>
          To inspire reading and simplify our customers' journeys to live with
          intention.
        </p>
        <h2 className="text-lg m-2 ">OUR VISION</h2>
        <p>Making Connections.Creating Experiences.</p>
        <h2 className="text-lg m-2">OUR CUSTOMER PROMISE </h2>
        <p>
          We exist to add a little joy to our customers’ lives, each time they
          interact with us or our products.
        </p>
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
