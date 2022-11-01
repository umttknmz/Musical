import React from 'react';
import "./newAlbums.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import newAlbums from "../../data/newAlbumsF.json"

export default function NewAlbumsF() {
    return (
        <div className="newAlbumsF">
            <h3 className="titleAlbums ms-3 mb-3">Yeni Yabancı Albümler</h3>
            <OwlCarousel className='owl-theme' loop nav items={31} autoplay={true}>
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
