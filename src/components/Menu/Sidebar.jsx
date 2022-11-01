import { React, useState } from 'react';
import "./sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse, faGlobe, faTowerCell, faUser, faMusic,
    faRotateLeft, faHeart, faDownload, faCirclePlus, faPlus, faHeadphonesSimple
} from '@fortawesome/free-solid-svg-icons';
import NewList from '../newList/NewList';
import PlayerList from "../../data/newPlayerList.json";
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const AddList = (e) => {
        
    }
    return (
        <div className='sidebar'>
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sdBar">
                <a href="/">
                    <span className="icoNav"><FontAwesomeIcon icon={faHeadphonesSimple} /> Müzikal</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <Link to="/">
                        <li className="nav-item mt-3">
                            <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faHouse} className="iconSet" /> Ana Sayfa</span>
                        </li>
                    </Link>
                    <li>
                        <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faGlobe} className="iconSet" /> Ara</span>
                    </li>
                    <Link to="/radio">
                        <li>
                            <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faTowerCell} className="iconSet" /> Radio</span>
                        </li>
                    </Link>
                    <li>
                        <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faUser} className="iconSet" /> Sanatçılar</span>
                    </li>
                    <li>
                        <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faMusic} className="iconSet" /> Albümler</span>
                    </li>

                    <span className="fs-6 mt-4">Müziklerim</span>
                    <li className="nav-item mt-2">
                        <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faRotateLeft} className="iconSet" /> En son oynatılanlar</span>
                    </li>
                    <li>
                        <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faHeart} className="iconSet" /> Favoriler</span>
                    </li>
                    <li>
                        <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faDownload} className="iconSet" /> İndirilenler</span>
                    </li>

                    <span className="fs-6 mt-4 mb-2">Müzik Listesi</span>
                    {
                        PlayerList.map((playerList, i) => {
                            return (
                                <Link to={"/category/" + playerList.playerName}>
                                    <li key={i}>
                                        <span className='nav-link btnSidebar'>{playerList.playerName}</span>
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
                <hr />
                <ul className="nav nav-pills flex-column">
                    <li className="nav-item" onClick={handleShow}>
                        <span className='nav-link btnSidebar'><FontAwesomeIcon icon={faCirclePlus} className="iconSet" onClick={handleShow} /> Yeni müzik listesi ekle</span>
                    </li>
                </ul>
            </div>
            <>
                <Modal show={show} onHide={handleClose} centered size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Yeni Müzik Listesi Ekle</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "#F6F5FB" }}>
                        <NewList />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Çıkış
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}
