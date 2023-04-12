import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import AllPuppers from './components/AllPuppers'
import SinglePuppers from './components/SinglePupper';
import NewPlayerForm from './components/NewPlayerForm';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllPuppers/>}/>
        <Route path='/pups/:id' element={<SinglePuppers/>}/>
        <Route path='/puppyFarm' element={<NewPlayerForm/>}/>
      </Routes>
    </div>
  )
}

export default App
