import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddPlayer from './Components/AddPlayer'
import ListPlayerComponent from './Components/ListPlayerComponent'
import UpdatePlayer from './Components/UpdatePlayer'
import ShowPlayerDetail from './Components/ShowPlayerDetail'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import FindPlayer from './Components/FindPlayer'
import FindByName from './Components/FindByName'
import NoMatch from './Components/NoMatch'
import FindByCountry from './Components/FindByCountry'
import FindByRuns from './Components/FindByRuns'

function App () {
  return (
  
    <div className='container'>
      <HeaderComponent />

      <div>
        <Routes>
          <Route exact path='/' element={<ListPlayerComponent />} />
          <Route path='player-component' element={<ListPlayerComponent />} />
          
          <Route path='add-player' element={<AddPlayer />} />
          <Route path='find-player/' element={<FindPlayer />} />

          <Route path='find-by-name/:name' element={<FindByName />} />
          <Route path='find-by-country/:country' element={<FindByCountry />}/>
          <Route path='find-by-gt-runs/:runs' element={<FindByRuns />}/>

          <Route path='update-player/:id' element={<UpdatePlayer />} />
          <Route path='show-player/:id' element={<ShowPlayerDetail />} />
          
          <Route path = '*' element={<NoMatch />}/>
        </Routes>
      </div>

      <FooterComponent />
    </div>
  )
}

export default App
