import logo from '../images/Data/Logo4.png';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import { BsCameraVideoFill } from 'react-icons/bs';
import { RiRadio2Fill } from 'react-icons/ri';
import { FaMusic } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { BsFillFilePersonFill } from 'react-icons/bs';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

function NavComp() {
    const [Open, setOpen] = useState(false);
    const handleClick = () => setOpen(!Open);
    const { pathname } = useLocation();
    //destructuring pathname from location

    return (
        <>
            <nav>
                <div className="NavContainer">
                    <div className="imgContainer">
                        <div onClick={handleClick}>{Open ? <IoMdClose className="menu" /> : <HiOutlineMenuAlt4 className="menu" />}</div>
                        <img src={logo} alt="Musical Note" />
                    </div>
                    <div className="inputContainer">
                        <BsSearch className="searchIcon" />
                        <input placeholder="Search artists" />
                    </div>
                    {Open && (
                        <div className="smallScreenMenu absolute pt-20 pl-4 rounded ...">
                            <div>
                                {SmallNavItems.map((items) => (
                                    <div className="flex flex-col mb-9">
                                        <Link to={items.path} className={pathname === items.path ? 'active' : 'link'}>
                                            <div className="flex items-center gap-4 hover:bg-blue-500 hover:rounded-r-lg p-2">
                                                <p>{items.Icon}</p>
                                                <p className="font-bold text-base">{items.text}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default NavComp;

const SmallNavItems = [
    {
        id: 1,
        Icon: <AiFillHome style={{ fontSize: '2rem' }} />,
        text: 'Home',
        path: '/'
    },
    {
        id: 2,
        Icon: <FaMusic style={{ fontSize: '2rem' }} />,
        text: 'My collections',
        path: '/viewchart'
    },
    {
        id: 3,
        Icon: <RiRadio2Fill style={{ fontSize: '2rem' }} />,
        text: 'Radio',
        path: '/radio'
    },
    {
        id: 4,
        Icon: <BsCameraVideoFill style={{ fontSize: '2rem' }} />,
        text: 'Music videos',
        path: '/video'
    },
    {
        id: 5,
        Icon: <BsFillFilePersonFill style={{ fontSize: '2rem' }} />,
        text: 'Profile',
        path: '/profile'
    },
    {
        id: 6,
        Icon: <FiLogOut style={{ fontSize: '2rem' }} />,
        text: 'Log out',
        path: '/logout'
    }
];
