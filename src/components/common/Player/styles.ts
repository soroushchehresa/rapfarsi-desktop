import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 90px;
  background-color: #2c2c2c;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  #player-track {
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    > img {
      width: 60px;
      height: 60px;
      object-fit: contain;
    }
    #player-track-details {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      > #title-wrapper {
        display: flex;
        align-items: center;
        flex-direction: row;
        > h3 {
          color: #fff;
          font-size: 14px;
          margin: 0;
          display: block;
          max-width: 170px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        > svg {
          color: #b5b5b5;
          font-size: 18px;
          margin-left: 12px;
        }
      }
      > span {
        color: #b5b5b5;
        font-size: 11px;
        margin: 3px 0 0;
        display: block;
        max-width: 170px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
  #player-buttons-wrapper {
    margin-top: 5px;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    > button {
      background-color: transparent;
      border: none;
      outline: none;
      display: inline-block;
      > svg {
        color: #b5b5b5;
        font-size: 15px;
        &:hover {
          color: #fff;
        }
      }
      &#player-shuffle-button {
        margin-right: 20px;
        > svg {
          font-size: 20px;
        }
      }      
      &#player-repeat-button {
        margin-left: 20px;
        > svg {
          font-size: 20px;
        }
      }
      &#player-play-button {
        display: flex;
        width: 32px;
        height: 32px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 100px;
        border: 1px solid #fff;
        margin: 0 25px;
        transition: all ease .1s;
        &:hover {
          transform: scale(1.05);
        }
        > svg {
          margin-left: 2px;
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
  #player-seekbar-wrapper {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    #passed-time {
      color: #b5b5b5;
      font-size: 11px;
    }
    #seekbar {
      width: 520px;
      height: 4px;
      background-color: #b5b5b5;
      margin: 0 15px;
      border-radius: 5px;
    }
    #full-time {
      color: #a8a8a8;
      font-size: 11px;
    }
  }
  #player-volume-wrapper {
    position: absolute;
    right: 20px;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      color: #a8a8a8;
      font-size: 20px;
      &:hover {
        color: #fff;
      }
    }
    #volume-wrapper {
      width: 80px;
      height: 4px;
      background-color: #b5b5b5;
      margin-left: 7px;
      border-radius: 5px;
    }
  }
`;
