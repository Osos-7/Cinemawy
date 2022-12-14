import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types';

import './movie-list.scss';

// import {Swiper} from 'swiper/react'
// import { Swiper } from 'react-slider-swiper'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Link } from 'react-router-dom';

import { Button } from '../Button/button';

import tmdbApi, {category} from '../../Api/tmdbApi'
import apiConfig from '../../Api/apiConfig';

import MovieCard from '../movie-card/MovieCard';



const MovieList = props => {

    const[items, setItems]=useState([]);

    useEffect(() => {
      const getList = async () =>{
        let response = null;
        const params = {};

        if(props.type !== 'similar'){
            switch(props.category){
                case category.movie:
                    response=await tmdbApi.getMoviesList(props.type, {params});
                    break;
                    default:
                        response=await tmdbApi.getTvList(props.type, {params});
            }
        } else{
            response=await tmdbApi.similar(props.category, props.id);
        }
        setItems(response.results);
      }
      getList();
    }, [])
    
    
    return (
        <div className='movie-list'>
            {
                items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
            }
        </div>
    )
}

MovieList.propTypes={
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList









// return (
//     <div className='movie-list'>
//         <Swiper
//         grabCursor={true}
//         spaceBetween={10}
//         slidesPerView={'auto'}

//         >
//             {
//                 items.map((item, i) => (
//                     <SwiperSlide key={i}>
//                         <MovieCard item={item} category={props.category} />
//                     </SwiperSlide>
//                 ))
//             }
//         </Swiper>
        
//     </div>
// )