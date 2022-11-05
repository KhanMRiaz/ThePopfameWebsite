

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import PrivateRoute from './Component/PrivateRoute';
import { Provider } from "react-redux";
import Layout from './Component/Layout';
//pages imports
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Private from './Component/Private';
import Messages from "./Pages/Messages";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from "./Redux/store";
import ResetPassword from "./Pages/ResetPassword";
import OTP from "./Pages/OTP";
import SignUp from "./Pages/SignUp";

function App() {
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Layout>
              <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/reset' element={<ResetPassword />} />
                <Route path='/otp' element={<OTP />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/' element={<Home />} />
                <Route path='/chat' element={<PrivateRoute component={Messages} />} exact />
                {/* <Redirect from='*' to='/'/> */}
              </Routes>
            </Layout>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}
export default App;


