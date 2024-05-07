import './header.css';
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';
const Header=()=>{
    const[openmenu,setOpenMenu]=useState(false);
    const openClick=()=>{
        setOpenMenu(!openmenu);
    };
    const scrollToSection=(id)=>{
        const section=document.getElementById(id);
        if (section) {
            section.scrollIntoView();
            console.log(section);
        }
    }
    return (
        <section className='header_container'>
            <section className='header_grid'>
                <div className='header_content'>
                    <div className='heading'>
                        <div><h1 style={{width:'100%'}}>Godavari Spicy</h1></div>
                        <div><img src='https://idealdesigns.in/wp-content/uploads/2017/02/godavari.jpg' style={{width:'65px',paddingLeft:'10px',borderRadius:'50%'}}></img></div>
                    </div>
                    <div className='open_menu'>
                        <button onClick={openClick}>
                            <FiAlignJustify />
                        </button>
                    </div>
                    <div className='header_items'>
                        <ul style={{color:'red'}} className={openmenu ? "open" : ""}>
                            <li>
                                <a href='#' onClick={()=>scrollToSection('about_container')}>About</a>
                            </li>
                            <li>
                                <a href='#' onClick={()=>scrollToSection('service_container')}>Services</a>
                            </li>
                            <li>
                                <a href='#' onClick={()=>scrollToSection('gallery_container')}>Gallery</a>
                            </li>
                            <li>
                                <a href='#' style={{color:'blue'}} onClick={()=>scrollToSection('contact_container')}>Contact</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </section>
        </section>
    )
}
export default Header;