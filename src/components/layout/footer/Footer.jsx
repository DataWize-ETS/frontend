import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BsFacebook } from 'react-icons/bs'
import { ImGoogle3 } from 'react-icons/im'
<<<<<<< HEAD
import imagem from "../../../assets/footer-top-img.png"
=======
import image from '../../../assets/back.svg'
>>>>>>> da2d749fd29f8185d4d0afdf709cb42aa67b1ff5
import './Footer.css'
export default () => {
    return (
        <>
            <footer className="footer-main">
                <div className='footer-section1'>
                    <i className='social-media-icon'><BiLogoInstagramAlt size={40} color='#fff' /></i>
                    <i className='social-media-icon'><BsFacebook size={35} color='#fff' /></i>
                    <i className='social-media-icon'><ImGoogle3 size={35} color='#fff' /></i>
                </div>
                <hr className='central-line' />

                <div className='footer-section2'>
                    <div className='text-footer-section2'>
                        <h1>Project CIP GS</h1>
                        <h3>Corporate information</h3>
                        <h3>Privacy Statement</h3>
                        <h3>Legal notice</h3>
                    </div>
                </div>
<<<<<<< HEAD
                <img className="supergraphic" src={imagem} />
=======
                <img style={{"background": `url(${image})`}} className='supergraphic'/>
>>>>>>> da2d749fd29f8185d4d0afdf709cb42aa67b1ff5
            </footer>
        </>
    )
}