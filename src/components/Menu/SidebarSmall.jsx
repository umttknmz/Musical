import React from 'react';
import "./sidebar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse, faGlobe, faTowerCell, faUser, faMusic,
    faRotateLeft, faHeart, faDownload, faCirclePlus, faHeadphonesSimple
} from '@fortawesome/free-solid-svg-icons';

export default function SidebarSmall() {
    return (
        <div className='sidebarSmall'>
            <div className="d-flex flex-column flex-shrink-0 sdBarSmall">
                <a href="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <a href="/">
                        <span className="icoNav"><FontAwesomeIcon icon={faHeadphonesSimple} /></span>
                    </a>
                </a>
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="">
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faHouse} className="iconSmallSet" /></span>
                    </li>
                    <li>
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faGlobe} className="iconSmallSet" /></span>
                    </li>
                    <li>
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faTowerCell} className="iconSmallSet" /></span>
                    </li>
                    <li>
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faUser} className="iconSmallSet" /></span>
                    </li>
                    <li>
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faMusic} className="iconSmallSet" /></span>
                    </li>

                    <li>
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faRotateLeft} className="iconSmallSet" /></span>
                    </li>
                    <li>
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faHeart} className="iconSmallSet" /></span>
                    </li>
                    <li>
                        <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faDownload} className="iconSmallSet" /></span>
                    </li>
                </ul>
                <div className="dropdown border-top">
                    <ul className="nav nav-pills flex-column text-center">
                        <li className="nav-item p-1">
                            <span className='nav-link btnSmallSidebar'><FontAwesomeIcon icon={faCirclePlus} className="iconSet" /></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
 