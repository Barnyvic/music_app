import logo from '../images/Data/Logo4.png';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';

function NavComp() {
    const [Open, setOpen] = useState(false);
    const handleClick = () => setOpen(!Open);
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
                            {SmallNavItems.map((items) => (
                                <div key={items.id}>
                                    <div className="flex flex-col mb-9">
                                        <div className="flex items-center gap-4 hover:bg-blue-500 hover:rounded-r-lg p-2">
                                            <p>{items.Icon}</p>
                                            <p className="font-bold text-base">{items.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
        text: 'Home'
    },
    {
        id: 2,
        Icon: <AiFillHome style={{ fontSize: '2rem' }} />,
        text: 'My collections'
    },
    {
        id: 3,
        Icon: <AiFillHome style={{ fontSize: '2rem' }} />,
        text: 'Radio'
    },
    {
        id: 4,
        Icon: <AiFillHome style={{ fontSize: '2rem' }} />,
        text: 'Music videos'
    },
    {
        id: 5,
        Icon: <AiFillHome style={{ fontSize: '2rem' }} />,
        text: 'Profile'
    },
    {
        id: 6,
        Icon: <AiFillHome style={{ fontSize: '2rem' }} />,
        text: 'Log out'
    }
];
