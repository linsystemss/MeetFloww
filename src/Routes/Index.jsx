import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Login from '../componenet/Login/Login';
import Register from '../componenet/Register/Register';
import Home from "../componenet/HomePage/Index";
import WhyLexxi from "./WhyLexxi/index";


const Routers = ({handleNavbarItemClick,selectedNavItem }) => {
    return (
        <Routes>
            <Route path="/"  element={<Home handleNavbarItemClick={handleNavbarItemClick} selectedNavItem={selectedNavItem} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/aiMeeting" element={<WhyLexxi />} />

        </Routes>
    );
};

export default Routers;
