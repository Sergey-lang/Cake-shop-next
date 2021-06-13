import React, { useEffect, useRef } from 'react';
import s from './BurgerNav.module.scss';
import Link from 'next/link';

type BurgerNavPropsType = {
  visible: boolean
  setVisible: (value: boolean) => void
}

export const BurgerNav: React.FC<BurgerNavPropsType> = ({ visible, setVisible }) => {

  const onClickHandler = () => {
    setVisible(false);
  };
  //styles
  const Show = {
    opacity: '1',
    left: '0',

  };
  const Hide = {
    opacity: '0',
    left: '-320px',
  };
  const HideBg = {
    opacity: '0',
    display: 'none'
  };
  const ShowBg = {
    opacity: '1',
    display: 'block'
  };

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (visible) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setVisible(false);
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, visible]);

  return (
    <React.Fragment>
      <div className={s.box_menu} style={visible ? Show : Hide} ref={wrapperRef}>
        <div className={s.tab_context_menu}>
          <div className={s.menu_mobile}>
            <li className={s.top_tab}>
              <a className={s.tab_link_active} href="#">
                           <span className={s.menu_icon}>
                               <span/>
                               <span/>
                               <span/>
                           </span>
                <span className={s.menu_title}>Меню</span>
              </a>
            </li>
          </div>
          <div className={s.tab_context}>
            <div className={s.tab_panel}>
              <div className={s.menu_horizon_list}>
                <a className={s.list_menu_link} href="#">Главная</a>
              </div>
              <div className={s.menu_horizon_list}>
                <a className={s.list_menu_link} href="#">Магазин</a>
              </div>
              <div className={s.menu_horizon_list}>
                <a className={s.list_menu_link} href="#">Блог</a>
              </div>
            </div>
          </div>
          <div className={s.close_menu_mobile} onClick={onClickHandler}>
            <i></i>
            ЗАКРЫТЬ
          </div>
        </div>
      </div>
      <div className={s.box_background} style={visible ? ShowBg : HideBg}/>
    </React.Fragment>
  );
};
