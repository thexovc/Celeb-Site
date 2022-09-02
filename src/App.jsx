import React from 'react'
import { Route, Routes } from 'react-router-dom';
import CelebList from './pages/CelebList'
import About from './pages/About';
import CelebDetail from './pages/CelebDetail';


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<CelebList />} />
            <Route path='about' element={<About />} />
            <Route path='detail/:id' element={<CelebDetail />} />
        </Routes>
    )
}

export default App