import React from 'react';
import s from './ServiceItem.module.scss';
import { NavLinkButton } from '../../NavLinkButton/NavLinkButton';

type ServiceItemPropsType = {
  iconSrc: string
  iconAlt?: string
  title: string
  subTitle: string
  linkUrl?: string
  linkTitle: string
}

export const ServiceItem: React.FC<ServiceItemPropsType> = (
  {
    iconSrc,
    iconAlt = 'icon',
    title,
    subTitle,
    linkUrl,
    linkTitle
  }
) => {

  return (
    <div className={s.service_block}>
      <div className={s.service}>
        <div className={s.service_icon}>
          <img className={s.icon} src={iconSrc} alt={iconAlt}/>
        </div>
        <div className={s.service_info}>
          <h3>{title}</h3>
          <p>
            {subTitle}
          </p>
          <NavLinkButton linkTitle={linkTitle} className={s.service_link} titleLinkUrl={linkUrl}/>
        </div>
      </div>
    </div>
  );
};
