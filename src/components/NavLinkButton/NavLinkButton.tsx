import Link from 'next/link';
import React from 'react';
import s from './NavLinkButton.module.scss';

type NavLinkButtonPropsType = {
  titleLinkUrl?: string
  linkTitle: string
  className?: string
}

export const NavLinkButton: React.FC<NavLinkButtonPropsType> = (
  {
    titleLinkUrl = '',
    linkTitle,
    className
  }
) => {

  const finalStyle = className ? `${s.view_link} ${className}` : s.view_link;

  return (
    <Link href={titleLinkUrl}>
      <a className={finalStyle} >
        {linkTitle}
      </a>
    </Link>
  );
};
