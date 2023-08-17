import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import {HiX} from 'react-icons/hi';
import {FaBars} from 'react-icons/fa';
import { Link } from "react-router-dom";
import './styles.scss'

const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

function Navber() {

    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcons = () =>{
        setToggleIcon(!toggleIcon)
    }

  return (
    <div>
      <nav className="navber">
        <div className="navber__container">
          <Link to={"/"} className="navber__container__logo">
            <AiOutlineHome size={30} />
          </Link>
        </div>
        <ul className={`navber__container__menu ${toggleIcon ? "active" : ""}`}>
            {
                data.map((item, key)=>(
                    <li key={key} className="navber__container__menu__item">
                        <Link className="navber__container__menu__item__links" to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
        <div className="nav-icon" onClick={handleToggleIcons}>
                {
                    toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                }
        </div>
      </nav>
    </div>
  );
}

export default Navber;
