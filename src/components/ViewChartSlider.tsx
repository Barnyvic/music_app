import slider1 from '../images/Data/Slider1.png';
import slider2 from '../images/Data/Slider2.png';
import slider3 from '../images/Data/Slider3.png';
import slider4 from '../images/Data/Slider4.png';
import slider5 from '../images/Data/Slider5.png';
import slider6 from '../images/Data/Slider6.png';
import { AiTwotoneHeart } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import DataTable, { TableColumn } from 'react-data-table-component';
import React from 'react';
import { customStyles } from './Datatable';

interface Datarow {
    id: number;
    img: string;
    icon1: JSX.Element;
    text: string;
    AlbumName: string;
    songMin: string;
    icon2: JSX.Element;
}

const columns: TableColumn<Datarow>[] = [
    {
        cell: (row) => (
            <div className="flex gap-4 items-center">
                <img className="w-20 albumImg" src={row.img} alt="" />
                <button className="btn-heart">{row.icon1}</button>
            </div>
        ),
        maxWidth: '10%'
    },
    {
        cell: (row) => (
            <div className="flex gap-4  albumName  w-full justify-evenly">
                <div className="w-full albumContent text-center">
                    <p>{row.text}</p>
                </div>
                <div className=" w-full albumContent text-center">
                    <p>{row.AlbumName}</p>
                </div>
            </div>
        )
    },
    {
        cell: (row) => (
            <div className="flex gap-4 items-center albumTime justify-between  w-full">
                <p>{row.songMin}</p>
                <button className="text-[#FACD66]">{row.icon2}</button>
            </div>
        ),
        maxWidth: '30%'
    }
];

const Viewslide = () => {
    return <DataTable columns={columns} data={ViewSlideItems} customStyles={customStyles} />;
};

export default Viewslide;

const ViewSlideItems = [
    {
        id: 1,
        img: slider1,
        icon1: <AiTwotoneHeart />,
        text: 'Let me love you ~ Krisx',
        AlbumName: 'Single',
        songMin: '4:17',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 2,
        img: slider5,
        icon1: <AiTwotoneHeart />,
        text: 'Stand strong ~ Davido',
        AlbumName: 'African giant',
        songMin: '2:02',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 3,
        img: slider2,
        icon1: <AiTwotoneHeart />,
        text: 'Watin man go do ~ Burna',
        AlbumName: 'Single',
        songMin: '3:23',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 4,
        img: slider1,
        icon1: <AiTwotoneHeart />,
        text: 'Closa ~ Ybee',
        AlbumName: 'Obi datti',
        songMin: '2:30',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 5,
        img: slider4,
        icon1: <AiTwotoneHeart />,
        text: 'Let me love you ~ Krisx',
        AlbumName: 'Single',
        songMin: '4:17',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 6,
        img: slider5,
        icon1: <AiTwotoneHeart />,
        text: 'Let me love you ~ Krisx',
        AlbumName: 'Single',
        songMin: '4:17',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 7,
        img: slider2,
        icon1: <AiTwotoneHeart />,
        text: 'Let me love you ~ Krisx',
        AlbumName: 'Single',
        songMin: '4:17',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 8,
        img: slider3,
        icon1: <AiTwotoneHeart />,
        text: 'Let me love you ~ Krisx',
        AlbumName: 'Single',
        songMin: '4:17',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 9,
        img: slider6,
        icon1: <AiTwotoneHeart />,
        text: 'Let me love you ~ Krisx',
        AlbumName: 'Single',
        songMin: '4:17',
        icon2: <BsThreeDotsVertical />
    },
    {
        id: 10,
        img: slider4,
        icon1: <AiTwotoneHeart />,
        text: 'Let me love you ~ Krisx',
        AlbumName: 'Single',
        songMin: '4:17',
        icon2: <BsThreeDotsVertical />
    }
];
