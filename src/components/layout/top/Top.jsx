import './Top.css'
import { BiSolidUserCircle } from 'react-icons/bi'
import { Tooltip } from '@chakra-ui/react'
import img from '../../../assets/logo.svg'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <>
            <img className="supergraphic" />
            <nav className="nav-main">

                <div className='brand'>
                    <img src={img} className='img-logo' alt="" />
                    <ul className='links-brand'>
                       
                        <li><Link to="">Info Requester</Link></li>
                        <Link to=""><li >Improvements Peeding*adm</li></Link>
                        
                    </ul>
                </div>

                <Tooltip label='Sing-in as admin' >
                    <button id='admin-button'><BiSolidUserCircle size={40} /></button>
                </Tooltip>
            </nav>
        </>
    )

} 