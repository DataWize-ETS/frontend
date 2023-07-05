import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from '../services/api';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)
    const [storageUser, setStorageUser] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem("@user")

            if (storageUser) {
                setUser(JSON.parse(storageUser))
                setStorageUser(JSON.parse(storageUser))
                setLoading(false)
            }

            setLoading(false)
        }

        loadUser()
    }, [])



    async function signIn(email, password) {
        setLoadingAuth(true)

        const form_data = new FormData()

        form_data.append("username", email)
        form_data.append("password", password)
        //Fazer login
        const response = await axios.post('/user/login', form_data)
            .then(async (value) => {
                const token = value.data.token
                setUser(value.data.user)
                setStorageUser(value.data.user)
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


    // async function signUp(name, email, password) {
    //     setLoadingAuth(true)

    //     await createUserWithEmailAndPassword(auth, email, password)
    //         .then(async (value) => {
    //             let uid = value.user.uid

    //             let ref = doc(db, "users", uid)
    //             await setDoc(ref, { name: name, avatarUrl: null })
    //                 .then(() => {
    //                     let data = {
    //                         uid: uid,
    //                         name: name,
    //                         email: value.user.email,
    //                         avatarUrl: null
    //                     }

    //                     setUser(data)
    //                     storageUser(data)
    //                     setLoadingAuth(false)
    //                     toast.success('Seja bem vindo ao sistema!')
    //                     navigate('/home')
    //                 }).catch((e) => {
    //                     // console.log(e)
    //                     // console.log(e.code)
    //                     setLoadingAuth(false)
    //                 })
    //         })
    //         .catch((error) => {
    //             setLoadingAuth(false)
    //             // console.log(error)
    //             // console.log(error.code)
    //             if (error.code === 'auth/email-already-in-use') {
    //                 toast.error('O email digitado já possui um cadastro')
    //             } else {
    //                 toast.error('Erro ao cadastrar usuário')
    //             }
    //         })
    // }

    // function storageUser(data) {
    //     localStorage.setItem('@user', JSON.stringify(data))
    // }


    // async function logout() {
    //     await signOut(auth)
    //     localStorage.removeItem("@user")
    //     setUser(null)
    // }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, /*signUp, logout,*/ loadingAuth, loading, setStorageUser, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider