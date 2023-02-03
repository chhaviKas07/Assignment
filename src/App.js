import './App.css';
import Details from './Components/Details.js/Details';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Details />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
