import React, { useState } from 'react';
import "./topbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import Account from '../AccountUser/Account';
import userAccount from "../../data/accountUser.json";


export default function Topbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const deneme = (e) => {
        console.log(e.target.value);
    }
    return (
        <div className='topbar'>
            <div className='d-flex'>
                <div className="d-flex centerContent" style={{ alignItems: "center" }}>
                    <div className="buttonsBack">
                        <FontAwesomeIcon icon={faChevronLeft} className="icons" />
                        <FontAwesomeIcon icon={faChevronRight} className="icons" />
                    </div>
                    <div className="searchAlbums">
                        <InputGroup className="mb-3">
                            <Form.Control placeholder='Search for track, artist or album...' className='inputText' defaultValue={deneme}/>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="buttonsSettings">
                <div className="d-flex">
                    <FontAwesomeIcon icon={faBell} className="icons icoRight" />
                    <span className="icoBag"></span>
                    <FontAwesomeIcon icon={faGear} className="icons icoRight" onClick={handleShow} />
                </div>
            </div>
            <>
                <Modal show={show} onHide={handleClose} centered size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>Profil Ayarları</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "#F6F5FB" }}>
                        <Account />
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