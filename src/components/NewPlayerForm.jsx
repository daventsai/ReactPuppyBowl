import { useState } from "react";
import { addNewPlayer } from "../ajaxHelpers/puppies";
import {useNavigate, Link} from "react-router-dom";

const NewPlayerForm = () => {
    const [name,setName]= useState('');
    const [breed, setBreed]=useState('');
    const pupperObj = {name,breed};
    const nav=useNavigate();
    return(
        <div>
            <Link to='/'>Home</Link>
            <form onSubmit={async (e)=>{
                e.preventDefault();
                await addNewPlayer(pupperObj);
                nav('/');
            }}>
                <p>Name:</p>
                <input type='text' name='name' onChange={(e)=>setName(e.target.value)}/>
                <p>Breed:</p>
                <input type='text' name='breed' onChange={(e)=>setBreed(e.target.value)}/>
                <button type='submit'>Create Doggo</button>
            </form>
        </div>
    )
}

export default NewPlayerForm;