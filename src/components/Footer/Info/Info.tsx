import Link from 'next/link';
import React from 'react';
import s from './Info.module.scss';

const inst = '/static/image/footer/instagram-footer.svg';

export const Info: React.FC = () => {

  const arr = [
    { url: '', icon: inst, alt: 'dwed' },
    { url: '', icon: inst, alt: 'dfs' },
    { url: '', icon: inst, alt: 'e34' },
    { url: '', icon: inst, alt: 'fw44t' }
  ];

  return (
    <div className={s.subscribe}>
      <div className={s.info_footer}>
        <div className={s.logo_wrapper}>
          <Link href={''}>
            <a className={s.logo}>
              <img src={'/static/image/header/logo.png'} alt="logo"/>
            </a>
          </Link>
        </div>
        <p className={s.content}>
          Subscribe our newsletter and get <br/>
          discount 30% off
        </p>
        <div className={s.icon_list}>
          <ul className={s.list_inline}>
            {
              arr.map(link => {
                return (
                  <li className={s.list_inline_item} key={link.alt}>
                    <a className={s.link} href={link.url}>
                      <img className={s.icon} src={link.icon} alt={link.alt}/>
                    </a>
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
