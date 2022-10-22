

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
import Messages from "./Pages/Messages";
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
              <Route path='/chat' element={<PrivateRoute component={Messages}/>} exact />
            </Routes>
          </Layout>  
        </Router>
      </div>
    </Provider>
  );
}
export default App;


