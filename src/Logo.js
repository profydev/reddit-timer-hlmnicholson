import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

const Logo = () => <Link to="/"><img src={logo} alt="Logo" /></Link>;

export default Logo;
