const Header = () => {
  return (
    <header className="flex gap-3 items-center px-8 py-3 bg-gradient-to-r from-[#672280] to-[#A626D3]">
        <img className="sm:w-14" src="TrollFace.png" width={45} />
        <h1 className="text-2xl sm:text-3xl font-bold text-white">MemeGenerator</h1>
    </header>
  )
}

export default Header