import { BrowserRouter } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Top from './components/layout/Top/Top';
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
