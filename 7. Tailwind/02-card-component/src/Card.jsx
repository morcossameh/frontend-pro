function Card() {
  return (
    <div className="rounded-3xl bg-white w-75 min-h-100 m-5 overflow-hidden inline-block">
      <img
        className="w-full h-50 object-cover"
        src="https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww"
      />
      <div className="m-8 text-[#224158]">
        <h1 className="font-bold mb-3 text-2xl">Beatiful Nature</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          accusamus odit ratione perferendis ab iusto sint corporis deleniti
          repudiandae, facere beatae voluptatum suscipit rerum at error illo
          nostrum nobis praesentium.
        </p>
      </div>
    </div>
  );
}

export default Card;
