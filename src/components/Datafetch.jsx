import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SliderComp from './SliderComp';
function Datafetch() {
    const [data, setdata] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
            params: { id: '37i9dQZF1DX4Wsb4d7NKfP', offset: '0', limit: '50' },
            headers: {
                'X-RapidAPI-Key': '344f9a8aa7msheb89d0439e4f0ffp165a03jsn5dcdd8f75d8f',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        const getData = async () => {
            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <SliderComp />
        </div>
    );
}

export default Datafetch;
