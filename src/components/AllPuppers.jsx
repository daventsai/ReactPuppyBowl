import {fetchAllPlayers,removePlayer} from '../ajaxHelpers/puppies';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const AllPuppers = () => {
    const [puppers, setPuppers] = useState([]);
    const nav = useNavigate();
    useEffect(()=>{
        async function getPuppers(){
            setPuppers(await fetchAllPlayers());
        }
        getPuppers();
    },[]);

    return(
        <div>
        {
            puppers.map((pup)=>{
                return (
                    <div style={{border: '3px solid white', margin: '15px'}}>
                        <img style={{height: '350px', border: '3px solid white', margin: '3px'}}src={pup.imageUrl}/>
                        <h4>{pup.name}</h4>
                        <button onClick={()=>{nav(`/pups/${pup.id}`)}}>Pupper Deets</button>
                        <button onClick={async ()=>{
                            await removePlayer(pup.id);
                            const filteredPups = puppers.filter((p)=>p.id !== pup.id);
                            setPuppers(filteredPups);
                        }}>Delete Pupper</button>
                    </div>
                )
            })
        }
        </div>
    )
}

export default AllPuppers;