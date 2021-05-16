import Link from 'next/link';
import React from 'react';
import s from './CategoryHead.module.scss';

export const CategoryHead: React.FC = () => {

  return (
    <div className={s.bread_crumb_page}>
      <div className={s.bread_crumb_text}>
        <div className={s.title_page}>
          <h2 className={s.title}>
            Products
          </h2>
        </div>
        <div className={s.bread_crumb}>
          <a className={s.bread_crumb_link}>
          <Link href='/home'>
              {/*HOME*/}
            <i></i>
          </Link>
          </a>
          <span>Products</span>
        </div>
      </div>
    </div>
  );
};
