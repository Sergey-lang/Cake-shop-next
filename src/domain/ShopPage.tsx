import React from 'react';
import { ProductType } from './HomePage';
import { CategoryHead } from '../components/CategoryHead/CategoryHead';
import { ProductsTable } from '../components/ProductsTable/ProductsTable';
import Page from '../components/Page';
import { useRouter } from 'next/router';

export default function ShopPage () {
  const router = useRouter();
  const products: ProductType[] = [
    {
      img: '/static/image/best_prices/19.1.jpg',
      title: 'Triple Chocolate Fudge Party Cupcake',
      price: 20,
    },
    {
      img: '/static/image/best_prices/18.2.jpg',
      title: 'Cookies & Cream Cheesecake',
      price: 50,
    },
    {
      img: '/static/image/best_prices/17.1.jpg',
      title: 'Nut Buster Cake',
      price: 65,
    },
    {
      img: '/static/image/best_prices/20.1.jpg',
      title: 'Chocolate Truffle Birthday Cake',
      price: 25,
      oldPrice: 40,
    },
    {
      img: '/static/image/best_prices/19.1.jpg',
      title: 'Triple Chocolate Fudge Party Cupcake',
      price: 20,
    },
    {
      img: '/static/image/best_prices/20.1.jpg',
      title: 'Cookies & Cream Cheesecake',
      price: 50,
    },
    {
      img: '/static/image/best_prices/17.1.jpg',
      title: 'Nut Buster Cake',
      price: 65,
    },
    {
      img: '/static/image/best_prices/18.2.jpg',
      title: 'Cookies & Cream Cheesecake',
      price: 50,
    },
  ];
  return (
    <Page>
      <CategoryHead/>

      <ProductsTable isHeadline={false} products={products}/>
    </Page>
  );
}
