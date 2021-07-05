import Link from 'next/link';
import React from 'react';
import s from './Product.module.scss';

type ProductPropsType = {
  id: number
  imgLinkUrl?: string
  imgLinkSrc: string
  imgLinkAlt?: string
  titleLinkUrl?: string
  quickViewUrl?: string
  productLinkTitle: string
  price: number
  oldPrice?: number
}

export const Product: React.FC<ProductPropsType> = (
  {
    id,
    imgLinkUrl = '',
    imgLinkSrc,
    imgLinkAlt = 'product',
    titleLinkUrl = '',
    quickViewUrl = '',
    productLinkTitle,
    price,
    oldPrice
  }
) => {
  return (
    <div className={s.product_item_wrapper}>
      <div className={s.product_item}>
        <div className={s.prod}>
          <div className={s.product_img_wrapper}>
            <Link href={`/items/${id}`}>
              <img className={s.product_img} src={imgLinkSrc} alt={imgLinkAlt}/>
            </Link>
            <div className={s.product_action}>
              <div className={s.add_wish_list}>
                <Link href={''}>
                  <img className={s.wish_img}
                       src={'/static/image/header/like.png'}
                       alt={''}/>
                </Link>
              </div>
              <div className={s.quick_view}>
                <Link href={quickViewUrl}>
                  <img className={s.view_img}
                       src={'/static/image/header/search.svg'}
                       alt={''}/>
                </Link>
              </div>
            </div>
          </div>
          <h4 className={s.title_product}>
            <Link href={titleLinkUrl}>
              {productLinkTitle}
            </Link>
          </h4>
          <p className={s.price_product}>
            <span className={s.price}>${price}</span>
            {
              oldPrice &&
              <s className={s.price_old}>
                ${oldPrice}
              </s>
            }
          </p>
          <div className={s.add_to_cart}>
            <button className={s.add_to_cart_btn}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
