import styled from 'styled-components';

export default styled.div`
  width: calc(100% - 200px);
  height: 60px;
  overflow: hidden;
  position: fixed;
  left: 200px;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  transition: all linear .2s;
  #search-box {
    background-color: #fff;
    height: 25px;
    float: left;
    border-radius: 30px;
    overflow: hidden;
    > * {
      outline: none;
      border: none;
    }
    input {
      font-size: 13px;
      height: 25px;
      &::placeholder {
        color: #333;
        opacity: 1;
      }
    }
  }
`;
