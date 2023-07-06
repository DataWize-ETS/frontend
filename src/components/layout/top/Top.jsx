import './Top.css'
import { BiSolidUserCircle } from 'react-icons/bi'
import { AiOutlineLogout } from 'react-icons/ai'
import { Tooltip } from '@chakra-ui/react'
import img from '../../../assets/world_logo.png'
import { Link } from 'react-router-dom'
import line from '../../../assets/line-footer-top.png'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/auth';


export default () => {
    const { signed, logout } = useContext(AuthContext)

    function handleLogout() {
        logout()
    }

    return (
        <nav>
            <img className='supergraphic' src={line} />
            <div className="nav-main">
                <div className='brand'>
                    <Link to="/"><img src={img} className='img-logo' alt="Image with the logo project" /></Link>
                    <ul className='links-brand'>
                       
                        <li><Link to="/info-requester">Info Requester</Link></li>
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
                        <Tooltip label='Sing-in as admin'>
                            <Link to="/login" id='admin-button'><BiSolidUserCircle size={40}/></Link>
                        </Tooltip>
                    )}

            </div>
        </nav>
    )

} 