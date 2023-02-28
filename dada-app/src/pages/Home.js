import React from 'react'
import Marquee from 'react-fast-marquee'
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import { services } from '../utils/Data';

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className='carousel-wrapper'>
          <div className='row'>
              <div className='col-12'>
                <div id="myCarousel" className="carousel carousel-fade" data-bs-ride="false">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                      <img src="images/blog-1.jpg" className="d-block w-100" alt="slide1"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                      <img src="images/blog-1.jpg" className="d-block w-100" alt="slide2"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                      <img src="images/blog-1.jpg" className="d-block w-100" alt="slide3"/>
                      <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-1 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='d-flex flex-wrap gap-10 justify-content-center align-items-center'>
              <div className='small-banner position-relative col-3'>
                <img 
                src='images/catbanner-01.jpg'
                className='img-fluid rounded-3' 
                alt='main banner'>
                </img>
                <div className='small-banner-content position-absolute'>
                  <h4>ÇOK SATANLAR</h4>
                  <h5>Kız Bebek Elbise</h5>
                  <p>Özel Günleriniz İçin Mükemmel Tercih</p>
                </div>
              </div>
              <div className='small-banner position-relative col-3'>
                <img 
                src='images/catbanner-01.jpg'
                className='img-fluid rounded-3' 
                alt='main banner'>
                </img>
                <div className='small-banner-content position-absolute'>
                  <h4>YENİ GELENLER</h4>
                  <h5>0-2 Yaş Kız Ürünleri</h5>
                  <p>Uygun Fiyatlarla</p>
                </div>
              </div>
              <div className='small-banner position-relative col-3'>
                <img 
                src='images/catbanner-01.jpg'
                className='img-fluid rounded-3' 
                alt='main banner'>
                </img>
                <div className='small-banner-content position-absolute'>
                  <h4>%10 İNDİRİM</h4>
                  <h5>Kampanyalı Ürünler</h5>
                  <p>Fırsatları Kaçırmayın</p>
                </div>
              </div>
              <div className='small-banner position-relative col-3'>
                <img 
                src='images/catbanner-01.jpg'
                className='img-fluid rounded-3' 
                alt='main banner'>
                </img>
                <div className='small-banner-content position-absolute'>
                  <h4>DADA'NIN TAVSİYELERİ</h4>
                  <h5>En Beğenilen Ürünler</h5>
                  <p>En İyi Kalite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='services d-flex align-items-center justify-content-between'>
              {
                services.map((i,j)=> {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.image} alt="services"/>
                      <div>
                        <h6>{i.title}</h6>
                        <p className='mb-0'>{i.tagline}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>En Yeniler</h6>
                    <p>3 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Erkek Ürünleri</h6>
                    <p>20 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Kız Ürünleri</h6>
                    <p>30 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Aksesuarlar</h6>
                    <p>10 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Banyo</h6>
                    <p>8 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Oyuncak</h6>
                    <p>10 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Hediyelik Eşya</h6>
                    <p>8 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>İç Çamaşırı & Çorap</h6>
                    <p>10 Ürün</p>
                  </div>
                  <img src='images\kategori-yeni.jpg' alt='en yeniler' />
                </div>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Öne Çıkanlar</h3>
            </div>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
      <div className='row'>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img 
                src='images/product-03.jpg'
                className='img-fluid' 
                alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>DADA'NIN TAVSİYESİ</h5>
                  <h6>Yenidoğan Tulum</h6>
                  <p>Doğal Pamuk Kumaş</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img 
                src='images/product-03.jpg'
                className='img-fluid' 
                alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>DADA'NIN TAVSİYESİ</h5>
                  <h6>Yenidoğan Tulum</h6>
                  <p>Doğal Pamuk Kumaş</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img 
                src='images/product-03.jpg'
                className='img-fluid' 
                alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>DADA'NIN TAVSİYESİ</h5>
                  <h6>Yenidoğan Tulum</h6>
                  <p>Doğal Pamuk Kumaş</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img 
                src='images/product-03.jpg'
                className='img-fluid' 
                alt='famous'/>
                <div className='famous-content position-absolute'>
                  <h5>DADA'NIN TAVSİYESİ</h5>
                  <h6>Yenidoğan Tulum</h6>
                  <p>Doğal Pamuk Kumaş</p>
                </div>
              </div>
            </div>
          </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Kampanyalı Ürünler</h3>
            </div>
        </div>
        <div className='row'>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
          <SpecialProduct></SpecialProduct>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2'">
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
      <Container class1="marquee-wrapper py-5">
        <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='marquee d-flex'>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-01.webp' alt='marka logo'/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-02.webp' alt='marka logo'/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-03.png' alt='marka logo'/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-04.png' alt='marka logo'/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-05.png' alt='marka logo'/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-06.png' alt='marka logo'/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-07.png' alt='marka logo'/>
                  </div>
                  <div className='mx-5 w-25'>
                    <img src='images/brand-08.svg' alt='marka logo'/>
                  </div>
                </Marquee>
              </div>
            </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Son Yayınlanan Blog Yazılarımız</h3>
            </div>
        </div>
        <div className="row">
          <div className="col-3">
          <BlogCard></BlogCard>
          </div>
          <div className="col-3">
          <BlogCard></BlogCard>
          </div>
          <div className="col-3">
          <BlogCard></BlogCard>
          </div>
          <div className="col-3">
            <BlogCard></BlogCard>
        </div>
        </div>
      </Container>
    </>
  )
}

export default Home