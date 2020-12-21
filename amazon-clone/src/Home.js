import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg" alt=""/>
                 <div className="home__row">
                 
                    <Product 
                    id="134123"
                    title="The lean startup"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg" 
                    rating={4}/>

                    <Product 
                    id="63454"
                    title="Donner DAG-1B Black Beginner Acoustic Guitar Full Size, 41"
                    price={159.99}
                    image="https://m.media-amazon.com/images/I/71ASCt4awmL._AC_UL320_.jpg"
                    rating={3}
                     />

                 </div>

                 <div className="home__row">
                 
                 
                 <Product id="56756"
                    title="Stone Lain Coupe Dinnerware Set, Service For 4"
                    price={59.99}
                    image="https://m.media-amazon.com/images/I/81uA+IVnJcL._AC_UL320_.jpg"
                    rating={5} />

                    <Product id="6856"
                    title="AmazonBasics Stainless Steel Dinner Forks with Pearled Edge"
                    price={12.49}
                    image="https://m.media-amazon.com/images/I/71N8GqkEaeL._AC_UL320_.jpg"
                    rating={3} />

                    <Product id="462562"
                    title="Houzer NVS-2600 Novus Sliding Dual Platform Workstation Kitchen Sink"
                    price={400.03}
                    image="https://m.media-amazon.com/images/I/71L8yzEaMuL._AC_UL320_.jpg"
                    rating={4} />
                    
                 </div>
                 <div className="home__row">
                 <Product
                 id="394934"
                 title="Insignia NS-32DF310NA19 32-inch Smart HD TV - Fire TV Edition"
                 price={127}
                 image="https://m.media-amazon.com/images/I/41VCva3xinL._AC_UY218_.jpg"
                 rating={2} />
                 </div>
            </div>
        </div>
    )
}

export default Home
