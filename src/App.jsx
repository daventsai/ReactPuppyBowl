import {Routes, Route} from 'react-router-dom';
import './App.css'
import AllPuppers from './components/AllPuppers'
import SinglePuppers from './components/SinglePupper';
import NewPlayerForm from './components/NewPlayerForm';

function App() {

  return (
    <div className="App">
      <NewPlayerForm/>
      <Routes>
        <Route path='/' element={<AllPuppers/>}/>
        <Route path='/pups/:id' element={<SinglePuppers/>}/>
      </Routes>
    </div>
  )
}

export default App
