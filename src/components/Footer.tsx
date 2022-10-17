import footerImg from '../images/Data/footerImg.png';
import { RiShuffleFill } from 'react-icons/ri';
import { AiOutlineFastBackward } from 'react-icons/ai';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import { AiOutlineFastForward } from 'react-icons/ai';
import { TbRepeat } from 'react-icons/tb';
import { BsFillVolumeUpFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="bg-blue-600 fixed w-full footer p-2">
            <div className="footerContainer flex items-center pt-2 justify-evenly">
                <div className="FooterImg pt-2 flex items-center gap-2">
                    <img src={footerImg} alt="footer img" />
                    <div className="Fcontents">
                        <p className="font-bold Fheader">Seasons in</p>
                        <p className="text-sm text-[#ffffff70]">lorem</p>
                    </div>
                </div>
                <div className="FooterControlers flex flex-col pt-2 items-center gap-2  mr-5">
                    <div className="ControllersDiv flex items-center justify-between gap-20 ml-5">
                        <RiShuffleFill className="Control1" />
                        <AiOutlineFastBackward className="Control1" />
                        <AiOutlinePlayCircle className="Control" />
                        <AiOutlineFastForward className="Control1" />
                        <TbRepeat className="Control1" />
                    </div>
                    <div className="MusicRange">
                        <input type="range" />
                    </div>
                </div>
                <div className="FooterVolume flex items-end gap-1 mt-10 ">
                    <BsFillVolumeUpFill className="Control1" />
                    <input type="range" className="Volume" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
