import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

//Import Styles
import './gifdetails.css'
import logo from '../images/logo.webp'

function GifDetails() {

    let param = useParams()
    let id = String(param.id)
    let sval = String(param.sval)

    const [ gif, setGif ] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${sval}&offset=0&rating=Y&lang=en`)
        .then((resp) => {
            resp.data.data.map((gifid) => {
                if( String(gifid.id) === id){
                    setLoader(false)
                    setGif(gifid)
                    setLoader(true)
                }
                console.log(gifid)
                return 1;
            });
        })
        .catch(err => {console.log(err)})
    }, [id, sval])
    
    return (
        <>
        <div className="container">

            <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>

            <p>Implement a simple .gif search app based on the Giphy API</p>

            <div className="sresult">
                {
                    loader 
                    ? (
                        <div>
                            <img src={gif.images.original.url} alt="gif" /> 
                            <span>Title: {gif.title}</span>
                        </div>
                    )                    
                    : "Loading..."
                }
                
            </div>
        </div>
        </>
    );
}

export default GifDetails;
