import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getVideoSource } from '../actions'
import NotFound from '../containers/NotFound'
import { connect } from 'react-redux';
import '../assets/styles/components/Player.scss'

const Player = (props) => {

    //Recibe el id
    const { id } = useParams();
    const hasPlaying = Object.keys(props.playing).length > 0;


    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/')
    }


    useEffect(() => {
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (

        <>
            <div className='Player'>
                <video controls autoPlay>
                    <source src={props.playing.source} type='video/mp4' />
                </video>
            </div>

            <div className="Player-back">
                <button type='button'
                    onClick={handleButton}>
                    Regresar
                </button>
            </div>
        </>
    ) : <NotFound />;
}

const mapStateToProps = state => {

    return {
        playing: state.playing,
    }
}


const mapDispathToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispathToProps)(Player);