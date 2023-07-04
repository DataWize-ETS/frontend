import { Route, Routes } from "react-router-dom"
import  Form from '../pages/Form/Form'
export default (props) => {
    return (
        <>
            <Routes>
                <Route  path="/" exact element={< Form />}/>
            </Routes>
        </>

    )
}