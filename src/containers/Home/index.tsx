import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Sidebar from '../../components/common/Sidebar';
import ListSlider from '../../components/common/ListSlider';
import Navbar from '../../components/common/Navbar';
import Styles from './styles';
import { getHomeLists } from './redux';

interface Props {
  getHomeLists: () => void,
  getHomeListsLoading: boolean,
  homeListsData: object[],
}

function Home(
  {
    getHomeLists: getHomeListsAction,
    getHomeListsLoading,
    homeListsData
  }: Props
) {
  useEffect(() => {
    getHomeListsAction();
  }, []);

  return (
    <Styles>
      <Navbar />
      <Sidebar />
      <div className="container">
        {
          getHomeListsLoading && (
            <h1 style={{ color: '#fff' }}>Loading...</h1>
          )
        }
        {
          _.get(homeListsData, 'lastPosts') && (
            <ListSlider
              title="Latest Track"
              listData={_.get(homeListsData, 'lastPosts')}
            />
          )
        }
        {
          _.get(homeListsData, 'lastAlbum') && (
            <ListSlider
              title="Latest Album"
              listData={_.get(homeListsData, 'lastAlbum')}
            />
          )
        }
        {
          _.get(homeListsData, 'lastVideo') && (
            <ListSlider
              title="Latest Video"
              listData={_.get(homeListsData, 'lastVideo')}
            />
          )
        }
        {
          _.get(homeListsData, 'lastPodcast') && (
            <ListSlider
              title="Latest Podcast"
              listData={_.get(homeListsData, 'lastPodcast')}
            />
          )
        }
        {
          _.get(homeListsData, 'lastTrend') && (
            <ListSlider
              title="Trending"
              listData={_.get(homeListsData, 'lastTrend')}
            />
          )
        }
        {
          _.get(homeListsData, 'lastPlaylist') && (
            <ListSlider
              title="PlayList"
              listData={_.get(homeListsData, 'lastPlaylist')}
            />
          )
        }
        {
          _.get(homeListsData, 'tops') && (
            <ListSlider
              listType="artist"
              title="Top Artists"
              listData={_.get(homeListsData, 'tops')}
            />
          )
        }
      </div>
    </Styles>
  );
}

export default connect(
  (state: any) => ({
    getHomeListsLoading: _.get(state, ['Home', 'getHomeListsLoading']),
    homeListsData: _.get(state, ['Home', 'homeListsData'])

  }),
  {
    getHomeLists
  }
)(Home);
