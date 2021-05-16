import React from 'react';
import s from './Category.module.scss';
import style from '../../styles/container.module.scss';
import { Item } from './Item/Item';
import { Headline } from '../Headline/Headline';

const categories = [
  {
    imgSrc: '/static/image/category/collection2.1.jpg',
    itemTitle: 'Бисквитные',
  },
  {
    imgSrc: '/static/image/category/collection2.2.jpg',
    itemTitle: 'Вафельные',
  },
  {
    imgSrc: '/static/image/category/collection2.3.jpg',
    itemTitle: 'Песочные',
  },
  {
    imgSrc: '/static/image/category/collection2.4.jpg',
    itemTitle: 'Творожные',
  },
  {
    imgSrc: '/static/image/category/collection2.5.jpg',
    itemTitle: 'Торты с глазурью',
  },
  {
    imgSrc: '/static/image/category/collection2.6.jpg',
    itemTitle: 'Торты с кулинарной мастикой',
  },
];

export const Category: React.FC = () => {
  return (
    <div className={s.category_wrapper}>
      <div className={style.container}>
        <Headline headline={'Категории'}/>
        <div className={s.category_items}>
          {
            categories && categories
              .map((category) => (
                <Item imgSrc={category.imgSrc}
                      itemTitle={category.itemTitle}/>
              ))
          }
        </div>
      </div>
    </div>
  );
};
