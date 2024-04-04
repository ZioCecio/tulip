export function Home() {
  return (
    <div className="p-4 flex flex-col gap-4 justify-center items-center h-full opacity-40">
      <span className="text-9xl">🌷</span>
      <h1 className="text-5xl text-gray-600">Welcome to Tulip--</h1>
      
      <div>
      <input
        type="text"
        placeholder="Auth key"
        className="flex bg-gray-200 py-1 px-3 rounded-md"
      ></input>
    </div>

      {/* <h1 className="text-3xl font-bold pt-2 pb-4"></h1> */}
    </div>
  );
}
