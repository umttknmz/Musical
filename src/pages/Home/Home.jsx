import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
import NewAlbums from '../../components/newAlbums/NewAlbums';
import NewAlbumsF from '../../components/newAlbums/NewAlbumsF';
import Albums from "../../components/Albums/Albums";

export default function Home() {

    return (
        <div className='home'>
            <div><NewAlbums /></div>
            <div className="mt-4"><NewAlbumsF /></div>
            <div className="mt-4"><Albums /></div>

        </div>
    )
}

