import { useEffect, useState, } from 'react'
import './App.css'
import { getPopularList, getTopList, getNowPlayingList, searchMovie} from "./component/api"


const App = () => {

  const [popularMovies, setPopularList] = useState([])
  const [topList, setTopList] = useState([])
  const [nowPlaying, setNowPlayingList] = useState([])

  useEffect(() => {
    getNowPlayingList().then((result) => {
      setNowPlayingList(result)
    })
  })

  useEffect(() => {
    getPopularList().then((result) => {
      setPopularList(result)
    })
  }, [])

  useEffect(() =>{
    getTopList().then((result) => {
      setTopList(result)
    })
  })

  const NowPlayingList = () => {
    return nowPlaying.map((movie, i) => {
      return (
        <div className="w-300px rounded-lg text-white bg-gray-800 text-sm" key={i}>
          <img className="Movie-img rounded-lg" src={`${import.meta.env.VITE_IMGURL}/${movie.poster_path}`} />
          {/* <div className="Movie-rate ml-5 m-2 text-left">{movie.vote_average} ⭐</div>
          <div className="Movie-title ml-5 m-2  text-left">{movie.title}</div> */}
        </div>
      )
    })
  }

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="w-300px rounded-lg text-white bg-gray-800 text-sm" key={i}>
          <img className="Movie-img rounded-lg" src={`${import.meta.env.VITE_IMGURL}/${movie.poster_path}`} />
          {/* <div className="Movie-rate ml-5 m-2 text-left">{movie.vote_average} ⭐</div>
          <div className="Movie-title ml-5 m-2  text-left">{movie.title}</div> */}
        </div>
      )
    })
  }

  const TopRatedMovie = () => {
    return topList.map((movie, i) => {
      return (
        <div className="w-300px rounded-lg text-white bg-gray-800 text-sm" key={i}>
        <img className="Movie-img rounded-lg" src={`${import.meta.env.VITE_IMGURL}/${movie.poster_path}`} />
        {/* <div className="Movie-rate ml-5 m-2 text-left">{movie.vote_average} ⭐</div>
        <div className="Movie-title ml-5 m-2 text-left">{movie.title}</div> */}
      </div>
      )
    })
  }

  const search = async (p) => {
    if (p.length > 3) {
    const query = await searchMovie(p)
    setPopularList(query.results)
    }
  }



  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Movie-Cuy</span>
        </a>
        <div className="flex md:order-2">
          <div className="relative hidden md:block">
            <input type="text" id="search-navbar" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." 
            onChange={({target}) => search(target.value)}/>
          </div>
        </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="w-full h-custom flex grid grid-flow-col grid-rows-2 gap-4 bg-gray-800">
        <div className="row-span-2 bg-slate-100">
          <h1>asdmasd</h1>
        </div>
        <div className="row-span-2 ">
          <img src="assets/poster.jpeg" alt="" />
        </div>
      </div>
      <h1 className="flex m-4 ml-10 font-bold justify-left items-left">Now Playing Movie</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-3 ">
        <NowPlayingList />
      </div>
      <h1 className="flex m-4 ml-10 font-bold justify-left items-left">Popular Movie</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-3 ">
        <PopularMovieList />
      </div>
      <h1 className="flex m-10 mb-4 font-bold justify-left items-left">Top Rated Movie</h1>
      <div className="w-full flex flex-wrap justify-center items-center gap-3 ">
        <TopRatedMovie />
      </div>
    </>
  )
}

export default App
