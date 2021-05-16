import Link from 'next/link';
import React from 'react';
import s from './Item.module.scss';

type ItemPropsType = {
  imgSrc: string
  imgAlt?: string
  imgLinkUrl?: string
  itemTitle: string
  itemTitleLinkUrl?: string
}

export const Item: React.FC<ItemPropsType> = (
  {
    imgSrc,
    imgAlt = 'cake',
    imgLinkUrl = '',
    itemTitle,
    itemTitleLinkUrl = ''
  }
) => {
  return (
    <div className={s.item_wrapper}>
      <div className={s.item}>
        <div className={s.image_box}>
          <Link href={imgLinkUrl}>
            <img className={s.category_img} src={imgSrc} alt={imgAlt}/>
          </Link>
        </div>
        <div className={s.category_info}>
          <Link href={itemTitleLinkUrl}>
            <a className={s.info_link}>
              {itemTitle}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
