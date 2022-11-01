import React from 'react';
import "./newAlbums.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import newAlbums from "../../data/newAlbums.json"

export default function NewAlbums() {
    return (
        <div className='newAlbums'>
            <h3 className="titleAlbums my-3 ms-2">Yeni Türkçe Albümler</h3>
            <OwlCarousel className='owl-theme' loop nav items={5} autoplay={true}>
                {
                    newAlbums.map((nAlbums, i) => {
                        return (
                            <div className='item' key={i}>
                                <div className="albumBox">
                                    <img src={nAlbums.imageAlbums} alt="" className='imageAlbum' />
                                    <div className="albumContent">
                                        <div className="d-grid">
                                            <span className="btnPlay"><FontAwesomeIcon icon={faPlay} className="albumPlay" /></span>
                                            <div className="centerAlbum">
                                                <p className="albumNameH">{nAlbums.albumsName}</p>
                                                <p className="artistNameH">{nAlbums.artistName}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </OwlCarousel>
        </div>
    )
}
