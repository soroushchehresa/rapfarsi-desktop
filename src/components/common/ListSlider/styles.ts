import styled from 'styled-components';

export default styled.div`
  padding: 0 10px;
  margin: 50px 0;
  .title-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .list-title {
      color: #fff;
      font-size: 24px;
      margin: 0 0 0 10px;
    }
    .see-all-button {
      background-color: transparent;
      border: none;
      outline: none;
      color: #fff;
      font-size: 14px;
      opacity: .7;
      transition: all ease .2s;
      &:hover {
        opacity: 1;
      }
    }
    .buttons-wrapper {
      > * {
        margin: 0;
        background-color: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 16px;
        opacity: .7;
        transition: all ease .2s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .list-items-wrapper {
    .list-item {
      padding: 10px;
      overflow: hidden;
      border-radius: 16px;
      transition: all ease .1s;
      &:hover {
        .item-overlay {
          opacity: 1 !important;
        }
      }
      .item-cover-wrapper {
        position: relative;
        overflow: hidden;
        .item-overlay {
          opacity: 0;
          position: absolute;
          background-color: rgba(0,0,0,.45);
          transition: all ease .2s;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 9;
          > svg {
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            color: #fff;
            z-index: 10;
            font-size: 42px;
            transition: all ease .1s;
            &:hover {
              font-size: 50px;
            }
          }
        }
        .item-cover {
          width: 100%;
          object-fit: contain;
        }
      }
      .item-title {
        color: #fff;
        margin: 10px 0 0;
        font-size: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        &:hover {
          text-decoration-line: underline;
          text-underline-offset: 3px;
        }
      }
      .item-artist {
        color: #b5b5b5;
        margin: 0;
        font-size: 13px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: table;
      }
    }
  }
`;
