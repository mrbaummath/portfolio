import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/home/Home'
import Projects from './components/projects/Projects';
import Navbar from './components/shared/Navbar';
import Resume from './components/Resume/Resume';

import logo from './logo.svg';
import './App.css';
import Hobbies from './components/hobbies/Hobbies';



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
            <Route
                path='/resume'
                element={<Resume />}
            />
            <Route
                path='/hobbies'
                element={<Hobbies />}
            />
        </Routes>
            
    </Fragment>
    )
}

export default App
