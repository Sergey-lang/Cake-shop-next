import React from 'react';
import s from './BannerItem.module.scss';
import { NavLinkButton } from '../../NavLinkButton/NavLinkButton';
import Link from 'next/link';

type BannerItemPropsType = {
  bannerImgLinkUrl?: string
  bannerImgAlt?: string
  bannerImgSrc: string
  bannerTitle: string
  bannerLinkTitle: string
  bannerTitleLinkUrl?: string
}

export const BannerItem: React.FC<BannerItemPropsType> = (
  {
    bannerImgLinkUrl = '',
    bannerImgAlt = 'banner',
    bannerImgSrc,
    bannerTitle,
    bannerTitleLinkUrl = '',
    bannerLinkTitle
  }
) => {
  return (
    <div className={s.banner_item}>
      <Link href={bannerImgLinkUrl}>
        <a className={s.banner_link}>
          <img className={s.banner_img} src={bannerImgSrc} alt={bannerImgAlt}/>
        </a>
      </Link>
      <div className={s.banner_content}>
        <div className={s.block_position}>
          <h3 className={s.banner_title}>
            {bannerTitle}
          </h3>
          <NavLinkButton linkTitle={bannerLinkTitle} titleLinkUrl={bannerTitleLinkUrl}/>
        </div>
      </div>
    </div>
  );
};


