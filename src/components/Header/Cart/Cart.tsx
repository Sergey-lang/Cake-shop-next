import React, { useEffect, useRef } from 'react';
import s from './Cart.module.scss';

type BurgerNavPropsType = {
  visible: boolean
  setVisible: (value: boolean) => void
}

export const Cart: React.FC<BurgerNavPropsType> = ({ visible, setVisible }) => {

  const onClickHandler = () => {
    setVisible(false);
  };
  //styles
  const Show = {
    opacity: '1',
    right: '0',
  };
  const Hide = {
    opacity: '0',
    right: '-380px',
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
    <>
      <div className={s.box_cart} style={visible ? Show : Hide} ref={wrapperRef}>
        <div className={s.relative}>
          <div className={s.mini_content}>
            <div className={s.mini_cart_head}>
              <a className={s.close_cart} href="#" onClick={onClickHandler}>
                <img className={s.close_icon}
                     src={'/static/image/header/cart-close.svg'}
                     alt="close"/>
              </a>
              <h3 className={s.title}>
                Корзина заказов
              </h3>
              <div className={s.counter}>
                <span>2</span>
              </div>
            </div>
            <div className={s.mini_cart_bottom}>
              <div className={s.prod}>
                <div className={s.product_cart}>
                  <ol className={s.cart_item}>
                    <li className={s.row}>
                      <div className={s.prod_img}>
                        <a href="#">
                          <img src={'/static/image/best_prices/20.1.jpg'}
                               alt="product"/>
                        </a>
                      </div>
                      <div className={s.prod_detail}>
                        <h3 className={s.prod_name}>
                          <a href="#">
                            Chocolate Truffle Birthday Cake - Large / Chocolate
                          </a>
                        </h3>
                        <div className={s.prod_info}>
                          <div>Кол-во : 2</div>
                          <div className={s.prod_price}>
                            <span>60.00 р.</span>
                          </div>
                        </div>
                      </div>
                      <div className={s.prod_remove}>
                        <a href="#">
                          <i/>
                        </a>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={s.sub_total}>
              <span className={s.total_title}>Всего:</span>
              <span className={s.total_price}>120.00 р.</span>
            </div>
            <div className={s.action_checkout}>
              <a className={s.action_btn} href="#">
                <span className={s.menu_title}>Заказать</span>
              </a>
              <a className={s.action_btn} href="#">
                <span className={s.menu_title}>Отменить заказ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={s.box_background} style={visible ? ShowBg : HideBg}/>
    </>
  );
};
