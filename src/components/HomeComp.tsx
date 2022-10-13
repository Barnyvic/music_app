import Likeimg from '../images/Data/Frame 4.png';
import Lgimg from '../images/Data/Lgimg.png';
import TopImg1 from '../images/Data/topimg3 (1).png';
import TopImg2 from '../images/Data/topimg3 (2).png';
import TopImg3 from '../images/Data/topimg3 (3).png';
import heart from '../images/Data/Stroke-1.png';
import { BsFillSuitHeartFill } from 'react-icons/bs';
import NavComp from './NavComp';
import SidebarComp from './SidebarComp';
import TopPlayersmComp from './TopPlayersmComp';

const HomeComp = () => {
    return (
        <div className="HomeMainContainer">
            <NavComp />
            <div className="HomeContainer">
                <SidebarComp />
                <div className="rightContainer">
                    <div className="rightContent1">
                        <div className="rightContents">
                            <div className="contentdiv ">
                                <p className="playlist">Currated playlist</p>
                                <div className="RandB">
                                    <h4>R & B Hits</h4>
                                    <p>All mine, Lie again, Petty call me everyday, Out of time, No love, Bad habit, and so much more</p>
                                    <div className="likediv">
                                        <div className="likeImgdiv">
                                            <img src={Likeimg} alt="a Rounded person" />
                                        </div>
                                        <div className="loveComp">
                                            <BsFillSuitHeartFill className="love" />
                                            <span className="love1">33k Likes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img className="Lgimg" src={Lgimg} alt="a person " />
                            </div>
                        </div>
                    </div>
                    <div className="rightContent2">
                        <h4 className="text-3xl ">Top charts</h4>
                        <div className="scroll">
                            {topChartItems.map((items) => (
                                <div className="chartContainer" key={items.id}>
                                    <div className="chartContent">
                                        <img src={items.img} alt="A cartoon" />
                                        <div className="chartTexts">
                                            <h6>{items.header}</h6>
                                            <p>{items.subheader}</p>
                                            <p className="time">{items.time}</p>
                                        </div>
                                    </div>
                                    <img src={items.img2} alt="heart svg" className="heart" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <TopPlayersmComp />
        </div>
    );
};

export default HomeComp;
const topChartItems = [
    {
        id: 1,
        img: TopImg1,
        header: 'Goldeb age of 80s',
        subheader: 'Sean swadder',
        time: '2:34:45',
        img2: heart
    },
    {
        id: 2,
        img: TopImg2,
        header: 'Reggae “n” blues',
        subheader: 'Dj YK mule',
        time: '1:02:42',
        img2: heart
    },
    {
        id: 3,
        img: TopImg3,
        header: 'Tomorrow’s tunes',
        subheader: 'Obi Datti',
        time: '2:01:25',
        img2: heart
    }
];
