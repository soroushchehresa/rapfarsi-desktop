import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Styles from './styles';

export default function Navbar() {
  return (
    <Styles>
      <div id="search-box">
        <Input size="small" placeholder="Search" prefix={<SearchOutlined />} />
      </div>
    </Styles>
  );
};
