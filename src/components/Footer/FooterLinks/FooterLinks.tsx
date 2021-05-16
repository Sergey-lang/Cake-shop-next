import Link from 'next/link';
import React from 'react';
import s from './FooterLinks.module.scss';

type LinkType = {
  url: string,
  title: string
}

type FooterLinksPropsType = {
  settings: {
    title: string
    navLinks: LinkType[]
  }
}

export const FooterLinks: React.FC<FooterLinksPropsType> = ({ settings }) => {
  return (
    <div className={s.customer}>
      <div className={s.customer_info}>
        <div className={s.title_wrapper}>
          <h4 className={s.title}>
            {settings.title}
          </h4>
          <ul className={s.link_list}>
            {
              settings.navLinks.map(link => {
                return (
                  <li key={link.title}>
                    <Link href={link.url}>
                      <a className={s.link}>
                        {link.title}
                      </a>
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
