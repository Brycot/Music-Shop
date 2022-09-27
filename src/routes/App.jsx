import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

function App() {
  return (
    <HashRouter>
        <Layout>
          <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/new-password' element={<Login/>} />
              <Route exact path='/recovery-password' element={<RecoveryPassword />} />
              <Route exact path='*' element={<NotFound />} />
          </Routes>
        </Layout>
    </HashRouter>
  )
}

export default App