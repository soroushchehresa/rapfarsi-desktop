import React from 'react';
import { Menu } from 'antd';
import { IoHomeOutline } from '@react-icons/all-files/io5/IoHomeOutline';
import { IoMusicalNotesOutline } from '@react-icons/all-files/io5/IoMusicalNotesOutline';
import { IoAlbumsOutline } from '@react-icons/all-files/io5/IoAlbumsOutline';
import { IoTvOutline } from '@react-icons/all-files/io5/IoTvOutline';
import { IoRadioOutline } from '@react-icons/all-files/io5/IoRadioOutline';
import { IoPeopleOutline } from '@react-icons/all-files/io5/IoPeopleOutline';
import { IoListOutline } from '@react-icons/all-files/io5/IoListOutline';
import Styles from './styles';
import logo from './assets/logo.png';

export default function Sidebar() {
  return (
    <Styles>
      <img
        id="logo"
        src={logo}
        alt="logo"
      />
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        id="menu"
      >
        <Menu.Item key="1" icon={<IoHomeOutline />}>
          Home
        </Menu.Item>
        <Menu.Item key="2" icon={<IoMusicalNotesOutline />}>
          Mp3
        </Menu.Item>
        <Menu.Item key="3" icon={<IoAlbumsOutline />}>
          Album
        </Menu.Item>
        <Menu.Item key="4" icon={<IoTvOutline />}>
          Video
        </Menu.Item>
        <Menu.Item key="5" icon={<IoRadioOutline />}>
          Podcast
        </Menu.Item>
        <Menu.Item key="6" icon={<IoPeopleOutline />}>
          Artist
        </Menu.Item>
        <Menu.Item key="7" icon={<IoListOutline />}>
          PlayList
        </Menu.Item>
      </Menu>
    </Styles>
  );
};
