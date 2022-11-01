import React from 'react';
import "./category.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import albums from "../../assets/img/albums.gif";
import pp from "../../assets/img/pPhoto.jpg";
import Table from 'react-bootstrap/Table';
import data from "../../data/newAlbums.json";
import categoryData from "../../data/albums.json";

export default function Category() {    
    return (
        <div className='category'>
            <div className='d-grid'>
                <div className="d-flex">
                    <div className="imageContent">
                        <div className="imageGif">
                            <img src={albums} alt="" className='imgAlbumCategory' />
                        </div>
                    </div>
                    <div className="categoryContent">
                        <div className="subCategory">
                            <div className="playlistNameCategory">
                                <h2>Türkçe Karışık Liste</h2>
                                <div className='d-flex cBox'>
                                    <img src={pp} alt="" className='accountImageCategory mx-2' />
                                    <span className="accountNameCategory mx-2">Ümit Tükenmez</span>
                                    <span className="categorySubList mx-1">15 Şarkı</span>
                                    <span className="categorySubSure mx-2">2 saat</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="musicContent">
                    <Table responsive striped>
                        <thead>
                            <tr className='centerC'>
                                <th>#</th>
                                <th>Albüm Kapağı</th>
                                <th>Albüm İsmi</th>
                                <th>Artist İsmi</th>
                                <th>Süre</th>
                                <th>Oynat&Duraklat</th>
                                <th>Other</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((categoryAlbum, i) => {
                                    return (
                                        <tr className='trFocus' key={i}>
                                            <td className='centerC'>
                                                <div className='aId'>{categoryAlbum.id}</div>
                                            </td>
                                            <td className='centerC'>
                                                <div className="aCImage"><img src={categoryAlbum.imageAlbums} alt="" className="aImage" /></div>
                                            </td>
                                            <td className='centerC'>
                                                <div className="aName">{categoryAlbum.albumsName}</div>
                                            </td>
                                            <td className='centerC'>
                                                <div className="aAName">{categoryAlbum.artistName}</div>
                                            </td>
                                            <td className='centerC'>
                                                <div className="time">{categoryAlbum.time}</div>
                                            </td>
                                            <td className='centerC'>
                                                <div className="btnCategoryPlay"><FontAwesomeIcon icon={faPlay} className="categoryAlbumPlay" /></div>
                                            </td>
                                            <td className='centerC'>
                                                <div className="otherC"><FontAwesomeIcon icon={faEllipsisVertical} /></div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    {/* <div className='d-grid'>
                        <div className="boxCate mx-2 mt-2 mb-2">
                            <div className="bCateAlbum">
                                <div className='aId'>1</div>
                                <div className="albumsCBlock"><img src={pp} alt="" className="aImage" /></div>
                                <div className='albumsCBlock aName'>yap bi güzellik</div>
                                <div className="albumsCBlock aAName">Tarkan</div>
                                <div className="albumsCBlock time">3:15</div>
                                <div className="albumsCBlock btnCategoryPlay"><FontAwesomeIcon icon={faPlay} className="categoryAlbumPlay" /></div>
                                <div className="otherC">...</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
