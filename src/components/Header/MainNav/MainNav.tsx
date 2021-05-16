import Link from 'next/link';
import React from 'react';
import s from './MainNav.module.scss';

export const MainNav: React.FC = () => {

  return (
    <div className={s.menu}>
      <nav className={s.navbar}>
        <ul className={s.navbar_nav}>
          <li className={s.nav_item}>
            <Link href="/">
              <a className={s.link}>ГЛАВНАЯ</a>
            </Link>
          </li>
          <li className={s.nav_item}>
            <Link href="/shop">
              <a className={s.link}>МАГАЗИН</a>
            </Link>
          </li>
          <li className={s.nav_item}>
            <Link href="/blogs">
              <a className={s.link}>БЛОГ</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
