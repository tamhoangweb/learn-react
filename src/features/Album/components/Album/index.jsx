import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Album = ({ album }) => {
  return (
    <div className="album">
      <div className="album__image">
        <img src={album.image} alt={album.name} />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;