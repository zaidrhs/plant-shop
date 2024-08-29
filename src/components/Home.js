import "../components/assets/style/Home.css";
import Frame from "../components/assets/img/Frame 3.png";
import products1 from "./assets/img/Frame 7.png";
import products2 from "./assets/img/Frame 8.png";
import products3 from "./assets/img/Frame 9.jpg";
import group1 from "./assets/img/Group 1 (1).png";
import group2 from "./assets/img/Group 1 (2).png";
import group3 from "./assets/img/Group 1.png";
import Categories1 from "./assets/img/Frame 36.png";
import Categories2 from "./assets/img/Frame 37.png";
import Categories3 from "./assets/img/Frame 38.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination  } from 'swiper/modules';
import Person1 from './assets/img/unsplash_5aGUyCW_PJw-removebg-preview.png'
import Person2 from './assets/img/unsplash_O3ymvT7Wf9U-removebg-preview.png'
import '../components/assets/style/all.min.css'
import Qout from './assets/img/Vector.png'
import { Link } from 'react-router-dom'; 

function Home() {
    return (
        <div>
            
        <div className="backdround1">
            <img src={Frame} alt="backdround" />
        </div>
        <div className="contenar">
            <div>
            <h2 className="Best-Selling">Best Selling Plants</h2>
            <p className="Easiest">
                Easiest way to healthy life by buying your favorite plants{" "}
            </p>
            <Link to="/Products" style={{ textDecoration: 'none', color: 'inherit' }}><button className="bnt-green">See more <i className="fa-solid fa-arrow-right fa-lg"></i></button></Link>         
            </div>
            <div>
            <img className="img-products" src={products1} alt="products" />
            <img className="img-products" src={products2} alt="products" />
            <img className="img-products" src={products3} alt="products" />
            </div>
        </div>
        <div className="Nameproducts">
            <h3>Natural Plants</h3>
            <h3>Artificial Plants</h3>
            <h3>Artificial Plants</h3>
        </div>
        <div className="price-products">
            <h3>₱ 1,400.00</h3>
            <h3>₱ 900.00</h3>
            <h3>₱ 3,500.00</h3>
        </div>
        <div className="about">
            <div className="titel">
            <h2>About Us</h2>
            </div>
            <div className="text">
            <p>Order now and appreciate the beauty of nature</p>
            </div>
            <div className="groups">
            <div className="group1">
                <img src={group1} alt="group" />
                <h2>Large Assortment</h2>
                <p>
                we offer many different types of products with fewer variations in
                each category.
                </p>
            </div>
            <div className="group2">
                <img src={group2} alt="group" />
                <h2>Fast & Free Shipping</h2>
                <p>
                4-day or less delivery time, free shipping and an expedited
                delivery option.
                </p>
            </div>
            <div className="group3">
                <img src={group3} alt="group" />
                <h2>24/7 Support</h2>
                <p>
                answers to any business related inquiry 24/7 and in real-time.
                </p>
            </div>
            </div>
        </div>
        <div className="Categories">
            <div className="titel">
            <h2>Categories</h2>
            </div>
            <div className="text">
            <p>Find what you are looking for</p>
            </div>
            <div className="backdround2">
                <div className="Categories-body">
                <div>
                    <img
                    className="Categories-img1"
                    src={Categories1}
                    alt="Categories"
                    />
                    <h3>Natural Plants</h3>
                </div>
                <div>
                    <img
                    className="Categories-img2"
                    src={Categories2}
                    alt="Categories"
                    />
                    <h3 className="Categories-titel">Plant Accessories</h3>
                    <p className="Categories-titel-p">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="bnt-white">Explore <i class="fa-solid fa-arrow-right fa-lg"></i></button>
                </div>
                <div>
                    <img
                    className="Categories-img3"
                    src={Categories3}
                    alt="Categories"
                    />
                    <h3>Artificial Plants</h3>
                </div>
                </div>
            </div>
            
        </div>
        <div className="customers">
            <div>
            <h1 className="customers-titel">
                What customers say about GREEMIND?
            </h1>
            <div className="Swiper">
            <Swiper
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            slidesPerView={2} 
            spaceBetween={10} 
        >
            <SwiperSlide>
                <div className="comen" style={{ padding: '20px', textAlign: 'center' }}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                <img 
                    src={Person1}
                    alt="Person" 
                    className="person"
                />
                <img 
                src={Qout}
                className="Qout"
                alt="Qout"
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className="comen" style={{ padding: '20px', textAlign: 'center' }}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                
                <img 
                    src={Person2}
                    alt="Person" 
                    className="person"
                />
                <img 
                src={Qout}
                className="Qout"
                alt="Qout"
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className="comen" style={{ padding: '20px', textAlign: 'center' }}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                <img 
                    src={Person1}
                    alt="Person" 
                    className="person"
                />
                <img 
                src={Qout}
                className="Qout"
                alt="Qout"
                />
            </SwiperSlide>
            <SwiperSlide>
                <div className="comen" style={{ padding: '20px', textAlign: 'center' }}>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</div>
                <img 
                    src={Person2}
                    alt="Person" 
                    className="person"
                />
                <img 
                src={Qout}
                className="Qout"
                alt="Qout"
                />
            </SwiperSlide>
            {}
        </Swiper>
    </div>
            </div>
        </div>
        <div className="footer">
            <div className="footer__container">
            <div className="logo-items">
            <h2>GREENMIND </h2>
            <p>We help you find your dream plant</p>
            <div className="icon">
            <i class="fa-brands fa-facebook-f fa-lg"></i>
            <i class="fa-brands fa-square-instagram fa-lg"></i>
            <i class="fa-brands fa-twitter fa-lg"></i>
            </div>
            <div className="footer-text">
            <h3>2023 all Right Reserved Term of use GREENMIND</h3>
            </div>

            </div>
            <div className="footer-table">
            <table >
        <thead>
            <tr className="footer-table-row1">
                <th>Information</th>
                <th>Company</th>
                <th>Contact</th>
            </tr>
        </thead>
        <tbody>
            <tr className="footer-table-row2">
                <td>About</td>
                <td>Community</td>
                <td>Getting Started</td>
            </tr>
            <tr className="footer-table-row3">
                <td>Product</td>
                <td>Career</td>
                <td>Pricing</td>
            </tr>
            <tr className="footer-table-row4">
                <td>Blog</td>
                <td>Our story</td>
                <td>Resources</td>
            </tr>
        </tbody>
    </table>
            </div>
            
            </div>


        </div>
        </div>
    );
}
export default Home;

