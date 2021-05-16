import React from 'react';
import s from './ProductsTable.module.scss';
import style from '../../styles/container.module.scss';
import { Headline } from '../Headline/Headline';
import { Product } from './Product/Product';
import { ProductType } from '../../domain/HomePage';

type PropsType = {
  isHeadline?: boolean
  products: ProductType[]
}

export const ProductsTable: React.FC<PropsType> = ({ isHeadline = true, products }) => (
  <div className={s.best_prices_wrapper}>
    <div className={style.container}>
      {
        isHeadline && (
          <Headline headline={'Популярное'} subHeading={'Топ популярных тортов за месяц'}/>
        )
      }
      <div className={s.best_prices_block}>
        {
          products.map((p, i) => <Product key={i}
                                          imgLinkSrc={p.img}
                                          productLinkTitle={p.title}
                                          price={p.price}
                                          oldPrice={p.oldPrice && p.oldPrice}
          />)
        }
      </div>
    </div>
  </div>
);

