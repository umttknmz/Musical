import React from 'react';
import "./newList.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function NewList() {
    const AddList = () => {
        console.log("deneme");
    }
    return (
        <div className='newList'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Liste Adı</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Çalma Listem..." />
                <div className='buttonAdd mt-2 float-end'>
                    <Button variant="primary" onClick={AddList}>
                        <FontAwesomeIcon icon={faPlus} /> Ekle
                    </Button>
                </div>
            </div>
        </div>

    )
}
