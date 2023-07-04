import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/layout/footer/Footer';
import Top from './components/layout/top/Top';
import Routers from './components/Routers/Routers';
function App() {
    return (
        <>
            <BrowserRouter>
                <Top />
                <Routers />
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
