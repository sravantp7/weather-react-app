const App = () => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="bg-white rounded bg-opacity-20 backdrop-blur-lg drop-shadow-lg w-full md:max-w-[500px] p-4 flex flex-col text-center justify-center md:px-10 lg:p-24 h-full sm:h-[500px] lg:h-[500px] text-zinc-700">
        <h1 className="text-4xl font-thin">Weather <span className="font-black">Forecast</span></h1>
        <p className="text-sm mt-3 mb-5">Enter below a place you want to know the weather of and select an option from dropdown</p>
        <div>
          <input type="text" value={''} className='px-2 py-1 rounded-l-md border-2 border-white outline-none' />
          <button className="rounded-r-md text-zinc-100 border-2 border-zinc-100 px-2 py-1 cursor-pointer hover:text-zinc-500">search</button>
        </div>
      </section>
    </main>
  );
}

export default App;
