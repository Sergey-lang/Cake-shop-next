import { Slider } from '../components/Slider/Slider';
import { Category } from '../components/Category/Category';
import { ProductsTable } from '../components/ProductsTable/ProductsTable';
import { Gallery } from '../components/Gallery/Gallery';
import Page from '../components/Page';
import Head from 'next/head';

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
export type ProductType = {
  img: string
  title: string
  price: number
  oldPrice?: number
}
export default function HomePage() {

  return (
    <Page>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Cake shop: home made cake</title>
      </Head>
      <Slider/>
      <ProductsTable products={products}/>
      <Category/>
      <Gallery/>
    </Page>
  );
}
