import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Footer from './components/layout/footer/Footer';
import Top from './components/layout/top/Top';
import Routers from './Routers';
import AuthProvider from "./contexts/auth";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Top />
                    <ToastContainer autoClose={3000} />
                    <Routers />
                    <Footer />
                </AuthProvider>

            </BrowserRouter>

        </>
    );
}

export default App;
