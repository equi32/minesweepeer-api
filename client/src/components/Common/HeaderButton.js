import React from 'react';
import { Link } from 'react-router-dom';

const HeaderButton = props => (
    <Link
        to={ props.to } 
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        { props.children }
    </Link>
)
 
export default HeaderButton;