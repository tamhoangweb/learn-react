import React from 'react';
import PropTypes from 'prop-types';
import Albumlist from './components/AlbumList';

const AlbumFeature = props => {
  const albumList = [
    {
      id: 1,
      name: 'Phim HOT! Nhạc HAY!',
      image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/7/1/7/f/717f8af12721cdaedc9ddad6460959f5.jpg'
    },
    {
      id: 2,
      name: 'Nhạc Phim Hàn Mới Nhất',
      image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/1/2/8/8128aa774cf8a0f0614c470b1a763ac8.jpg'
    },
    {
      id: 3,
      name: 'Nhạc Phim Anime Hay Nhất',
      image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/7/b/7/87b7021d03bc5e8cce0c69c05e428118.jpg'
    },
    {
      id: 4,
      name: 'Nhạc Phim TVB Hay Nhất',
      image: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/2/c/8/52c8568609ef444e9fc29c389d153040.jpg'
    },
  ]
  return (
    <div>
      <h2>Có thể bạn thích</h2>
      <Albumlist albumList={albumList} />
    </div>
  );
};

AlbumFeature.propTypes = {

};

export default AlbumFeature;