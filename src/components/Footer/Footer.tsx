import React from 'react';
import s from './Footer.module.scss';
import style from '../../styles/container.module.scss';
import { Info } from './Info/Info';
import { FooterLinks } from './FooterLinks/FooterLinks';

export const Footer: React.FC = () => {

  const firstBlock = {
    title: 'Customer Care',
    navLinks: [
      { url: '', title: 'Pagination' },
      { url: '', title: 'Terms & Conditions' },
      { url: '', title: 'Contact' },
      { url: '', title: 'Accessories' },
      { url: '', title: 'Term of use' },
    ],
  };
  const secondBlock = {
    title: 'Партнёры',
    navLinks: [
      { url: '', title: 'About Us' },
      { url: '', title: 'Privacy Policy' },
      { url: '', title: 'Terms & Conditions' },
      { url: '', title: 'Products Return' },
      { url: '', title: 'Wholesale Policy' },
    ],
  };
  const thirdBlock = {
    title: 'Обо мне',
    navLinks: [
      { url: '', title: 'Help Center' },
      { url: '', title: 'Address Store' },
      { url: '', title: 'Privacy Policy' },
      { url: '', title: 'Receivers & Amplifiers' },
      { url: '', title: 'Bakezy' },
    ],
  };

  return (
    <div className={s.footer_wrapper}>
      <div className={style.container}>
        <div className={s.footer}>
          <Info/>
          <FooterLinks settings={firstBlock}/>
          <FooterLinks settings={secondBlock}/>
          <FooterLinks settings={thirdBlock}/>
        </div>
      </div>
      <div className={s.copyright}>
        <div className={style.container}>
          <div className={s.about}>
            <p>
              © Copyright 2021 | CakeStore By&nbsp;
              <a href={'https://www.linkedin.com/in/sergey-kuharyonok-702b111b7/'}>Sergey K</a>
              . Powered by React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
