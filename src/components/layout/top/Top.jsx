import './Top.css'
import { BiSolidUserCircle } from 'react-icons/bi'
import { Tooltip } from '@chakra-ui/react'
import img from '../../../assets/world_logo.png'
import {Link} from 'react-router-dom'
import image from '../../../assets/back.svg'

export default () => {
    return (
        <nav>
            <img alt="" style={{"background": `url(${image})`}} className='supergraphic'/>
            <div className="nav-main">
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
            </div>
        </nav>
    )

} 