import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Update from './components/update/update';
import Delete from './components/delete/delete';

function App() {
  return (
    <Router>
    <div className='main'>
      <div>
        <h2 className='main-header'>React Crud Operations</h2>
      </div>

      
      <div>
        <Routes>
          <Route exact path='/' element={<Create/>}/>
        </Routes>
      </div>
      

      
      <div style={{marginTop: 20}}>
        <Routes>
          <Route exact path='/read' element={<Read/>}/>
        </Routes>
      </div>

      <Routes> 
        <Route path='/update' element={<Update/>}/>
        <Route path='/delete' element={<Delete/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
