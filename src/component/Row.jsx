import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './Movie';
function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then((res) => {
            setMovies(res.data.results);
        });
    }, [fetchUrl]);

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center'>
                <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide mb-5 overflow-auto p-4'>
                    {
                        movies && movies.map((item, id) => (
                            <Movie key={id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Row;