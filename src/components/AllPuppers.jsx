import {fetchAllPlayers,removePlayer} from '../ajaxHelpers/puppies';
import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';


const AllPuppers = () => {
    const [puppers, setPuppers] = useState([]);
    const [pupName, setPupName] = useState('');
    const nav = useNavigate();
    useEffect(()=>{
        async function getPuppers(){
            setPuppers(await fetchAllPlayers());
        }
        getPuppers();
    },[]);
    const pupsToDisplay=pupName.length ? puppers.filter((p)=>p.name.includes(pupName)) : puppers;
    return(
        <div> 
            <Link to='/puppyFarm'>Make a doggo</Link>
            <div className='search'>
                <p>Search a doggo: </p>
                <input type='text' onChange={(e)=>setPupName(e.target.value)}/>
            </div>
            <div className='allPups'>
            {
                pupsToDisplay.map((pup)=>{
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
        </div>
    )
}

export default AllPuppers;