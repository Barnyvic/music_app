import Slider from 'react-slick';
import slider1 from '../images/Data/Slider1.png';
import slider2 from '../images/Data/Slider2.png';
import slider3 from '../images/Data/Slider3.png';
import slider4 from '../images/Data/Slider4.png';
import slider5 from '../images/Data/Slider5.png';
import slider6 from '../images/Data/Slider6.png';

const SliderComp = () => {
    return (
        <section className="p-2 py-5 SliderContainer">
            <Slider {...settings}>
                {SliderItems.map((sliders) => (
                    <div className="SliderContents" key={sliders.id}>
                        <img src={sliders.img} alt="SliderImages" />
                        <p className="font-bold mt-1 ml-1">{sliders.text}</p>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default SliderComp;

const SliderItems = [
    {
        id: 1,
        img: slider3,
        text: 'Harry Styles'
    },
    {
        id: 2,
        img: slider1,
        text: 'Harry Styles'
    },
    {
        id: 3,
        img: slider6,
        text: 'Harry Styles'
    },
    {
        id: 4,
        img: slider3,
        text: 'Harry Styles'
    },
    {
        id: 5,
        img: slider5,
        text: 'Harry Styles'
    },
    {
        id: 6,
        img: slider4,
        text: 'Harry Styles'
    },
    {
        id: 7,
        img: slider2,
        text: 'Harry Styles'
    },
    {
        id: 8,
        img: slider6,
        text: 'Harry Styles'
    },
    {
        id: 9,
        img: slider4,
        text: 'Harry Styles'
    },
    {
        id: 10,
        img: slider1,
        text: 'Harry Styles'
    }
];

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};
