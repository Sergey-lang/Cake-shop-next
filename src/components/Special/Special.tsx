import React from 'react';
import s from './Special.module.scss';
import style from '../../styles/container.module.scss';
import { BannerItem } from './Item/BannerItem';

export const Special: React.FC = () => {
  return (
    <div className={s.special_wrapper}>
      <div className={style.container}>
        <div className={s.special_blocks}>
          <div className={s.left_block}>
            <BannerItem bannerImgSrc={'/static/image/special/banner7.1.jpg'}
                        bannerTitle={'Торт "Сюрприз"'}
                        bannerLinkTitle={'Смотреть коллекцию'}/>
            <BannerItem bannerImgSrc={'/static/image/special/banner7.2.jpg'}
                        bannerTitle={'Набор кексов'}
                        bannerLinkTitle={'Смотреть коллекцию'}/>
          </div>
          <div className={s.right_block}>
            <BannerItem bannerImgSrc={'/static/image/special/banner7.3.jpg'}
                        bannerTitle={'Торт мороженное'}
                        bannerLinkTitle={'Смотреть коллекцию'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
