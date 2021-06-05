import React from 'react';
import s from './Gallery.module.scss';
import { Headline } from '../Headline/Headline';
import { GalleryItem } from './GalleryItem/GalleryItem';

export const Gallery: React.FC = () => {
  return (
    <>
      <Headline headline={'Gallery On Instagram'}
                subHeading={'@react_dev'}/>
      <div className={s.gallery_wrapper}>
        <div className={s.gallery_items}>
          <GalleryItem galleryMainImg={'/static/image/gallery/icake1.jpg'}/>
          <GalleryItem galleryMainImg={'/static/image/gallery/icake2.jpg'}/>
          <GalleryItem galleryMainImg={'/static/image/gallery/icake3.jpg'}/>
          <GalleryItem galleryMainImg={'/static/image/gallery/icake4.jpg'}/>
        </div>
      </div>
    </>

  );
};
