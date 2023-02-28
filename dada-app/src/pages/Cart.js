import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import product1 from '../components/images/product-01.jpg';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
    <Meta title={"Sepetim"}/>
    <BreadCrumb title="Sepetim"></BreadCrumb>
    <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className='cart-col-1'>Ürün</h4>
              <h4 className='cart-col-2'>Fiyat</h4>
              <h4 className='cart-col-3'>Miktar</h4>
              <h4 className='cart-col-4'>Toplam</h4>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className='cart-col-1 gap-15 d-flex align-items-center'>
                <div className='w-25'>
                  <img src={product1} className='img-fluid' alt="ürün foto"/>
                </div>
                <div className='w-75'>
                  <p>Çiçek Desenli Elbise</p>
                  <p>Renk: Kahverengi / Krem</p>
                  <p>Beden: 3-4 Yaş</p>
                </div>
              </div>
              <div className='cart-col-2'>
                <h5 className="price">500 TL</h5>
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                <input 
                className='form-control' 
                type="number"
                min={1}
                max={10} 
                name="" 
                id=""
                />
                <div>
                  <AiFillDelete className='text-danger'/>
                </div>
              </div>
              <div className='cart-col-4'>
                <h5 className="price">500 TL</h5>
              </div>
            </div>
            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
              <div className='cart-col-1 gap-15 d-flex align-items-center'>
                <div className='w-25'>
                  <img src={product1} className='img-fluid' alt="ürün foto"/>
                </div>
                <div className='w-75'>
                  <p>Çiçek Desenli Elbise</p>
                  <p>Renk: Kahverengi / Krem</p>
                  <p>Beden: 3-4 Yaş</p>
                </div>
              </div>
              <div className='cart-col-2'>
                <h5 className="price">500 TL</h5>
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                <input 
                className='form-control' 
                type="number"
                min={1}
                max={10} 
                name="" 
                id=""
                />
                <div>
                  <AiFillDelete className='text-danger'/>
                </div>
              </div>
              <div className='cart-col-4'>
                <h5 className="price">500 TL</h5>
              </div>
            </div>
            <div className='col-12 py-2 mt-4'>
              <div className='d-flex justify-content-between align-items-baseline'>
                <Link to='/store' className='button'>
                  Alışverişe Devam Et
                </Link>
                <div className='d-flex flex-column align-items-end'>
                  <h4>Genel Toplam: 1000 TL</h4>
                  <p>Kargo ve ek hizmet bedelleri ödeme sayfasında eklenecktir.</p>
                  <Link to='/checkout' className='button'>Ödeme</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Cart