import { RiRadio2Fill } from 'react-icons/ri';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaMusic } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function SidebarComp() {
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    return (
        <div className="SidebarContainer">
            <div className="aside1 ">
                <button className={splitLocation[1] === '' ? 'active' : 'link'}>
                    <Link to="/">
                        <AiFillHome className="sidebarmenu" />
                    </Link>
                </button>
                <button className={splitLocation[1] === 'viewchart' ? 'active' : 'link'}>
                    <Link to="/viewchart">
                        <FaMusic className="sidebarmenu" />
                    </Link>
                </button>

                <button className={splitLocation[1] === 'radio' ? 'active' : 'link'}>
                    <Link to="/radio">
                        <RiRadio2Fill className="sidebarmenu" />
                    </Link>
                </button>

                <BsCameraVideoFill className="sidebarmenu" />
            </div>
            <div className="aside2">
                <BsFillFilePersonFill className="sidebarmenu" />
                <FiLogOut className="sidebarmenu" />
            </div>
        </div>
    );
}

export default SidebarComp;
