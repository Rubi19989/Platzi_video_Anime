import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';


import ReactPlayer from "react-player";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import { useNavigate, useParams } from 'react-router-dom';


const override = css`
  display: block;
  margin: 0 auto;
  border-color:  "#fff";
  `;



const ModalVideos = props => {


  const [estado, setEstado] = useState(true)
  const { id } = useParams();
  const navigate = useNavigate();



  const handleButton = () => {
    navigate('/');
  }

  const hasPlaying = Object.keys(props.playing).length > 0;
  console.log(estado)
  useEffect(() => {
    props.getVideoSource(id);
    setInterval(() => {
      setEstado(false)
    }, 2000);
  }, []);

  return hasPlaying ? (
    <div className="Player" >
      <div className="PropagateLoader">
        <RingLoader color={"#fff"} loading={estado} css={override} size={150} speedMultiplier={2} />;
      </div>
      <ReactPlayer url={props.playing.source} playing={true} controls className="videoreact" />

      <div className="Player-back">
        <button type="button" onClick={handleButton}>
          Regresar
        </button>
      </div>
    </div>
  ) : <NotFound />;
}

const mapStateToProps = state => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideoSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalVideos);
