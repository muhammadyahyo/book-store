import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from '../components/NotFound/';
import { navbar } from '../utils/navbar';



const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        {
                    navbar.map(({path, element, id}) => {
                        return <Route key={id} path={path} element={element}/>
                    })
                }
        </Route>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/' element={<Navigate to={'/home'} />}/>
      </Routes>

    </BrowserRouter>
  )
}

export default Root