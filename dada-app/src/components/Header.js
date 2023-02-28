import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsHeart, BsCart2, BsMenuDown }  from "react-icons/bs";
import { BiUser }  from "react-icons/bi";
import dadamaskot from './images/logo/dadakidstore-maskot-01-new.png';
import dadalogo from './images/logo/dada-logo-w200-transparent.png';
import dadasloganeng from './images/logo/dada-slogan-eng-1.png';
import dadaslogantr from './images/logo/dada-slogan-trk-1.png';

const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className='row d-flex align-items-center'>
          <div className='col-4'>
            <p className='mb-0'>600 TL ve Üzeri Ücretsiz Kargo</p>
          </div>
          <div className='col-4'>
            <p className='mb-0 d-flex flex-column justify-content-center align-items-center'>
              <img src={dadasloganeng} alt="slogan"/>
              <img src={dadaslogantr} alt="slogan"/>
            </p>
          </div>
          <div className='col-4'>
            <p className='text-end mb-0'>
              Sipariş Hattı: <a href='tel:+90 5067314263'>+90 (506) 731 42 63</a>
            </p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-4 d-flex justify-content-start'>
            <h2>
              <Link className='d-flex flex-column justify-content-center align-items-center' to="/">
              <p className='mb-0'> <img src={dadamaskot} alt="dada maskot"/> </p>
                <img src={dadalogo} alt="dada logo"/>
              </Link>
            </h2>
          </div>
          <div className='col-4'>
            <div className="input-group">
                <input type="text" 
                className="form-control" 
                placeholder="Ara..." 
                aria-label="Ara..." 
                aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" 
                id="basic-addon2"><BsSearch className='fs-6'/></span>
            </div>
          </div>
          <div className='col-4'>
            <div className='header-upper-links d-flex align-items-center justify-content-end gap-15'>
              <div>
                <Link to='/wishlist' className='d-flex align-items-center gap-10'>
                  <BsHeart className='header-upper-icons'/>
                  <p className='mb-0 header-upper-text'>
                    Favoriler
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/login' className='d-flex align-items-center gap-10'>
                  <BiUser className='header-upper-icons'/>
                  <p className='mb-0 header-upper-text'>
                  Hesabım
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/cart' className='d-flex align-items-center gap-10'>
                  <BsCart2 className='header-upper-icons'/>
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-danger text-white'>0</span>
                    <p className='mb-0 header-upper-text'>0.00 TL</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
                <div className="dropdown">
                <button 
                className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                 <BsMenuDown className='header-bottom-icon'/> 
                 <span className='me-5 d-inline-block'>ÜRÜN KATEGORİLERİ</span>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item text-white" to="#">Erkek Giyim</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="#">Kız Giyim</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to="#">Aksesuar</Link>
                  </li>
                </ul>
                </div>
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink to="/">ANA SAYFA</NavLink>
                  <NavLink to="/store">MAĞAZA</NavLink>
                  <NavLink to="/blogs">BLOG</NavLink>
                  <NavLink to="/contact">İLETİŞİM</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header