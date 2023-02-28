import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Signup = () => {
  return (
    <>
    <Meta title={"Kayıt Ol"}/>
    <BreadCrumb title="Kayıt Ol"></BreadCrumb>
    <Container className="login-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className='text-center mb-3'>Hesap Oluştur</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                        <CustomInput type="text" name='name' placeholder='Ad - Soyad'/>
                        <CustomInput type="email" name='email' placeholder='E-mail'/>
                        <CustomInput type="tel" name='mobile' placeholder='Telefon Numarası'/>
                        <CustomInput type="password" name='password' placeholder='Şifre'/>
                        <div>
                            <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                <button className='button border-0'>Kayıt Ol</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
    </>
  )
}

export default Signup