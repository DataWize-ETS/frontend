import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from '../services/api';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()


    useEffect(() => {
        async function loadUser() {
            const storageuser = localStorage.getItem("@user")

            if (storageuser) {
                setUser(JSON.parse(storageuser))
                storageUser(JSON.parse(storageuser))
                setLoading(false)
            }

            setLoading(false)
        }

        loadUser()
    }, [])

    function storageUser(data) {
        localStorage.setItem('@user', JSON.stringify(data))
    }

    async function signIn(email, password) {
        setLoadingAuth(true)

        const form_data = new FormData()

        form_data.append("username", email)
        form_data.append("password", password)

        const response = await axios.post('/user/login', form_data)
            .then(async (value) => {
                const token = value.data.token
                setUser(value.data.user)
                storageUser(value.data.user)
                console.log(token)
                localStorage.setItem("@bearer", token)
                setLoadingAuth(false)
                toast.success('Bem-vindo(a) de volta!')
                navigate("/improvement/pending")
            })
            .catch((e) => {
                console.log(e)
                toast.error('Ops algo deu errado!')
                setLoadingAuth(false)
            })

    }


    async function logout() {
        localStorage.removeItem("@user")
        localStorage.removeItem("@bearer")
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, /*signUp,*/ logout, loadingAuth, loading, storageUser, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider