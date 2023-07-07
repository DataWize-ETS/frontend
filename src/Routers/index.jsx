import { Route, Routes } from "react-router-dom";

import  Form from '../pages/Form/Form';
import ImprovesPeending from '../pages/ImprovesPeeding/ImprovesPeeding';
import Page404 from '../pages/NotFound';
import InfoRequester from '../pages/InfoRequester/InfoRequester'
import Login from '../pages/Login'
import Home from '../pages/Home/Home'

import Private from './private'
import Public from './public'


function RoutesApp() {
    return(
        <Routes>
            <Route path='/'exact element={ <Public> <Home /> </Public> }/>
            <Route path='/info-requester'exact element={ <Public> <InfoRequester /> </Public> }/>
            <Route path='/login'exact element={ <Public> <Login /> </Public> }/>
            <Route path="/improvement/pending" element={<Private> <ImprovesPeending/> </Private> }/>
            <Route path='/improvement/new' element={ <Form/> }/>
            <Route path='/improvement/new/:id' element={ <Private> <Form/> </Private> }/>


            <Route path="*" element={ <Page404/> }/>
        </Routes>
    )
}

export default RoutesApp