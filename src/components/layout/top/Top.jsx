import './Top.css'
import { BiSolidUserCircle } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import { Tooltip } from '@chakra-ui/react'
<<<<<<< HEAD
import img from '../../../assets/Logo-DataWise-png.png'
import imagem from "../../../assets/footer-top-img.png"
import {Link} from 'react-router-dom'

export default () => {
    return (
        <>
            <img className="supergraphic" src={imagem} />
            <nav className="nav-main">
=======
import img from '../../../assets/world_logo.png'
import { Link } from 'react-router-dom'
import image from '../../../assets/back.svg'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth';

export default () => {
    const { signed, logout } = useContext(AuthContext)
>>>>>>> da2d749fd29f8185d4d0afdf709cb42aa67b1ff5


    function handleLogout() {
        logout()
    }

    return (
        <nav>
            <img alt="" style={{ "background": `url(${image})` }} className='supergraphic' />
            <div className="nav-main">
                <div className='brand'>
                    <Link to="/"><img src={img} className='img-logo' alt="Image with the logo project" /></Link>
                    <ul className='links-brand'>
<<<<<<< HEAD
                       
                        <li><Link to="/info-requester">Info Requester</Link></li>
=======

                        <li><Link to="/">Info Requester</Link></li>
>>>>>>> da2d749fd29f8185d4d0afdf709cb42aa67b1ff5
                        <li><Link to="/improvement/new">New Request</Link></li>
                        {signed ? (<Link to="/improvement/pending"><li >Improvements Peeding</li></Link>) : ('')}

                    </ul>
                </div>


                {signed ? 
                (
                    <Tooltip label='Logout' >
                            <button id='admin-button' onClick={handleLogout}><AiOutlineLogout size={40}  color='#0091fe'/></button>
                        </Tooltip>
                ) :
                    (
                        <Tooltip label='Sing-in as admin' >
                            <button id='admin-button'><BiSolidUserCircle size={40}/></button>
                        </Tooltip>
                    )}

            </div>
        </nav>
    )

} 