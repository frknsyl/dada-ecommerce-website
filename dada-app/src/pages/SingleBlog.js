import React from 'react';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import blog from '../components/images/blog-1.jpg';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container';


const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dinamik Blog İsmi"}/>
    <BreadCrumb title="Dinamik Blog İsmi"></BreadCrumb>
    <Container class1="blog-wrapper home-wrapper-2 py-5">
            <div className='row'>
                <div className='col-12'>
                    <div className="single-blog-card">
                        <Link to='/blogs' className='d-flex align-items-center gap-10'>
                            <HiOutlineArrowLeft className='fs-4'/> Blog Ana Sayfasına Geri Dön
                        </Link>
                        <h3 className="title">
                            Bebek Bakımında Dikkat Edilmesi Gerekenler
                        </h3>
                        <img 
                        src={blog} 
                        className='img-fluid w-100 my-4' 
                        alt='blog'
                        />
                        <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam cupiditate corrupti similique quo quas, doloremque quia porro veritatis, magni, maiores provident! Illo nulla eos explicabo ex tempora laudantium, provident odit!
                        Voluptatum unde maxime est maiores non vero laborum cum esse iure sapiente explicabo ipsum similique, fugit quo sed perspiciatis molestias omnis illum, culpa quasi provident, veritatis consequatur suscipit saepe. Libero?
                        Voluptates dolorem autem, quos ad voluptatibus corrupti nostrum facilis modi labore. Sit possimus sint, sequi perspiciatis eos reiciendis, corporis recusandae, rem esse blanditiis iusto repudiandae odio non rerum amet harum?
                        Commodi quod soluta perspiciatis alias nostrum, vero nihil, placeat repudiandae non eius architecto veritatis iste at expedita atque obcaecati ut neque maiores. Modi dicta esse sint qui omnis suscipit temporibus!
                        Iure consequatur distinctio ullam, libero architecto aperiam facilis vero numquam pariatur, porro voluptates deserunt aliquid ipsa blanditiis tempora nobis officiis dolor eaque? Ullam facere, magnam quas facilis quis asperiores fuga?
                        </p>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default SingleBlog