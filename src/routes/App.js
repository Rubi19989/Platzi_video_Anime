import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Register';
import Home from '../containers/Home'
import ModalVideo from '../containers/ModalVideo';

//https://www.themoviedb.org/list/8262749

const App = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='/player/:id' element={<ModalVideo />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Layout>

    </BrowserRouter>
)

export default App;