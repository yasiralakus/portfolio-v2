import { useState } from "react";
import InfinityLoop from "./Pages/InfinityLoop";

export default function App() {

    const [imageName, setImageName] = useState(null);
    const [category, setCategory] = useState(1);
    const [openMobileMenu, setOpenMobileMenu] = useState(false); 


    return (
        <div className="full-page">

            {
                imageName !== null &&

                <div className="big-image-container">

                    <button onClick={() => (setImageName(null))}><i className="fa-solid fa-xmark"></i></button>

                    <img src={`./img/image0${imageName}.jpg`} alt="" />

                </div>
            }

            <header className="header">

                <div className="container">

                    <a>
                        <img src="./img/logo.png" alt="" />
                    </a>

                    <ul className="nav">
                        <li><a href="#about">Hakkımda</a></li>
                        <li><a href="#services">Hizmetler</a></li>
                        <li><a href="#experience">Deneyim</a></li>
                        <li><a href="#works">Projeler</a></li>
                        <li><a href="#pricing">Fiyatlandırma</a></li>
                        <li><a href="#contact">İletişim</a></li>
                    </ul>

                    <div className="mobile-nav">
                        <button onClick={() => (openMobileMenu ? setOpenMobileMenu(false): setOpenMobileMenu(true))}>
                            <span style={openMobileMenu === true ? {transform: 'rotate(45deg) translateX(7px) translateY(5px)', backgroundColor: '#000'} : {}}></span>
                            <span style={openMobileMenu === true ? {opacity: '0'} : {}}></span>
                            <span style={openMobileMenu === true ? {transform: 'rotate(135deg) translateX(-10px) translateY(9px)', backgroundColor: '#000'} : {}}></span>
                        </button>

                        <ul style={openMobileMenu ? {right: '0'} : {}} className="mobile-nav-list">
                            <li><a href="#about">Hakkımda</a></li>
                            <li><a href="#services">Hizmetler</a></li>
                            <li><a href="#experience">Deneyim</a></li>
                            <li><a href="#works">Projeler</a></li>
                            <li><a href="#pricing">Fiyatlandırma</a></li>
                            <li><a href="#contact">İletişim</a></li>
                        </ul>
                    </div>

                </div>

            </header>

            <div className="hero">

                <div className="container">

                    <h1>BEN <span>KANE</span> WALKER</h1>

                    <div>
                        <p>UI Designer</p>
                        <div className="circle"></div>
                        <p>Webflow Developer</p>
                        <div className="circle"></div>
                        <p>Marketer</p>
                    </div>

                </div>

            </div>

            <div id="about" className="me">

                <div className="container">

                    <div className="me-left">

                        <img src="./img/me.jpg" alt="" />

                        <h3>Kane Walker</h3>

                        <p>Çalışmaya Uygun <div style={{backgroundColor: '#00FF00'}} className="circle"></div></p>

                        <div>
                            <a><i className="fa-brands fa-facebook"></i></a>
                            <a><i className="fa-brands fa-x-twitter"></i></a>
                            <a><i className="fa-brands fa-linkedin-in"></i></a>
                            <a><i className="fa-brands fa-github"></i></a>
                        </div>

                    </div>

                    <div className="me-right">

                        <h2>Merhaba, ben Kaliforniya'da yaşayan Kane Walker, Framer Geliştiricisi ve UX / UI Tasarımcısıyım.</h2>

                        <button>Download CV <i className="fa-solid fa-arrow-down"></i></button>

                        <div>
                            <p>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#77777D" class="remixicon "><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                Logo Tasarımı
                            </p>

                            <p>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#77777D" class="remixicon "><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                Sosyal Pazarlama
                            </p>

                            <p>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#77777D" class="remixicon "><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                Marka Kimliği
                            </p>

                            <p>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#77777D" class="remixicon "><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                Dijital Pazarlama
                            </p>

                            <p>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#77777D" class="remixicon "><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                Web Tasarımı
                            </p>

                            <p>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#77777D" class="remixicon "><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                                Ürün Tasarımı
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div id="services" className="services">

                <div className="container">

                    <h3>HİZMETLER</h3>

                    <h1>Kaliteli Hizmetler</h1>

                    <div>
                        <div className="services-item">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="#77777D" class="remixicon "><path d="M2.04932 12.9999H7.52725C7.70624 16.2688 8.7574 19.3053 10.452 21.8809C5.98761 21.1871 2.5001 17.5402 2.04932 12.9999ZM2.04932 10.9999C2.5001 6.45968 5.98761 2.81276 10.452 2.11902C8.7574 4.69456 7.70624 7.73111 7.52725 10.9999H2.04932ZM21.9506 10.9999H16.4726C16.2936 7.73111 15.2425 4.69456 13.5479 2.11902C18.0123 2.81276 21.4998 6.45968 21.9506 10.9999ZM21.9506 12.9999C21.4998 17.5402 18.0123 21.1871 13.5479 21.8809C15.2425 19.3053 16.2936 16.2688 16.4726 12.9999H21.9506ZM9.53068 12.9999H14.4692C14.2976 15.7828 13.4146 18.3732 11.9999 20.5915C10.5852 18.3732 9.70229 15.7828 9.53068 12.9999ZM9.53068 10.9999C9.70229 8.21709 10.5852 5.62672 11.9999 3.40841C13.4146 5.62672 14.2976 8.21709 14.4692 10.9999H9.53068Z"></path></svg>

                            <h3>Marka Kimliği Tasarımı</h3>

                            <p>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
                        </div>

                        <div className="services-item">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="#77777D" class="remixicon "><path d="M6.93912 14.0328C6.7072 14.6563 6.51032 15.2331 6.33421 15.8155C7.29345 15.1189 8.43544 14.6767 9.75193 14.5121C12.2652 14.198 14.4976 12.5385 15.6279 10.4537L14.1721 8.99888L15.5848 7.58417C15.9185 7.25004 16.2521 6.91614 16.5858 6.58248C17.0151 6.15312 17.5 5.35849 18.0129 4.2149C12.4197 5.08182 8.99484 8.50647 6.93912 14.0328ZM17 8.99739L18 9.99669C17 12.9967 14 15.9967 10 16.4967C7.33146 16.8303 5.66421 18.6636 4.99824 21.9967H3C4 15.9967 6 1.99669 21 1.99669C20.0009 4.99402 19.0018 6.99313 18.0027 7.99402C17.6662 8.33049 17.3331 8.66382 17 8.99739Z"></path></svg>

                            <h3>Web site Tasarımı</h3>

                            <p>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
                        </div>

                        <div className="services-item">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="#77777D" class="remixicon "><path d="M4.00021 18.9223L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L4.00021 12.3671V18.9223ZM8.85987 21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V13.9221L8.85987 21ZM6.02202 5.96771L15.2939 2.22164C15.8059 2.01475 16.3888 2.26215 16.5956 2.77422L22.2147 16.682C22.4216 17.194 22.1742 17.7769 21.6622 17.9838L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1773L5.46944 7.2695C5.26255 6.75743 5.50995 6.1746 6.02202 5.96771ZM9.00021 9.00004C9.55249 9.00004 10.0002 8.55233 10.0002 8.00004C10.0002 7.44776 9.55249 7.00004 9.00021 7.00004C8.44792 7.00004 8.00021 7.44776 8.00021 8.00004C8.00021 8.55233 8.44792 9.00004 9.00021 9.00004Z"></path></svg>

                            <h3>Uygulama Tasarımı</h3>

                            <p>Kane gives you the blocks & kits you need to create a true website within minutes.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div id="experience" className="experience">

                <div className="container">

                    <h3>DENEYİM</h3>

                    <h1>Profesyonel Özgeçmiş</h1>

                    <div>
                        <div>
                            <div className="experience-item">
                                <h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                </h3>
                                <div>
                                    <h6>2021 - Günümüz</h6>
                                    <h1>Tema Tasarımcısı</h1>
                                    <p>Web Tasarımcısı</p>
                                </div>
                            </div>

                            <div className="experience-item">
                                <h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                </h3>
                                <div>
                                    <h6>2021 - 2023</h6>
                                    <h1>Envato Tema Geliştirici</h1>
                                    <p>Web Geliştirici</p>
                                </div>
                            </div>

                            <div className="experience-item">
                                <h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                </h3>
                                <div>
                                    <h6>2021 - 2022</h6>
                                    <h1>Pazarlama Uzmanı</h1>
                                    <p>Web Geliştirici ve İş Ortağı</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className="experience-item">
                                <h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                </h3>
                                <div>
                                    <h6>2021 - 2024</h6>
                                    <h1>Lisans Bilgi Teknolojileri Derecesi</h1>
                                    <p>Bangladesh Devlet Üniversitesi</p>
                                </div>
                            </div>

                            <div className="experience-item">
                                <h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                </h3>
                                <div>
                                    <h6>2021 - 2024</h6>
                                    <h1>Yüksek Orta Öğretim</h1>
                                    <p>Premium College United VC</p>
                                </div>
                            </div>

                            <div className="experience-item">
                                <h3>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" class="remixicon "><path d="M3 18.5V5C3 3.34315 4.34315 2 6 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22H6.5C4.567 22 3 20.433 3 18.5ZM19 20V17H6.5C5.67157 17 5 17.6716 5 18.5C5 19.3284 5.67157 20 6.5 20H19ZM5 15.3368C5.45463 15.1208 5.9632 15 6.5 15H19V4H6C5.44772 4 5 4.44772 5 5V15.3368Z"></path></svg>
                                </h3>
                                <div>
                                    <h6>2021 - 2024</h6>
                                    <h1>Webster Koleji</h1>
                                    <p>Kullanıcı Arayüzü/UX Tasarımı</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            <div id="works" className="works">

                <div className="container">

                    <h3>İŞLER</h3>

                    <h1>Portföy</h1>

                    <div className="works-container">

                        <header>
                            <button onClick={() => (setCategory(1))} style={category === 1 ? {color: '#000', fontWeight: '600', textDecoration: 'underline'}: {}}>Tüm</button>
                            <button onClick={() => (setCategory(2))} style={category === 2 ? {color: '#000', fontWeight: '600', textDecoration: 'underline'}: {}}>Tasarım</button>
                            <button onClick={() => (setCategory(3))} style={category === 3 ? {color: '#000', fontWeight: '600', textDecoration: 'underline'}: {}}>Oyun</button>
                            <button onClick={() => (setCategory(4))} style={category === 4 ? {color: '#000', fontWeight: '600', textDecoration: 'underline'}: {}}>Markalaşma</button>
                            <button onClick={() => (setCategory(5))} style={category === 5 ? {color: '#000', fontWeight: '600', textDecoration: 'underline'}: {}}>Pazarlama</button>
                        </header>

                        <main>

                            {
                                category === 1 &&
                            <>
                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image01.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(1))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Tasarım</h6>
                                        <h3>Mobil Uygulama Tasarımı</h3>
                                    </div>
                                </div>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image02.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(2))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Oyun</h6>
                                        <h3>Web Sitesi Makyaj Tasarımı</h3>
                                    </div>
                                </div>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image03.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(3))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Markalaşma</h6>
                                        <h3>Marka Kimliği ve Hareket Tasarımı</h3>
                                    </div>
                                </div>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image04.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(4))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Pazarlama</h6>
                                        <h3>Mobil Uygulama Tasarımı</h3>
                                    </div>
                                </div>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image05.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(5))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Tasarım</h6>
                                        <h3>Marka Kimliği ve Hareket Tasarımı</h3>
                                    </div>
                                </div>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image06.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(6))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Pazarlama</h6>
                                        <h3>Marka Kimliği ve Hareket Tasarımı</h3>
                                    </div>
                                </div>
                            </>
                            }

                            {
                                category === 2 &&
                            <>
                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image01.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(1))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Tasarım</h6>
                                        <h3>Mobil Uygulama Tasarımı</h3>
                                    </div>
                                </div>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image05.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(5))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Tasarım</h6>
                                        <h3>Marka Kimliği ve Hareket Tasarımı</h3>
                                    </div>
                                </div>

                            </>
                            }

                            {
                                category === 3 &&
                            <>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image02.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(2))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Oyun</h6>
                                        <h3>Web Sitesi Makyaj Tasarımı</h3>
                                    </div>
                                </div>

                            </>
                            }

                            {
                                category === 4 &&
                            <>
                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image03.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(3))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Markalaşma</h6>
                                        <h3>Marka Kimliği ve Hareket Tasarımı</h3>
                                    </div>
                                </div>
                            </>
                            }

                            {
                                category === 5 &&
                            <>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image04.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(4))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Pazarlama</h6>
                                        <h3>Mobil Uygulama Tasarımı</h3>
                                    </div>
                                </div>

                                <div className="works-item fade-in">
                                    <div className="works-item-img">
                                        <img src="./img/image06.jpg" alt="" />
                                        <div className="opacity">
                                            <button onClick={() => (setImageName(6))}><i className="fa-solid fa-arrow-pointer"></i></button>
                                        </div>
                                    </div>

                                    <div className="works-item-text">
                                        <h6>Pazarlama</h6>
                                        <h3>Marka Kimliği ve Hareket Tasarımı</h3>
                                    </div>
                                </div>
                            </>
                            }
                        </main>

                    </div>

                </div>

            </div>

            <div className="testinomials">

                <div className="container">

                    <h3>GÖRÜŞLER</h3>

                    <h1>Müşteriler ne diyor!</h1>

                    <div>

                        <InfinityLoop />
                        
                    </div>

                </div>

            </div>

            <div id="pricing" className="pricing">
                <div className="container">
                    <h3>FİYATLANDIRMA</h3>
                    <h1>Esnek Fiyatlandırma Planı</h1>
                    <div>
                        <div className="pricing-item">

                            <header>
                                <h3>Temel</h3>
                                <p>Lorem ipsum dolor sit amet elit. Lorem consectetur, adipisicing </p>
                                <h2>$15<span>/Saat</span></h2>
                            </header>

                            <main>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit amet.
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem, ipsum dolor.
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p style={{opacity: '0.5'}}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p style={{opacity: '0.2'}}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <button>Şimdi Satın Al <i className="fa-solid fa-cart-shopping"></i></button>

                            </main>

                            

                        </div>

                        <div className="pricing-item">

                            <header>
                                <h3>Standart</h3>
                                <p>Lorem ipsum dolor sit amet elit. Lorem consectetur, adipisicing </p>
                                <h2>$30<span>/Saat</span></h2>
                            </header>

                            <main>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit amet.
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem, ipsum dolor.
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p style={{opacity: '0.5'}}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p style={{opacity: '0.2'}}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <button>Şimdi Satın Al <i className="fa-solid fa-cart-shopping"></i></button>
                                

                            </main>

                            

                        </div>

                        <div className="pricing-item">

                            <header>
                                <h3>Premium</h3>
                                <p>Lorem ipsum dolor sit amet elit. Lorem consectetur, adipisicing </p>
                                <h2>$45<span>/Saat</span></h2>
                            </header>

                            <main>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit amet.
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem, ipsum dolor.
                                </p>

                                <p>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p style={{opacity: '0.5'}}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <p style={{opacity: '0.2'}}>
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#77777D" class="remixicon "><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
                                    Lorem ipsum dolor sit..
                                </p>

                                <button>Şimdi Satın Al <i className="fa-solid fa-cart-shopping"></i></button>

                            </main>

                            

                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="contact">

                <div className="container">

                    <h3>İLETİŞİM</h3>

                    <h1>Benimle iletişime geçin!</h1>

                    <div>

                        <div>

                            <div>
                                <h6><i className="fa-solid fa-location-dot"></i></h6>
                                <h6>Ofisim:</h6>
                                <p>Jurain, Dakka Bangladeş</p>
                            </div>

                            <div>
                                <h6><i className="fa-solid fa-phone"></i></h6>
                                <h6>Telefon Numarası:</h6>
                                <p>+1234321321</p>
                            </div>

                            <div>
                                <h6><i className="fa-regular fa-envelope"></i></h6>
                                <h6>E-posta adresi:</h6>
                                <p>example@gmail.com</p>
                            </div>

                        </div>

                        <form>

                            <div className="col-2">

                                <div className="input-box">
                                    <h3>Ad Soyad</h3>
                                    <input type="text" placeholder="James Milner" />
                                </div>

                                <div className="input-box">
                                    <h3>E-posta Adresi</h3>
                                    <input type="text" placeholder="example@gmail.com" />
                                </div>

                            </div>

                            <div className="input-box">
                                <textarea rows={4} placeholder="Mesajınızı yazın"></textarea>
                            </div>

                            <button>Gönder <i className="fa-regular fa-envelope"></i></button>

                        </form>

                    </div>

                </div>
                
            </div>

            <footer className="footer">
                <div className="container">
                    <p>Telif Hakkı @2024, <a href={'https://www.yasiralakus.com.tr'}>YasirAlakus</a> Tüm Hakları Saklıdır.</p>
                </div>
            </footer>

        </div>
    )
}