import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Admin from './components/Admin';
import Add from './components/Add';
import Edit from './components/Edit';
import Detail from './components/Detail';
import Home from './components/Home';
import './components/style.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin/create' element={<Add />} />
          <Route path='/admin/edit/:bookid' element={<Edit />} />
          <Route path='/detail/:bookid' element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
  
}

export default App;
