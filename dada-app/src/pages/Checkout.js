import React from 'react'
import Meta from '../components/Meta';
import { BiArrowBack } from 'react-icons/bi';
import product1 from '../components/images/product-01.jpg';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
    <Meta title={"Ödeme"}/>
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data">
                        <h3 className="website-name">Dada Kid Store</h3>
                        <nav style={{"--bs-breadcrumb-divider":">"}} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item total-price"><Link to="/cart" className='text-dark'>Sepetim</Link></li> &nbsp; &gt;
                                <li className="breadcrumb-item total-price active" aria-current="page">Kişisel Bilgiler</li>&nbsp; &gt;
                                <li className="breadcrumb-item total-price"><Link to="/#" className='text-dark'>Kargo Yöntemi</Link></li>&nbsp; &gt;
                                <li className="breadcrumb-item total-price"><Link to="/#" className='text-dark'>Ödeme</Link></li>
                            </ol>
                        </nav>
                        <h4 className="title total">İletişim Bilgileri</h4>
                        <p className="user-details total">Ad Soyad (email@email.com)</p>
                        <h4 className='mb-3'>Kargo Adresi</h4>
                        <form action="" className='d-flex gap-15 flex-wrap justify-content-between'>
                            <div className='w-100'>
                                <select 
                                    name="" 
                                    className='form-control form-select' 
                                    id=""
                                >
                                    <option value="" selected disabled>Ülke Seçiniz</option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" placeholder='Adınız...' className="form-control"/>
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" placeholder='Soyadınız...' className="form-control"/>
                            </div>
                            <div className='w-100'>
                                <input type="text" placeholder='Mahalle, Cadde/Sokak, Kapı No...' className="form-control"/>
                            </div>
                            <div className='w-100'>
                                <input type="text" placeholder='Apartman, Blok, Daire...' className="form-control"/>
                            </div>
                            <div className='flex-grow-1'>
                                <input type="text" placeholder='Şehir' className="form-control"/>
                            </div>
                            <div className='flex-grow-1'>
                                <select 
                                    name="" 
                                    className='form-control form-select' 
                                    id=""
                                >
                                    <option value="" selected disabled>
                                        İlçe
                                    </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                            <input type="text" placeholder='Posta Kodu' className="form-control"/>
                            </div>
                            <div className='w-100'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <Link to='/cart' className='text-dark'> <BiArrowBack className='me-2'/> Sepete Geri Dön</Link>
                                    <Link to='/cart' className='button'>
                                        Kargo Yöntemi Belirle
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-5">
                    <div className='border-bottom border-dark py-4'>
                        <div className="d-flex gap-10 mb-2 align-items-center">
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative' >
                                    <span 
                                        style={{'top': "-10 px", "right": "2px"}}
                                        className='badge bg-secondary text-white round-circle p-2 position-absolute'>
                                        1
                                    </span>
                                    <img className='img-fluid' src={product1} alt="ürün foto"/>
                                </div>
                                <div>
                                    <h5 className="total-price">Çiçek Desenli Elbise</h5>
                                    <p className='total-price'>Renk: Kahverengi / Krem <br/> Beden: 3-4 Yaş</p>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>500 TL</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom border-dark py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='total'>Toplam</p>
                            <p className='total-price'>1000 TL</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0 total'>Kargo Ücreti</p>
                            <p className='mb-0 total-price' >0 TL</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom border-dark py-4'>
                        <h4 className='total'>Genel Toplam</h4>
                        <h5 className='total-price'>1000 TL</h5>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Checkout