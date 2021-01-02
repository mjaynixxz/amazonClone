import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg'
          alt='BodyImage'
          className='home__image'
        />
        <div className='home__row'>
          <Product
            id={11}
            title='Product 1'
            image='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309D07D7CEBFESD._V535730079_.jpg'
            price={222229.9}
            rating={4}
          />
          <Product
            id={2}
            title='Product 2'
            image='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309B35A28833317._V535730076_.jpg'
            price={2999.99}
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id={3}
            title='Product 2'
            image='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309B35A28833317._V535730076_.jpg'
            price={191111.99}
            rating={3}
          />
          <Product
            id={4}
            title='Product 2'
            image='https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-2309B35A28833317._V535730076_.jpg'
            price={1129.99}
            rating={3}
          />
          <Product
            id={5}
            title='Product 2'
            image='https://images-na.ssl-images-amazon.com/images/I/41iAIlBjBjL.jpg'
            price={144449.99}
            rating={3}
          />
        </div>
        <div className='home__row'>
          <Product
            id={6}
            title='Product 2'
            image='https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg'
            price={100229.99}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
