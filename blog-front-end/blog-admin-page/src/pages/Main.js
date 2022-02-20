import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Admin from "./Admin";

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </Router>
    )
}

export default Main