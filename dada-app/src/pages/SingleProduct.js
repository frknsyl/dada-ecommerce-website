import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard'
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { BsHeart }  from "react-icons/bs";
import product1 from '../components/images/product-01.jpg';
import product2 from '../components/images/product-011.jpg';
import Container from '../components/Container';


const SingleProduct = () => {
    const props = {
        width: 400, 
        height: 600, 
        zoomWidth: 600, 
        img: product1
    };

    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
      }

  return (
    <>
    <Meta title={"Dinamik Ürün İsmi"}/>
    <BreadCrumb title="Dinamik Ürün İsmi"></BreadCrumb>
    <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-6">
                <div className="main-product-image">
                    <div>
                        <ReactImageZoom {...props} />
                    </div>
                </div>
                <div className='other-product-images d-flex flex-wrap gap-15'>
                    <div>
                        <img src={product2} className='img-fluid' alt="product images"/>
                    </div>
                    <div>
                        <img src={product2} className='img-fluid' alt="product images"/>
                    </div>
                    <div>
                        <img src={product2} className='img-fluid' alt="product images"/>
                    </div>
                    <div>
                        <img src={product2} className='img-fluid' alt="product images"/>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="main-product-details">
                    <div className="border-bottom">
                        <h3 className='title'>
                            Çiçek Desenli Elbise
                        </h3>
                    </div>
                    <div className="border-bottom py-3">
                        <p className='price'>500 TL</p>
                        <div className="d-flex align-items-center gap-10">
                            <ReactStars
                                count={5} 
                                size={24} 
                                value="4"
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='mb-0 t-review'>2 Yorum</p>
                        </div>
                        <a className='review-btn' href="#review">Yorum Ekle</a>
                    </div>
                    <div class="py-3">
                        <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Marka:</h3> 
                            <p className='product-data'>Ilo Baby</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Model:</h3> 
                            <p className='product-data'>Eloise Elbise</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Kategori:</h3> 
                            <p className='product-data'>Kız Giyim</p>
                        </div>
                        <div className='d-flex gap-10 align-items-center my-2'>
                            <h3 className='product-heading'>Stok Durumu:</h3> 
                            <p className='product-data'>Stokta Var</p>
                        </div>
                        <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Beden:</h3> 
                            <div className='d-flex flex-wrap gap-15'>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>
                                    1-2 Yaş
                                </span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>
                                    3-4 Yaş
                                </span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>
                                    5-6 Yaş
                                </span>
                                <span className='badge border border-1 bg-white text-dark border-secondary'>
                                    7-8 Yaş
                                </span>
                            </div>
                        </div>
                        <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                            <h3 className='product-heading'>Renk:</h3> 
                            <Color/>
                        </div>
                        <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
                            <h3 className='product-heading'>Miktar:</h3> 
                            <div>
                                <input 
                                    type="number" 
                                    name=''
                                    min={1}
                                    max={10}
                                    className='form-control' 
                                    style={{"width":"70px"}} 
                                    id=''
                                />
                            </div>
                            <div className='d-flex align-items-center gap-30 ms-5'>
                            <button className='button border-0' type='submit'>
                                Sepete Ekle
                            </button>
                            <button to='/signup' className='button signup'>
                                Hemen Al
                            </button>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <div>
                                <a href="">
                                    <BsHeart className='fs-5 me-1'/> Favorilere Ekle
                                </a>
                            </div>
                        </div>
                        <div className='d-flex gap-10 flex-column my-3'>
                            <h3 className='product-heading'>Kargo ve İade:</h3> 
                            <p className='product-data'>
                                <b>600 TL üzeri</b> tüm siparişlerde geçerli kargo ücretsiz. <br/>
                                <b>7 gün </b> içinde koşulsuz iade.
                            </p>
                        </div>
                        <div className='d-flex gap-10 flex-column my-3'>
                            <h3 className='product-heading'>Ürün Linki:</h3> 
                            <a 
                            href="javascript:void[0]:" 
                            onClick={()=>{
                                copyToClipboard(
                                    {product2}
                                    );
                                }}
                                >
                                Ürün Linkini Kopyalamak İçin Tıklayınız
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <h4>Ürün Açıklaması</h4>
                <div className='bg-white p-3'>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos odit vitae ex vel impedit dicta. Ipsam earum magnam quos iusto animi dolorum commodi! Deserunt veritatis omnis culpa quibusdam odio dolorem!
                    </p> 
                </div>
            </div>
        </div>
    </Container>
    <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <h3  id='review'>Yorumlar</h3>
                <div className='review-inner-wrapper'>
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className='mb-2'>Müşteri Değerlendirmeleri</h4>
                            <div className='d-flex align-items-center gap-10'>
                                <ReactStars
                                    count={5} 
                                    size={24} 
                                    value="4"
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className='mb-0'>2 Yoruma Göre</p>
                            </div>
                        </div>
                        {
                            orderedProduct &&
                            <div>
                            <a className='text-dark text-decoration-underline' href="">Yorum Ekle</a>
                            </div>
                        }
                    </div>
                    <div className='review-form py-4'>
                        <h4>Değerlendirmeniz</h4>
                        <form action="" className='d-flex flex-column gap-15'>
                            <div>
                                <ReactStars
                                    count={5} 
                                    size={24} 
                                    value="4"
                                    edit={true}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div>
                                <textarea
                                className='w-100 form-control'
                                placeholder='Yorumunuz...' 
                                name="" 
                                id="" 
                                cols="30" 
                                rows="4">
                                </textarea>
                            </div>
                            <div className='d-flex justify-content-end'>
                            <button className='button'>Yorumu Gönder</button>
                            </div>
                        </form>
                    </div>
                    <div class="reviews mt-4">
                        <div class="review">
                            <div className='d-flex flex-column gap-10 align-items-start'>
                                <h6 className='mb-0'>Müşteri İsmi</h6>
                                <ReactStars
                                    count={5} 
                                    size={24} 
                                    value="4"
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <p className='mt-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi rerum quis, consequatur perspiciatis vel vero temporibus explicabo. Quasi inventore animi ea sapiente asperiores itaque natus maxime repellat quaerat. Molestiae?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    <Container class1='popular-wrapper py-5 home-wrapper-2'>
        <div className='row'>
        <div className='col-12'>
            <h3 className='section-heading'>Çok Satanlar</h3>
        </div>
        <div className='row'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        </div>
    </Container>
    </>
  )
}

export default SingleProduct