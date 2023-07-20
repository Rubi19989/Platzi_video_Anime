import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';
import { connect } from 'react-redux';
import Header from '../components/Header';

const Register = (props) => {

    const navigate = useNavigate()

    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.registerRequest(form)
        navigate('/');

    }

    return (
        <>
        <Header isRegister/>
            <section className='register'>
                <section className='register__container'>
                    <h2>Regístrate</h2>
                    <form className='register__container--form' onSubmit={handleSubmit}>
                        <input
                            name='name'
                            className='input2'
                            type='text'
                            placeholder='Nombre'
                            onChange={handleInput}
                        />
                        <input
                            name='email'
                            className='input2'
                            type='text'
                            placeholder='Correo'
                            onChange={handleInput}
                        />
                        <input
                            name='password'
                            className='input2'
                            type='password'
                            placeholder='Contraseña'
                            onChange={handleInput}
                        />
                        <button className='button'>Registrarme</button>
                    </form>
                    <Link to={'/login'}> Inicia sesión </Link>
                </section>
            </section>
        </>
    );
}


const mapDispatchToProps = {
    registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
