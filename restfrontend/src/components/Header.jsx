import React , {useState} from 'react';
import { Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

    const [isopen, setIsopen] = useState(false)

    function handleToggle(){
        setIsopen(!isopen)
    }
  return (
    <div className=' header'>
       <div className='h-2'>
          <Link to={'/'}>Urban-MU</Link>
         </div>

        <Link className='ham' onClick={handleToggle}>
        <FontAwesomeIcon icon={faBars} className="hamburger-icon" /></Link>
        {isopen &&  <Link className='close' onClick={handleToggle}>Close</Link> }
        


   
           <div className={`h-1 ${isopen ? 'show' : ''}`}>
             <Link to={'/'}>Home</Link>
             <Link to={'/about'}>About</Link>
             <Link to={'/cart'}>Cart</Link>
           </div>
              </div>
  )
}
