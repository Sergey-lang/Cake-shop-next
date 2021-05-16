import React from 'react';
import s from './Gallery.module.scss';
import { Headline } from '../Headline/Headline';
import { GalleryItem } from './GalleryItem/GalleryItem';

export const Gallery: React.FC = () => {
  return (
    <div className={s.gallery_wrapper}>
      <Headline headline={'Instagram галлерея'} iconSrc={'/static/image/gallery/instagram.svg'}/>
      <div className={s.gallery_items}>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake1.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake2.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake3.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake4.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake5.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake5.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake4.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake3.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake2.jpg'}/>
        <GalleryItem galleryMainImg={'/static/image/gallery/icake1.jpg'}/>
      </div>
    </div>
  );
};
