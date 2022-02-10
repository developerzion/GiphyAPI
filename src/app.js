import { useState } from "react";
import axios from "axios";

//Import Styles
import './app.css'

import logo from './images/logo.webp'


function App() {

 
  const [gifs, setGifs] = useState([])
  const [loader, setLoader] = useState(false)
  const [search, setSearch] = useState({
    searchval : ""
  })
 
  function onSubmit(e){
    e.preventDefault()  
  }
  function onChange(e){
    let { value, name } = e.target 
    setSearch((state)=> ({
      ...state,
      [name]: value
    }))
  }

  function searchList(){    
    axios(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${search.searchval}&limit=25&offset=0&rating=Y&lang=en`)
    .then((response) => {       
        setLoader(false)
          setGifs(response)
        setLoader(true)    
    })
    .catch(error => {
      console.log(error);
    })
  }
  

  return (
    <>
      <div className="container">

        <img className="logo" src={logo} alt="logo" />
        <p>Implement a simple .gif search app based on the Giphy API</p>

        <div className="searchForm">
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter gif name ..." value={search.searchval} onChange={onChange}  name="searchval" />
            <button onClick={searchList}>Search</button>
          </form>
        </div>

        <div className="searchResult">
          {  
            loader  ? 
                      gifs.data.data.length  ?  gifs.data.data.map((gif, key) => {
                                                  return (
                                                    <div className="gifs" key={key} >
                                                      <img src={gif.images.original.url} alt="logo" />
                                                    </div>
                                                  )
                                                })
                                              : <div className="noresult">Match not found</div>
                    : <div className="result">View Results</div>
          }
        </div>
      </div>
    </>
  );
}

export default App;
