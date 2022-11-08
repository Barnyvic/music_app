import NavComp from '../components/NavComp';
import SidebarComp from '../components/SidebarComp';
import viewChartImg from '../images/Data/Lead-image.png';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FiMusic } from 'react-icons/fi';
import { AiTwotoneHeart } from 'react-icons/ai';
import Viewslide from '../components/ViewChartSlider';

const ViewChart = () => {
    return (
        <section className="ViewChart-Container">
            <NavComp />
            <div className="ChartContent-Container">
                <div className="chart-Left">
                    <SidebarComp />
                </div>
                <div className="chart-right">
                    <div className="tomorrowTunes p-5   gap-3">
                        <img src={viewChartImg} alt="View chart img" />
                        <div className="tomorrowTunes-Content">
                            <h1 className="text-[#A4C7C6] tomorrowFont font-bold text-5xl mb-1">Tomorrow’s tunes</h1>
                            <p className="text-[#EFEEE0] text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet <br /> luctus venenatis
                            </p>
                            <span className="text-sm text-[#EFEEE0] ">64 songs ~ 16 hrs+</span>
                            <div className="tunesControllers flex items-center gap-2 mt-8">
                                <button className="flex items-center backdrop-blur-sm gap-1 p-1 px-3 bg-[#ffffff12] rounded text-sm">
                                    <AiFillPlayCircle className="text-[#FACD66]" /> Play all
                                </button>
                                <button className="flex items-center backdrop-blur-sm gap-1 p-1 px-3 bg-[#ffffff12] rounded text-sm">
                                    <FiMusic className="text-[#FACD66]" /> add to collections
                                </button>
                                <button className="p-2 rounded-full bg-[#ffffff12]">
                                    <AiTwotoneHeart className="text-[#E5524A]" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Viewslide />
                </div>
            </div>
        </section>
    );
};

export default ViewChart;
