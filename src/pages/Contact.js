import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { BiHomeCircle } from 'react-icons/bi';
import { BsPhone, BsInfoCircle } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
    <Meta title={"İletişim"}/>
    <BreadCrumb title="İletişim"></BreadCrumb>
    <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <iframe
            title='harita-konum' 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.7506325718796!2d26.4031047!3d40.1478381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a9912468ee99%3A0x48a0ada629fa699b!2sDada%20Kidstore!5e0!3m2!1str!2str!4v1676590429989!5m2!1str!2str" 
            width="600" 
            height="450" 
            className='border-0 w-100' 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="col-12.mt-5">
            <div className='contact-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className="contact-title mb-4">Mesaj Gönder</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder='Ad - Soyad'/>
                  </div>
                  <div>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder='E-mail adresi'/>
                  </div>
                  <div>
                    <input 
                    type="tel" 
                    className="form-control" 
                    placeholder='Telefon Numarası'/>
                  </div>
                  <div>
                    <textarea
                    className='w-100 form-control'
                    placeholder='Mesajınızı buraya yazınız...' 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="4">
                    </textarea>
                  </div>
                  <div>
                    <button className='button'>Gönder</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Bize Ulaşın</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BiHomeCircle className='fs-5'/>
                      <address className='mb-0'>Kemalpaşa Mah. Tarla Sk. No:54 <br/> 17100 Merkez/Çanakkale</address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsPhone className='fs-5'/>
                      <a href="tel:+905067314263">+90 (506) 731 42 63</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5'/>
                      <a href="mailto:info@dada.com">info@dada.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsInfoCircle className='fs-5'/>
                      <p className='mb-0'>Pazartesi - Cumartesi: 09:00-20:00 <br/> Pazar: Kapalı</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Contact