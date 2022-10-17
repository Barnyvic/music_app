import { RiRadio2Fill } from 'react-icons/ri';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
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
                        <RiRadio2Fill className="sidebarmenu" />
                    </Link>
                </button>

                <Link to="/"></Link>
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
