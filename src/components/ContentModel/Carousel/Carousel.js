import React, {useState, useEffect} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";
import {img_300, REACT_APP_API_KEY} from "../../../constans/constans";
import './Carousel.css';
import noPicture from './image/No_Picture.jpg';

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({media_type,id}) => {
    const [credits, setCredits] = useState();
    const items =(credits && credits.map((c) => (
        <div className={'carouselItem'}>
            <img
                src={c.profile_path ? `${img_300}/${c.profile_path}`: noPicture}
                 alt={c?.name}
                 onDragStart={handleDragStart}
                className={'carouselItem_img'}
            />
            <b className={'carouselItem_txt'}>{c?.name}</b>
        </div>
)));
    const responsive = {
        0: {
            items: 3,
        },
        512: {
            items: 5,
        },
        1024: {
            items: 7,
        },
    };
    const fetchCredits = async () => {
        const { data } = await axios(
            `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${REACT_APP_API_KEY}&language=en-US`
        );
        setCredits(data.cast);
    };

    useEffect(() => {
        fetchCredits();
        // eslint-disable-next-line
    }, []);

    return (
        <AliceCarousel autoPlay
                       responsive={responsive}
                       infinite
                       disableDotsControls
                       disableButtonsControls
                       mouseTracking items={items} />
    );
}

export default Carousel;