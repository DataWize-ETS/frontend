import { Route, Routes } from "react-router-dom";

import  Form from '../pages/Form/Form';
import ImprovementsPeending from '../pages/ImprovementsPeending/ImprovementsPeending';
import Page404 from '../pages/NotFound';

function RoutesApp() {
    return(
        <Routes>
            <Route path='/improvement/new' element={ <Form/> }/>
            <Route path="/improvement/pending" element={ <ImprovementsPeending/> }/>


            <Route path="*" element={ <Page404/> }/>
        </Routes>
    )
}

export default RoutesApp