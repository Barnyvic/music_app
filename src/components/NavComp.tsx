import logo from "../images/Data/Logo4.png";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function NavComp() {
  const [Open, setOpen] = useState(false);
  const handleClick = () => setOpen(!Open);
  return (
    <>
      <nav>
        <div className="NavContainer">
          <div className="imgContainer">
            <div onClick={handleClick}>
              {Open ? (
                <IoMdClose className="menu" />
              ) : (
                <HiOutlineMenuAlt4 className="menu" />
              )}
            </div>
            <img src={logo} alt="Musical Note" />
          </div>
          <div className="inputContainer">
            <BsSearch className="searchIcon" />
            <input placeholder="Search artists" />
          </div>
          {Open && <div className="smallScreenMenu"></div>}
        </div>
      </nav>
    </>
  );
}

export default NavComp;
