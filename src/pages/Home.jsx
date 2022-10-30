import React, { useEffect, useState } from 'react';
import Main from '../component/Main';
import requests from '../requests/Request';
import Row from '../component/Row';
import Loader from '../loader/Loader';
function Home() {


    return (
        <>
            <Main />
            <Row title="On Air TV shows" fetchUrl={requests.onAirTvshow} />
            <Row title="Popular TV shows" fetchUrl={requests.popularTvShow} />
            <Row title="Upcoming Movies" fetchUrl={requests.requestUpcoming} />
            <Row title="Top Rated Movies" fetchUrl={requests.requestTopRated} />
            <Row title="Popular Movies" fetchUrl={requests.requestPopular} />


        </>
    )
}

export default Home