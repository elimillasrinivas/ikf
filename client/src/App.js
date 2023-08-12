import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Menu from "./components/Menu";
import CreateLead from './components/CreateLead';
import DisplayLead from './components/DisplayLead';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/create-lead' element={<CreateLead/>}/>
        <Route path='/display-lead' element={<DisplayLead/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
