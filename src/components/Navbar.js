import React, { useRef } from 'react'

const Navbar = () => {
    const hamburger = useRef()
    const navLinks = useRef()    

    const handleClick=()=>{        
        const hamWrapper  = document.querySelectorAll('.line')        
        hamWrapper.forEach((line)=>{
            line.classList.toggle('open')
        })
        navLinks.current.classList.toggle('openNav')                
        console.log(hamWrapper, navLinks.current)
        
    }

    return (
        
        <nav>
            <div className="logo">
                <span>TESS BROWNE</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur.
                </span>
            </div>
            <ul ref={navLinks} className="navLinks">                
                <li><a href="#">link</a></li>                
                <li><a href="#">link</a></li>                
                <li><a href="#">link</a></li>                
                <li><a href="#">link</a></li>                
                <li><a href="#">link</a></li>                
                <li><a href="#">link</a></li>                
            </ul>  
            <div ref={hamburger} className="hamburger" onClick={handleClick}>
                <div className="line"></div>
                <div className="line"></div>                
            </div>                                 
        </nav>
    )
}

export default Navbar
