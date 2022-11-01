import React from 'react';
import "./account.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import userAccount from "../../data/accountUser.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faHeart, faMusic, faEye } from '@fortawesome/free-solid-svg-icons';


function showHideClick() {
    const input = document.getElementById("passwordAccount");
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

export default function Account() {
    return (
        <div className='account'>

            {
                userAccount.map((account, i) => {
                    return (
                        <div className="d-flex" key={i}>
                            <div className="leftProfile">
                                <div className="d-grid">
                                    <div className="lisanceAccount">
                                        <span>{account.licance}</span>
                                    </div>
                                    <div className="pPhotoAccount">
                                        <img src={account.profilePhoto} alt="pPhoto" />
                                    </div>
                                    <div className="accountTitle">
                                        <p className="accountName">{account.name + " " + account.surname}</p>
                                        <p className="accountCountry">{account.country}</p>
                                        <p className="accountProvince">{account.province}</p>
                                    </div>
                                    <div className="statusContent">
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="contentUserImage "><FontAwesomeIcon icon={faUserGroup} className="f" /></div>
                                            <div className="contentUserStatus mx-3">Friends</div>
                                            {/* <div className="contentUserNumber">100</div> */}
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="contentUserImage "><FontAwesomeIcon icon={faHeart} className="h" /></div>
                                            <div className="contentUserStatus mx-3">Likes</div>
                                            {/* <div className="contentUserNumber">15</div> */}
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="contentUserImage "><FontAwesomeIcon icon={faMusic} className="m" /></div>
                                            <div className="contentUserStatus mx-3">Playlist</div>
                                            {/* <div className="contentUserNumber ">3</div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="rightProfile">
                                <div className="d-flex mt-4">
                                    <div className="leftContentProfile">
                                        <label htmlFor="controlText" className="form-label">İsim:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.name} />

                                        <label htmlFor="controlText" className="form-label">Şifre:</label>
                                        <div className="input-group mb-2">
                                            <input type="password" className="form-control" disabled value={account.password} id="passwordAccount" />
                                            <button className="btn btn-success" type="button" id="button-addon2" onClick={showHideClick}><FontAwesomeIcon icon={faEye} /></button>
                                        </div>

                                        <label htmlFor="controlText" className="form-label">Ülke:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.country} />

                                        <label htmlFor="controlText" className="form-label">İlçe:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.town} />

                                        <label htmlFor="controlText" className="form-label">Telefon:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.phone} />

                                        <button type="button" className="btn btn-primary" >Profil Ayarlarını Aç</button>

                                    </div>
                                    <div className="rightContentProfile">
                                        <label htmlFor="controlText" className="form-label">Soyisim:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.surname} />

                                        <label htmlFor="controlText" className="form-label">E-Mail:</label>
                                        <input type="e-mail" className="form-control mb-2" id="controlText" disabled value={account.mail} />

                                        <label htmlFor="controlText" className="form-label">İl:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.province} />

                                        <label htmlFor="controlText" className="form-label">Meslek:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.job} />

                                        <label htmlFor="controlText" className="form-label">Kullanıcı Adı:</label>
                                        <input type="text" className="form-control mb-2" id="controlText" disabled value={account.username} />

                                        <button type="button" className="btn btn-primary float-end" disabled>Kaydet</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}
