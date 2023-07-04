import { Route, Routes } from "react-router-dom"
import  Form from '../pages/Form/Form'
import ImprovementsPeending from '../pages/ImprovementsPeending/ImprovementsPeending'

export default () => {
    return (
        <>
            <Routes>
                <Route  path="/" exact element={< Form />}/>
                <Route  path="/improvements-pending" exact element={< ImprovementsPeending />}/>
            </Routes>
        </>
    )
}