import React from 'react';
import s from './GalleryItem.module.scss';

type BannerItemPropsType = {
  galleryMainImg: string
  galleryMainImgAlt?: string
  galleryTitleLinkUrl?: string
  galleryLinkImgAlt?: string
}

export const GalleryItem: React.FC<BannerItemPropsType> = (
  {
    galleryMainImg,
    galleryMainImgAlt = 'cake image',
    galleryTitleLinkUrl = '',
    galleryLinkImgAlt = 'instagram'
  }
) => {
  return (
    <div className={s.item}>
      <div className={s.content}>
        <img className={s.itemImg} src={galleryMainImg} alt={galleryMainImgAlt}/>
        <div className={s.about}>
          <a className={s.about_link} href={galleryTitleLinkUrl}>
            <img className={s.icon}
                 src={'/static/image/gallery/instagramItemIcon.svg'}
                 alt={galleryLinkImgAlt}/>
          </a>
        </div>
      </div>
    </div>
  );
};


