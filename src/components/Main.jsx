import { useEffect, useState } from 'react';
import '../App.css';
const Main = () => {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  })

  const[memeArray,setMemeArray] = useState([])

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(memeData => setMemeArray(memeData.data.memes))
  },[])

  function handleChange(event){
    const { value, name } = event.currentTarget;
    setMeme(prevMeme => ({
        ...prevMeme, [name]: value
    }))
  }

  function handleClick(event){
    event.preventDefault();
    const idx = Math.floor(Math.random()*memeArray.length);
    setMeme(prevMeme => (
        {...prevMeme, imageUrl : memeArray[idx].url}
    ))
  }

  return (
    <main>
        <form className="flex flex-col items-center mt-4">
            <div className="flex justify-between gap-4 my-8 flex-wrap w-[90%] lg:w-[50%]">
                <div className="flex flex-col gap-3 max-[1310px]:w-full">
                    <label htmlFor="top" className="pl-1">Top text</label>
                    <input className="border-2 border-slate-300 rounded-lg px-4 py-2 min-w-xs w-full"
                    placeholder="Shut up"
                    type="text"
                    id="top"
                    name='topText'
                    value={meme.topText}
                    onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-3 max-[1310px]:w-full">
                    <label htmlFor="bottom" className="pl-1">Bottom text</label>
                    <input className="border-2 border-slate-300 rounded-lg px-4 py-2 min-w-xs w-full"
                    placeholder="And take my money"
                    type="text"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
                    id="bottom" />
                </div>
            </div>
            <button className="mt-2 mb-2 w-[90%] lg:w-[50%] py-3 rounded-xl bg-gradient-to-r from-[#672280] to-[#A626D3] text-white text-xl cursor-pointer font-bold"
            onClick={handleClick}
            >Get a new meme image 🖼</button>
        </form>
        <div className='w-full flex justify-center items-center'>
            <div className="meme flex justify-center items-center w-[90%] lg:w-[50%] relative m-6">
                <img className="w-full rounded-lg" src= {meme.imageUrl}/>
                <span className="topText break-all absolute top-6 text-xl sm:text-5xl m-2">{meme.topText}</span>
                <span className="bottomText break-all absolute bottom-6 text-xl sm:text-5xl m-2">{meme.bottomText}</span>
            </div>
        </div>
    </main>
  )
}

export default Main