import React from 'react';
import Page from '../../src/components/Page';
import style from '../../src/styles/container.module.scss';
import s from '../../src/styles/components/itemCard.module.scss';

const ItemCard: React.FC = () => {

  console.log('ewfwe');

  return (
    <Page>
      <div className={s.wrapper}>
        <div className={style.container}>
          <div className={s.row}>
            <div className={s.col}>
              <div className={s.view}>
                <img src="https://mocah.org/uploads/posts/1154-strawberry__strawberry_cake_slice_image.jpg" alt=""/>
              </div>
            </div>
            <div className={s.description}>
              <h2 className={s.product_title}>Unicorn Cup Cream Cake</h2>
              <div className={s.product_price}>
                <span>$8.00 USD</span>
              </div>
              <div className={s.rating}>

              </div>
              <div className={s.summary}>
                <p className={s.text}>
                  Unicorn Cup Cream Cake A unicorn cake to add some magic to celebrations. 3 layer cake in a variety of
                  flavours – fondant and buttercream decoration. Product Details A unicorn cake to add some magic to
                  celebrations. 3 layer cake in a variety of flavours – fondant and buttercream decoration....
                </p>
              </div>
              <div className={s.buy_controls}>
                <div className={s.cart_options}>
                  <div className={s.count}>
                    <button className={s.plus}>+</button>
                    <input type="text" className={s.input} pattern='[0-9]' value='1'/>
                    <button className={s.minus}>-</button>
                  </div>
                  <button className={s.add_item}>
                    ADD TO CART
                  </button>
                </div>
                <div className={s.payment_btn}>
                  <button className={s.buy_btn}>BUY IT NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ItemCard;
