import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

const Page = ({ children }) =>
  (
    <>
      <Header/>
      <div className="App">
        {children}
      </div>
      <Footer/>
    </>
  );

export default Page;
