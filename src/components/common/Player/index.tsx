import React, { useEffect } from 'react';
import { IoPlaySkipBackSharp } from '@react-icons/all-files/io5/IoPlaySkipBackSharp';
import { IoPlaySharp } from '@react-icons/all-files/io5/IoPlaySharp';
import { IoPlaySkipForwardSharp } from '@react-icons/all-files/io5/IoPlaySkipForwardSharp';
import { IoVolumeHighOutline } from '@react-icons/all-files/io5/IoVolumeHighOutline';
import { IoShuffleOutline } from '@react-icons/all-files/io5/IoShuffleOutline';
import { IoRepeatOutline } from '@react-icons/all-files/io5/IoRepeatOutline';
import { IoHeartOutline } from '@react-icons/all-files/io5/IoHeartOutline';
import Styles from './styles';


export default function Player() {
  useEffect(() => {

  }, []);

  return (
    <Styles>
      <div id="player-track">
        <img src="http://51.89.98.91:3004/photo/2020/12/Sogand%20-%20Top-250x250.jpg" alt="" />
        <div id="player-track-details">
          <div id="title-wrapper">
            <h3>Top</h3>
            <IoHeartOutline />
          </div>
          <span>Sogand Ft. Zakhmi & Behzad Leito</span>
        </div>
      </div>
      <div id="player-buttons-wrapper">
        <button id="player-shuffle-button">
          <IoShuffleOutline />
        </button>
        <button>
          <IoPlaySkipBackSharp />
        </button>
        <button id="player-play-button">
          <IoPlaySharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>
        <button id="player-repeat-button">
          <IoRepeatOutline />
        </button>
      </div>
      <div id="player-seekbar-wrapper">
        <span id="passed-time">0:00</span>
        <div id="seekbar">
        </div>
        <span id="full-time">3:51</span>
      </div>
      <div id="player-volume-wrapper">
        <IoVolumeHighOutline />
        <div id="volume-wrapper"></div>
      </div>
    </Styles>
  );
};
