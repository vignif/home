import React from 'react';
import audioFile from '../../data/fv.mp3';
import { BiPlayCircle } from 'react-icons/bi';

class AudioButton extends React.Component {
    playAudio() {
        const audio = new Audio(audioFile);
        audio.play();
    }

    render() {
        return (
            <div onClick={this.playAudio} style={{ cursor: 'pointer', display:'inline' }}>
                <BiPlayCircle size={25} />
            </div>
        );
    }
}

export default AudioButton;
