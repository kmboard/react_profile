import React from 'react';

export default function Navigation({ currentPage, handlePageChange }) {
    
    return (
    <nav>
        <a href="/About" onClick={() => handlePageChange('About')}>Home</a>
        <a href="/Portfolio" onClick={() => handlePageChange('Project')}>Portfolio</a>
        <a href="/Contact" onClick={() => handlePageChange('Contact')}>Contact </a>
    </nav>
    )
}