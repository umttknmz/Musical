import React from 'react';
import "./boxGenerator.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Radio from "../../data/radio.json";

function BoxGenerator() {
    return (
        <div className='box mx-2'>
            <h3 className='titleRadio mb-3 mt-2'>Radio Listesi</h3>
            {
                Radio.map((radio, i) => {
                    return (
                        <div className='boxGenerator mb-3' key={i}>
                            <div className="d-flex boxG">
                                <div className='block'>{radio.id}</div>
                                <div className='block'><img src={radio.logo} alt="" className='imageR' /></div>
                                <div className='block'>{radio.radioName}</div>
                                <div className='block blockRadio'>{radio.radioConnet}</div>
                                <div className='block'>{radio.radioTime}</div>
                                <div className='block btnPlay'><FontAwesomeIcon icon={faPlay} className="albumPlay" /></div>
                                <div className='blockFav'><FontAwesomeIcon icon={faHeart} className="radioFav" /></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BoxGenerator