import { Route, Routes } from "react-router-dom";

import  Form from '../pages/Form/Form';
import ImprovesPeending from '../pages/ImprovesPeeding/ImprovesPeeding';
import Page404 from '../pages/NotFound';
import InfoRequester from '../pages/InfoRequester/InfoRequester'
import Login from '../pages/Login'

import Private from './private'
import Public from './public'


function RoutesApp() {
    return(
        <Routes>
            <Route path='/'exact element={ <Public> <InfoRequester /> </Public> }/>
            <Route path='/login'exact element={ <Public> <Login /> </Public> }/>
            <Route path='/improvement/new' element={ <Form/> }/>
            <Route path="/improvement/pending" element={<Private> <ImprovesPeending/> </Private> }/>


            <Route path="*" element={ <Page404/> }/>
        </Routes>
    )
}

export default RoutesApp