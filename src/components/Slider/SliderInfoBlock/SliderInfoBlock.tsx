import React from 'react';
import s from './SliderInfoBlock.module.scss';
import Link from 'next/link';

type SliderInfoBlockPropsType = {
  imageSrc: string
  topTitle: string
  mediumTitle: string
  buttonTitle: string
  navLinkUrl?: string
  navLinkTitle: string
}

export const SliderInfoBlock: React.FC<SliderInfoBlockPropsType> = (
  {
    imageSrc,
    topTitle,
    mediumTitle,
    buttonTitle,
    navLinkUrl = '',
    navLinkTitle
  }
) => {

  return (
    <div className={s.info_slide}>
      <img className={s.slide_img} src={imageSrc}/>
      <div className={s.box_content}>
        <div className={s.left_text}>
          <div className={s.box_title1}>
            <h3 className={s.title_small}>
              {topTitle}
            </h3>
          </div>
          <div className={s.box_title2}>
            <h3 className={s.title_big}>
              {mediumTitle}
            </h3>
          </div>
          <div className={s.box_title3}>
            <h3 className={s.title_small2}>
              {buttonTitle}
            </h3>
          </div>
          <Link href={navLinkUrl}>
            <a className={s.main_btn}>
              {navLinkTitle}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
