import React from 'react'
import axios from 'axios';
import requests from '../requests/Request';
import { useEffect } from 'react';
import { useState } from 'react'
import Loader from '../loader/Loader';

function Main() {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];
    useEffect(() => {
        axios.get(requests.requestPopular).then((res) => {
            setMovies(res.data.results)
        })

    }, [])

    const truncatestr = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }
    return (
        <div className='w-full h-[500px] text-white mb-4'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[500px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute top-[20%] p-4'>
                    <h1 className='text-2xl md:text-4xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className="bg-white tex-sm text-gray-600 hover:text-gray-800 font-semibold py-2 px-4 border border-white rounded text-sm mr-2">
                            Play Now
                        </button>
                        <button class="bg-transparent hover:bg-white text-white font-semibold hover:text-gray-800 py-2 px-4 border border-white hover:border-transparent rounded text-sm">
                            Watch Later
                        </button>
                    </div>
                    <p className='text-gray-400 text-sm mb-3'>Released:{movie?.release_date}</p>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[33%] text-gray-300 text-sm'>{truncatestr(movie?.overview, 180)}</p>
                </div>
            </div>

        </div>

    )
}

export default Main