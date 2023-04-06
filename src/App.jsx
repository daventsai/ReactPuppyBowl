import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import SinglePup from './components/SinglePup'

function App() {

  return (
    <div className="App">
      <form>
        <p>Name:</p>
        <input type='text' name='name'/>
        <p>Breed:</p>
        <input type='text' name='breed'/>
        <button type='submit'>Submit</button>
      </form>
      <SinglePup/>
    </div>
  )
}

export default App
