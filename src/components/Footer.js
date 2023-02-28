import React from 'react'
import { Link } from 'react-router-dom'
import newsletter from './images/newsletter.png';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest }  from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src={newsletter} alt='bülten'></img>
                <h2 className='mb-0 text-white'>Ailemize Katılın</h2>
              </div>
            </div>
            <div className='col-7'>
            <div className="input-group">
              <input type="text" 
              className="form-control py-1" 
              placeholder="E-mail adresinizi giriniz..." 
              aria-label="E-mail adresinizi giriniz..." 
              aria-describedby="basic-addon2"/>
              <span className="input-group-text p-3" 
              id="basic-addon2">Üye Ol</span>
            </div>
            </div>
          </div>
        </div>
  
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='text-white mb-4'>Bize Ulaşın</h4>
              <div>
                <address className='text-white'>Kemalpaşa Mah. Tarla Sk.<br/> 
                No:54 17100 <br/> Merkez/Çanakkale </address>
                <a className='text-white mt-3 d-block mb-2' href='tel:+90 5067314263'>
                  +90 (506) 731 42 63
                </a>
                <a className='text-white mt-2 d-block mb-2' href='mailto:info@dada.com'>
                  info@dada.com
                </a>
                <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a className='text-white' href='https://www.instagram.com/dada_kidstore'>
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href='https://www.instagram.com/dada_kidstore'>
                    <BsTwitter className='fs-4'/>
                  </a>
                  <a className='text-white' href='https://www.instagram.com/dada_kidstore'>
                  <BsFacebook className='fs-4'/>
                  </a>
                  <a className='text-white' href='https://www.instagram.com/dada_kidstore'>
                    <BsPinterest className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Bilgilendirme</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link to='/our-story' className='text-white py-2 mb-1'>Hikayemiz</Link>
                  <Link to='/term-condition' className='text-white py-2 mb-1'>Hizmet Şartları</Link>
                  <Link to='/refund-policy' className='text-white py-2 mb-1'>Para İade Politikası</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Sözleşme ve Politikalar</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link to='/data-protection' className='text-white py-2 mb-1'>KVKK Metni</Link>
                  <Link to='/cookie-policy' className='text-white py-2 mb-1'>Çerez Politikası</Link>
                  <Link to='/privacy-policy' className='text-white py-2 mb-1'>Gizlilik Politikası</Link>
                  <Link to='/distance-sales-agreement' className='text-white py-2 mb-1'>Mesafeli Satış Sözleşmesi</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'>Yardım</h4>
              <div className='footer-links d-flex flex-column'>
                  <Link to='/order-tracking' className='text-white py-2 mb-1'>Sipariş Takip</Link>
                  <Link to='/FAQ' className='text-white py-2 mb-1'>Sık Sorulan Sorular</Link>
                  <Link to='/shipping-policy' className='text-white py-2 mb-1'>Kargo & İade Koşulları</Link>
                  <Link to='/login' className='text-white py-2 mb-1'>Üye Girişi</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()} | Powered by Furkan SOYLU
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer