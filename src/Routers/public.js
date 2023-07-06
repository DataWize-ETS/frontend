import { useContext } from "react"
import { AuthContext } from "../contexts/auth";
import { Navigate } from "react-router-dom";

export default function Public({children}) {

    const { signed, loading } = useContext(AuthContext)

    if(loading) {
        return(
            <></>
        )
    }

    if(signed) {
       return <Navigate to="/improvement/pending"/>
    }

    return children
}