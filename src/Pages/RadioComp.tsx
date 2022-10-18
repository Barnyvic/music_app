import NavComp from '../components/NavComp';
import SidebarComp from '../components/SidebarComp';
import slider1 from '../images/Data/Slider1.png';
import slider2 from '../images/Data/Slider2.png';
import slider3 from '../images/Data/Slider3.png';
import slider4 from '../images/Data/Slider4.png';
import slider5 from '../images/Data/Slider5.png';
import slider6 from '../images/Data/Slider6.png';

const RadioComp = () => {
    return (
        <section className="radioContainer">
            <NavComp />
            <div className="radioContent-Container">
                <div className="radio-Left">
                    <SidebarComp />
                </div>
                <div className="radio-right">
                    <div className="radioContent1 flex items-center gap-9 p-3">
                        <button className="bg-[#FACD66] p-2 rounded-3xl text-[#1D2123] text-base">My collection</button>
                        <button className="rounded-3xl text-[#EFEEE0] btn-radio-2 text-base px-6 py-2">Likes</button>
                    </div>
                    <div className="radioContent2">
                        <div className="Radio-img-container">
                            <img className="" src={slider1} alt="" />
                            <img className="" src={slider3} alt="" />
                            <img className="" src={slider4} alt="" />
                            <img className="" src={slider6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const radioitems = [
    {
        img: slider4,
        text: 'Limits',
        text2: 'BurnaBoy'
    },
    {
        img: slider2,
        text: 'Limits',
        text2: 'BurnaBoy'
    },
    {
        img: slider1,
        text: 'Limits',
        text2: 'BurnaBoy'
    },
    {
        img: slider2,
        text: 'Limits',
        text2: 'BurnaBoy'
    },
    {
        img: slider5,
        text: 'Limits',
        text2: 'BurnaBoy'
    },
    {
        img: slider6,
        text: 'Limits',
        text2: 'BurnaBoy'
    },
    {
        img: slider4,
        text: 'Limits',
        text2: 'BurnaBoy'
    },
    {
        img: slider3,
        text: 'Limits',
        text2: 'BurnaBoy'
    }
];

export default RadioComp;
