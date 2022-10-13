import { RiRadio2Fill } from 'react-icons/ri';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

function SidebarComp() {
    return (
        <div className="SidebarContainer">
            <div className="aside1 ">
                <AiFillHome className="sidebarmenu" />

                <RiRadio2Fill className="sidebarmenu" />

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
