import './Top.css'
import { BiSolidUserCircle } from 'react-icons/bi'
import { Tooltip } from '@chakra-ui/react'
import img from '../../../assets/Logo-DataWise-png.png'
import imagem from "../../../assets/footer-top-img.png"
import {Link} from 'react-router-dom'

export default () => {
    return (
        <>
            <img className="supergraphic" src={imagem} />
            <nav className="nav-main">

                <div className='brand'>
                    <Link to="/"><img src={img} className='img-logo' alt="Image with the logo project" /></Link>
                    <ul className='links-brand'>
                       
                        <li><Link to="/info-requester">Info Requester</Link></li>
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