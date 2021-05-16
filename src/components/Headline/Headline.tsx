import React from 'react';
import s from './Headline.module.scss';

type HeadlinePropsType = {
  headline: string
  subHeading?: string
  iconSrc?: string
  iconAlt?: string
}

export const Headline: React.FC<HeadlinePropsType> = ({ headline, subHeading, iconSrc, iconAlt }) => {

  const finalStyle = subHeading ? `${s.title_heading} ${s.on_sub_heading}` : s.title_heading;

  return (
    <div className={s.text_center}>
      {
        iconSrc
        && <div className={s.icon}>
          <img src={iconSrc} alt={iconAlt}/>
        </div>
      }
      <h3 className={finalStyle}>{headline}</h3>
      {
        subHeading && <span className={s.sub_heading}>{subHeading}</span>
      }
    </div>
  );
};
