import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <>
    <Meta title={"Giriş Yap"}/>
    <BreadCrumb title="Giriş Yap"></BreadCrumb>
    <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
                <div className="col-12">
                    <div className="auth-card">
                        <h3 className='text-center mb-3'>Giriş Yap</h3>
                        <form action="" className='d-flex flex-column gap-15'>
                            <CustomInput type='email' name='email' placeholder='E-mailinizi Giriniz'/>
                            <CustomInput type='password' name='password' placeholder='Şifrenizi Giriniz'/>
                            <div>
                                <Link to='/forgot-password'>Şifrenizi mi unuttunuz?</Link>
                                <div className=" mt-3 d-flex justify-content-center gap-15 align-items-center">
                                    <button className='button border-0' type='submit'>
                                        Giriş Yap
                                    </button>
                                    <Link to='/signup' className='button signup'>Kayıt Ol</Link>
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

export default Login