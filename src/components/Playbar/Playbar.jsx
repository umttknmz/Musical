import React from 'react';
import "./playbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft, faPlay, faBackward, faForward, faShuffle } from '@fortawesome/free-solid-svg-icons';


export default function Playbar() {
    return (
        <div className='playbar'>
            <div className="d-flex pBar">
                <img src="https://i.scdn.co/image/ab67616d0000b2731069678d5c8f09e0f5272f33" alt="" className='musicProfile' />
                <div className="d-grid mx-5">
                    <h4 className="artistMusic">Kimse Bilmesin</h4>
                    <h6 className='artistName'>Bengü</h6>
                </div>
                <FontAwesomeIcon icon={faRotateLeft} className="icoMusicEditor mx-3" />
                <FontAwesomeIcon icon={faBackward} className="icoMusicEditor mx-3" />
                <span className="playPause mx-3"><FontAwesomeIcon icon={faPlay} /></span>
                <FontAwesomeIcon icon={faForward} className="icoMusicEditor mx-3" />
                <FontAwesomeIcon icon={faShuffle} className="icoMusicEditor mx-3" />
                <span id="current-time" className="ms-5 mx-2 time">0:00</span>
                <input type="range" max="100" value="0" className="mx-2 sliderTime" />
                <span id="duration" className="mx-2 time">0:00</span>
            </div>
        </div>
    )
}
