export default function CreativeBanner() {
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <div>
        <h1 className="text-white text-4xl font-bold">
          Be a Creative Developer
        </h1>
        <p className="text-white text-center">
          Join the landscape of Mina Protocol and reach <br />
          hundreds of developers and users.
        </p>
      </div>
      <div className="flex flex-row gap-10 flex-wrap items-center justify-center">
        <div className="bg-white p-4 rounded-md px-4 items-center max-w-[250px]">
          <h1 className="text-2xl text-center font-bold">Deploy</h1>
          <p className="text-center">Your zkApp will shine in our marketplace.</p>
        </div>
        <div className="bg-white p-4 rounded-md px-4 items-center max-w-[250px]">
          <h1 className="text-2xl text-center font-bold">Reach</h1>
          <p className="text-center">Reach the users of Mina Protocol</p>
        </div>
        <div className="bg-white p-4 rounded-md px-4 items-center max-w-[250px]">
          <h1 className="text-2xl text-center font-bold">Track</h1>
          <p className="text-center">Track & improve with stats and reviews</p>
        </div>
      </div>
    </div>
  );
}
