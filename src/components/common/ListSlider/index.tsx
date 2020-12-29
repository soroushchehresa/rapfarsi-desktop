import React, { useRef } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { IoPlay } from '@react-icons/all-files/io5/IoPlay';
import Carousel from 'react-multi-carousel';
import _ from 'lodash';
import 'react-multi-carousel/lib/styles.css';
import Styles from './styles';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 1400, min: 1100 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1100, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

interface Props {
  title: string,
  seeAll?: string | null,
  listData: object[],
  listType?: string | null,
}

export default function ListSlider({ title, listData, listType = null, seeAll = null }: Props) {
  let carouselRef: any = useRef<HTMLDivElement>();
  return (
    <Styles>
      <div className="title-wrapper">
        <h1 className="list-title">{title}</h1>
        {
          !!seeAll ? (
            <button className="see-all-button">SEE ALL</button>
          ) : (
            <div className="buttons-wrapper">
              <button onClick={() => carouselRef.previous()}>
                <LeftOutlined />
              </button>
              <button onClick={() => carouselRef.next()}>
                <RightOutlined />
              </button>
            </div>
          )
        }
      </div>
      <div className="list-items-wrapper">
        <Carousel
          ref={el => carouselRef = el}
          responsive={responsive}
          swipeable={false}
          arrows={false}
          draggable={false}
          showDots={false}
          keyBoardControl={false}
          transitionDuration={50}
        >
          {
            listData.map((item: object) => (
              <div className="list-item">
                <div className="item-cover-wrapper">
                  <div className="item-overlay">
                    <IoPlay />
                  </div>
                  <img alt="" className="item-cover" src={listType === 'artist' ? _.get(item, ['photo', 'OPT']) : _.get(item, ['cover', 'link'])} />
                </div>
                <h3 className="item-title">{listType === 'artist' ? _.get(item, 'name') : _.get(item, 'title')}</h3>
                <span className="item-artist">{_.get(item, 'artistTitle')}</span>
              </div>
            ))
          }
        </Carousel>
      </div>
    </Styles>
  );
};
