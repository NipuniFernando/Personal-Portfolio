import React from 'react'
import {Link} from "react-scroll";
import logo from "../../assets/LL.png";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  return (
    <div className="w-full h-20 mx-auto flex justify-between items-center font: font-titleFont">
        <div>
            <img src={logo} alt="logo" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div>
            <ul className="flex items-center gap-10">
                {
                    navLinksdata.map(({_id, title, link})=>(
                        <li 
                        className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                        key={_id}>
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Navbar