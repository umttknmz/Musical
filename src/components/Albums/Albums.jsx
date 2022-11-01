import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./albums.css";
import newAlbums from "../../data/albums.json";
import { Link } from "react-router-dom";

export default function albums() {
    return (
        <div className='albums'>
            <h4 className="albumsListTitle">Albüm Listeleri (Size Özel)</h4>
            <div className="aBox">
                {
                    newAlbums.map((albumsNew, i) => {
                        return (
                            <Link to={"/category/" + albumsNew.albumName}>
                                <div className="AlbumsBox" key={i}>
                                    <div className="d-grid">
                                        <div className="mx-0">
                                            <img src={albumsNew.albumImage} alt="Resim" className='albumsImage mx-0' />
                                        </div>
                                        <div>
                                            <p className="mx-0 titleA">{albumsNew.albumName}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}
