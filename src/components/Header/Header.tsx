import React, { useEffect, useState } from 'react';
import s from './Header.module.scss';
import { MainNav } from './MainNav/MainNav';
import { BurgerNav } from './BurgerNav/BurgerNav';
import { Cart } from './Cart/Cart';
import Link from 'next/link';
import clsx from 'clsx';

export const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const onClickMenuHandler = () => {
    setMenuVisible(true);
  };

  const onClickCartHandler = () => {
    setCartVisible(true);
  };

  const listenScrollEvent = (event) => {
    if (window.scrollY < 80) {
      return setSticky(false);
    } else if (window.scrollY > 80) {
      return setSticky(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={clsx(s.header_wrapper, isSticky && s.scroll  )}>
      <div className={s.container}>
        <div className={s.header}>
          <a className={s.tab_link} href="#" onClick={onClickMenuHandler}>
                           <span className={s.menu_icon}>
                               <span/>
                               <span/>
                               <span/>
                           </span>
          </a>
          <div className={s.logo}>
            <Link href="/">
              <a className={s.logo_link}>
                <img className={s.logo_png}
                     src={'/static/image/header/logo.png'}
                     alt="logo"/>
              </a>
            </Link>
          </div>
          <MainNav/>
          <BurgerNav visible={menuVisible} setVisible={setMenuVisible}/>
          <Cart visible={cartVisible} setVisible={setCartVisible}/>
          <div className={s.cart_login}>
            <ul className={s.list}>
              <li className={s.list_item}>
                <Link href={''}>
                  <img src={'/static/image/header/search.svg'}
                       alt="search"/>
                </Link>
              </li>
              <li className={s.list_item}>
                <Link href={''}>
                  <img src={'/static/image/header/user.png'}
                       alt="profile"/>
                </Link>
              </li>
              <li className={s.list_item}>
                <Link href={''}>
                  <img src={'/static/image/header/like.png'}
                       alt="like"/>
                </Link>
              </li>
              <li className={s.list_item} onClick={onClickCartHandler}>
                <a href="#">
                  <img src={'/static/image/header/cart.png'}
                       alt="cart"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
