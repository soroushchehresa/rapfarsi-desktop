import styled from 'styled-components';

export default styled.div`
  background-color: #111;
  width: 200px;
  height: calc(100vh - 80px);
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  border-right: 1px solid #222;
  #logo {
    width: 130px;
    margin: 50px auto 20px;
    display: flex;
    align-self: center;
  }
  #menu {
    background-color: transparent;
    .ant-menu-item {
      border-left: 5px solid transparent;
      display: flex;
      align-items: center;
      > svg {
        font-size: 22px;
        margin-right: 15px;
      }
      > span {
        font-weight: bold;
      }
    }
    .ant-menu-item-selected {
      background-color: transparent;
      border-left: 5px solid #a8071a;
    }
  }
`;
