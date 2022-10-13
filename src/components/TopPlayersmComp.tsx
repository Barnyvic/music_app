import TopImg1 from '../images/Data/topimg3 (1).png';
import TopImg2 from '../images/Data/topimg3 (2).png';
import TopImg3 from '../images/Data/topimg3 (3).png';
import heart from '../images/Data/Stroke-1.png';
import Slider from 'react-slick';

function TopPlayersmComp() {
    return (
        <div className="TopplayerSlider px-5 py-5">
            <Slider {...settings}>
                {topChartItems.map((items) => (
                    <div className=" topPlayerContainer p-4 rounded-3xl" key={items.id}>
                        <div className="flex items-start justify-between">
                            <div>
                                <img src={items.img} alt="" />
                                <div>
                                    <h6 className="text-lg">{items.header}</h6>
                                    <p className="color text-base text-[#ffffff80]">{items.subheader}</p>
                                    <p className="text-sm">{items.time}</p>
                                </div>
                            </div>
                            <img src={items.img2} alt="heart svg" className=" p-3 rounded-full bdr" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TopPlayersmComp;

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

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
