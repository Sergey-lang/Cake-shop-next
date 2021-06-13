import React from 'react';
import s from './SliderInfoBlock.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

type SliderInfoBlockPropsType = {
  imageSrc: string
  mediumTitle: string
  buttonTitle: string
  navLinkUrl?: string
  navLinkTitle: string
  right?: boolean
}

export const SliderInfoBlock: React.FC<SliderInfoBlockPropsType> = (
  {
    imageSrc,
    mediumTitle,
    buttonTitle,
    navLinkUrl = '',
    navLinkTitle,
    right,
  }
) => {

  return (
    <div className={s.info_slide}>
      <img className={s.slide_img} src={imageSrc}/>
      <div className={clsx(s.box_content, right && s.right)}>
        <div className={clsx(s.left_text, right && s.right)}>
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
