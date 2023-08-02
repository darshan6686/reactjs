import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
import Navv from './Navv'

const Mix = () => {
  return (
    <BrowserRouter>
        <Navv />
        <Routes>
            <Route path='/' element={<Top />}></Route>
            <Route path='/Middel' element={<Middle />}></Route>
            <Route path='/Bottom' element={<Bottom />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Mix