import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Meta from '../components/Meta';

const WishList = () => {
  return (
    <>
    <Meta title={"Favorilerim"}/>
    <BreadCrumb title="Favorilerim"></BreadCrumb>
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-3">
                <div className="wishlist-card position-relative">
                    <img 
                    src='images/cross.svg' 
                    alt='cross' 
                    className='position-absolute cross img-fluid'
                    />
                    <div className="wishlist-card-image">
                        <img 
                        src='images/product-01.jpg' 
                        alt='wishlist' 
                        className='w-100 img-fluid'
                        />
                        <div className='py-3 px-3'>
                        <h5 className='title'>Kız Çocuk Çiçek Desenli Elbise</h5>
                        <h6 className='price'>499 TL</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="wishlist-card position-relative">
                    <img 
                    src='images/cross.svg' 
                    alt='cross' 
                    className='position-absolute cross img-fluid'
                    />
                    <div className="wishlist-card-image">
                        <img 
                        src='images/product-02.jpg' 
                        alt='wishlist' 
                        className='w-100 img-fluid'
                        />
                        <div className='py-3 px-3'>
                        <h5 className='title'>Miela Kids Kız Çocuk Beyaz Elbise</h5>
                        <h6 className='price'>599 TL</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="wishlist-card position-relative">
                    <img 
                    src='images/cross.svg' 
                    alt='cross' 
                    className='position-absolute cross img-fluid'
                    />
                    <div className="wishlist-card-image">
                        <img 
                        src='images/product-03.jpg' 
                        alt='wishlist' 
                        className='w-100 img-fluid'
                        />
                        <div className='py-3 px-3'>
                        <h5 className='title'>Organik Kumaş Unisex Bebek Tulum</h5>
                        <h6 className='price'>399 TL</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default WishList