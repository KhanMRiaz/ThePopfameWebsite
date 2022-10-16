

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import PrivateRoute from './Component/PrivateRoute';
import { Provider } from "react-redux";
import store from './Redux/store';
import Layout from './Component/Layout';
//pages imports
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Private from './Component/Private';
// import Data from './Component/Data';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Layout>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Home/>} />
              <Route path='/private' element={<PrivateRoute component={Private}/>} exact />
            </Routes>
          </Layout>  
        </Router>
      </div>
    </Provider>
  );
}
export default App;


