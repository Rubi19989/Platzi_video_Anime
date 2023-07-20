import React from 'react';
import classNames from 'classnames'
import { connect } from 'react-redux';
import '../assets/styles/components/Search.scss';
import { searchVideo } from '../actions';

const Search = (props) => {


  const { isHome, searchVideo } = props;

  const inputStyle = classNames('input', {
    isHome
  })


  const handleInput = (event) => {
    searchVideo(event.target.value);
    console.log(event.target.value)
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>



      <input
        type="text"
        className={inputStyle}
        onChange={handleInput}
        placeholder="Buscar..."
      />
      {/* <button><i className={`bi bi-search`}></i></button> */}

    </section>
  );

}

const mapDispathToProps = {
  searchVideo,
}


export default connect(null, mapDispathToProps)(Search)