import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';



const OurStore = () => {
    const [grid, setGrid] = useState(4);
    

  return (
    <>
    <Meta title={"Mağaza"}/>
    <BreadCrumb title="Mağaza"></BreadCrumb>
    <Container class1='store-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-3'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Kategoriler</h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Erkek Giyim</li>
                                <li>Kız Giyim</li>
                                <li>Aksesuar</li>
                                <li>Banyo</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Filtreler</h3>
                        <div>
                            <h5 className="sub-title">Stok Durumu</h5>
                            <div>
                                <div className="form-check">
                                    <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    value="" 
                                    id='var' 
                                    />
                                    <label htmlFor="var" className="form-check-label">
                                        Stokta Var (2)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    value="" 
                                    id='yok'
                                    />
                                    <label htmlFor="yok" className="form-check-label">
                                        Stokta Yok
                                    </label>
                            </div>
                            </div>
                            <h5 className="sub-title">Fiyat</h5>
                            <div className='d-flex align-items-center gap-10'>
                                <div className="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="floatingInput1" 
                                        placeholder="Başlangıç"/>
                                    <label htmlFor="floatingInput1">Başlangıç</label>
                                </div>
                                <div className="form-floating">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        id="floatingInput2" 
                                        placeholder="Bitiş"/>
                                    <label htmlFor="floatingInput2">Bitiş</label>
                                </div>
                            </div>
                            <h5 className="sub-title">Renk</h5>
                            <div>
                                <Color/>
                            </div>
                            <h5 className="sub-title">Beden</h5>
                            <div>
                                <div className="form-check">
                                    <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    value="" 
                                    id='size-1' 
                                    />
                                    <label htmlFor="size-1" className="form-check-label">
                                        0 - 3 Ay (2)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input 
                                    type="checkbox" 
                                    className="form-check-input" 
                                    value="" 
                                    id='size-2' 
                                    />
                                    <label htmlFor="size-2" className="form-check-label">
                                        3 - 6 Ay (6)
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>Ürün Etiketleri</h3>
                        <div>
                            <div className="product-tag d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Erkek Giyim
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Kız Giyim
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Bebek Aksesuar
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Banyo
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>İlginizi Çekebilecek Ürünler</h3>
                        <div>
                            <div className="random-products mb-3 d-flex">
                                <div className='w-50'>
                                    <img 
                                    src="images/catbanner-01.jpg" 
                                    className='img-fluid' 
                                    alt="ürün"/>
                                </div>
                                <div className='w-50'>
                                    <h5>Tütü Elbise</h5>
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value="4"
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <b>200 TL</b>
                                </div>
                            </div>
                            <div className="random-products d-flex">
                                <div className='w-50'>
                                    <img 
                                    src="images/catbanner-01.jpg" 
                                    className='img-fluid' 
                                    alt="ürün"/>
                                </div>
                                <div className='w-50'>
                                    <h5>Tütü Elbise</h5>
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        value="4"
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <b>200 TL</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <div className="filter-sort-grid mb-4">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className="d-flex align-items-center gap-10">
                                <p className='mb-0 d-block'>Sırala</p>
                                <select 
                                name='' 
                                className='form-control form-select'
                                id=''>
                                    <option value='manual'>Öne Çıkanlar</option>
                                    <option value='best-selling' selected='selected'>Çok Satanlar</option>
                                    <option value='title-ascending'>Alfabetik, (A-Z)</option>
                                    <option value='title-descending'>Alfabetik, (Z-A)</option>
                                    <option value='price-ascending'>Fiyata göre, (Önce en düşük)</option>
                                    <option value='price-descending'>Fiyata göre, (Önce en yüksek)</option>
                                    <option value='title-ascending'>Tarihe göre, (Önce en eski ilan)</option>
                                    <option value='title-descending'>Tarihe göre, (Önce en yeni ilan)</option>
                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='total-products mb-0' style={{"width":"150px"}}>Toplam Ürün : 21</p>
                                <div className='d-flex gap-10 align-items-center grid'>
                                    <img onClick={()=>{setGrid(3)}} src="images/gr4.svg" className='d-block img-fluid' alt="grid"/>
                                    <img onClick={()=>{setGrid(4)}} src="images/gr3.svg" className='d-block img-fluid' alt="grid"/>
                                    <img onClick={()=>{setGrid(6)}} src="images/gr2.svg" className='d-block img-fluid' alt="grid"/>
                                    <img onClick={()=>{setGrid(12)}} src="images/gr.svg" className='d-block img-fluid' alt="grid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='products-list pb-5'>
                        <div className='d-flex gap-10 flex-wrap'>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                            <ProductCard grid={grid}/>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default OurStore