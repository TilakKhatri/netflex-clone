import React from 'react'

function Movie({ item }) {
    return (

        < div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block  cursor-pointer relative mx-1 ' >
            <img className='w-full h-auto block rounded-lg' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white rounded-lg'>
                {
                    item?.title ? <>
                        <p className='white-space-normal text-xs md:text-sm font-bold text-center flex justify-center items-center h-full'>{item?.title}</p></> : <>
                        <p className='white-space-normal text-xs md:text-sm flex justify-center items-center h-full break-all'>{item?.name}</p>
                    </>
                }

            </div>
        </div >

    )
}

export default Movie;