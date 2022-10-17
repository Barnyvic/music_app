import { RiRadio2Fill } from 'react-icons/ri';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function SidebarComp() {
    return (
        <div className="SidebarContainer">
            <div className="aside1 ">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'link')}>
                    <AiFillHome className="sidebarmenu" />
                </NavLink>
                <NavLink to="/viewchart">
                    <RiRadio2Fill className="sidebarmenu" />
                </NavLink>

                <RiRadio2Fill className="sidebarmenu" />

                <AiFillHome className="sidebarmenu" />
            </div>
            <div className="aside2">
                <BsFillFilePersonFill className="sidebarmenu" />
                <BsFillFilePersonFill className="sidebarmenu" />
            </div>
        </div>
    );
}

export default SidebarComp;
