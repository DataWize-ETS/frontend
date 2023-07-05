import './Top.css'
import { BiSolidUserCircle } from 'react-icons/bi'
import { Tooltip } from '@chakra-ui/react'
import img from '../../../assets/Logo-DataWise-png.png'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <>
            <img className="supergraphic" />
            <nav className="nav-main">

                <div className='brand'>
                    <img src={img} className='img-logo' alt="" />
                    <ul className='links-brand'>
                       
                        <li><Link to="/">Info Requester</Link></li>
                        <li><Link to="/improvement/new">New Request</Link></li>
                        <Link to="/improvement/pending"><li >Improvements Peeding*adm</li></Link>
                        
                    </ul>
                </div>

                <Tooltip label='Sing-in as admin' >
                    <button id='admin-button'><BiSolidUserCircle size={40} /></button>
                </Tooltip>
            </nav>
        </>
    )

} 