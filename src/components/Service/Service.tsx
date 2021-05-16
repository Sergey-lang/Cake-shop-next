import React from 'react';
import s from './Service.module.scss';
import style from '../../styles/container.module.scss';
import { ServiceItem } from './ServiceItem/ServiceItem';

export const Service: React.FC = () => {

  return (
    <div className={s.service_wrapper}>
      <div className={style.container}>
        <div className={s.service_row}>
          <ServiceItem iconSrc={'/static/image/service/cake-80.png'}
                       title={'К свадьбе'}
                       subTitle={'Looking for a unique cake and delicious pastries for your wedding party? We\'ll bake you whatever you desire.'}
                       linkTitle={'Заказать тут'}/>
          <ServiceItem iconSrc={'/static/image/service/birthday-80.png'}
                       title={'На день рождение'}
                       subTitle={'We offer a range of delicious pastries which will be the perfect accompaniment to any special occasion.'}
                       linkTitle={'Заказать тут'}/>
          <ServiceItem iconSrc={'/static/image/service/cake-80.png'}
                       title={'Для оффиса'}
                       subTitle={'A limited selection of our celebration cookies, prepared fresh daily, are available for immediate pickup at all of our locations.'}
                       linkTitle={'Заказать тут'}/>
        </div>
      </div>
    </div>
  );
};
