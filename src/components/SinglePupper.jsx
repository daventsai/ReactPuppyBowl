import {fetchSinglePlayer} from '../ajaxHelpers/puppies'
import {useState, useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom'

const SinglePuppers = () => {
    const [pup, setPup] = useState({});
    const {id} = useParams();
    const nav = useNavigate();
    useEffect(()=>{
        async function getPupDeets(){
            setPup(await fetchSinglePlayer(id));
        }
        getPupDeets();
    },[]);

    return(
        <div>
            <img style={{height: '350px', border: '3px solid white', margin: '3px'}}src={pup.imageUrl}/>
            <h1>Name: {pup.name}</h1>
            <h2>Breed: {pup.breed}</h2>
            <h2>Id: {pup.id}</h2>
            <button onClick={()=>{nav('/')}}>Back to All Puppers</button>
        </div>
    )
}

export default SinglePuppers;