import React from 'react'

import { useParams } from 'react-router'

import PageHeader from '../Components/page-header/PageHeader';

import { category as cate} from '../Api/tmdbApi';
import MovieGrid from '../Components/movie-grid/MovieGrid';

const Catalog = () => {

    const {category}=useParams();

    console.log(category)

    return (
        <>
            <PageHeader>
                {category===cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category}/>
                </div>
            </div>
        </>
    )
}

export default Catalog;