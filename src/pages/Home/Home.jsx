import './Home.css';
import logoText from "../../assets/logan-text.png";
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="home-main">
            <div className='top-info'>
                <h1>Create patterned designs easy! this is not magic, this is <img id='text-logo' src={logoText} alt="Text logo" /></h1>
                <Link id="link" to="/info-requester"><Button className='get-started'
                    p={6}
                    w={100}
                    bg="#2096e6"
                    _hover={{ bg: "#2E7EB5" }}
                    color={"white"}>Get started</Button></Link>
            </div>

            <div className='mid-info'>
                <h2>About</h2>
                <p>A versatile solution for any project manager. Are you tired of the mess and lack of order in your <span>projects</span>? With Datawise we take care that your projects are created in the best possible standard, also that your data is sent in the safest way possible! </p>
            </div>

        </div>

    )
}