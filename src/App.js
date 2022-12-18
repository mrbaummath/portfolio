import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import Projects from './components/projects/Projects';
import Navbar from './components/shared/Navbar';

import logo from './logo.svg';
import './App.css';



function App() {

    

    return (
    <Fragment>
               
        <Navbar />
        <Routes>
            <Route 
                path ='/'
                element={<Home />}
            />
            <Route
                path='/projects'
                element={<Projects />}
            />
        </Routes>
            
    </Fragment>
    )
}

export default App;
