import React from 'react'
import { Link } from 'react-router-dom';
import HeroSlide from '../Components/Carousel/HeroSlide';
import { OutlineButton } from '../Components/Button/button';
import MovieList from '../Components/movie-list/MovieList';

import { category, movieType, tvType } from '../Api/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide/> 
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">
                                View More
                            </OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
            </div>
        </>
    )
}

export default Home;