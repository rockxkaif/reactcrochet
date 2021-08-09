import { Link } from "react-router-dom";
import mob2 from "../img/mob2.jpg";
import bg3 from "../img/bg3.jpg";
import mob3 from "../img/mob3.jpg";
import mm3 from "../img/mm3.jpg";
import m4 from "../img/m4.jfif";
import m3 from "../img/m3.jpg";
import h1 from "../img/h1.jfif";
import h2 from "../img/h2.jfif";
import h4 from "../img/h4.jpg";
import hb2 from "../img/hb2.jfif";
import c1 from "../img/c1.jpg";
import r1 from "../img/r1.jfif";
import s1 from "../img/s1.jfif";


const Product = () => {
    const stylee = {
        width: '18rem'
    }
   
  
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
                <a class="navbar-brand" href="#">iCrochet</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li class="nav-item active">
                            <Link className="nav-link" to="/Product">Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="container">
                <h1 class="text-center pt-3">Products</h1>
                <hr class="w-auto mx-auto pt-2" />
             <div  class="container pt-5 mb-3 s" src={bg3} >
                    <div class="row">
                        <div class="col-lg-4 col-md-2 col-8 pt-5">
                            <div class="card" style={stylee}>
                                <img src={mob2} class="card-img-top pt-4" />
                                <div class="card-body">
                                    <div class="hola">
                                        <h4 class="card-title">Mobile Pouch</h4>
                                        <div class="rating">
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star"></i>
                                            <i class="bx bxs-star"></i>
                                        </div>
                                        <h6 class="card-title">Price 150</h6>
                                        <p class="card-text">Styish Handmade Mobile Pouch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">
                            <div class="card" style={stylee}>
                                <img src={mob3} class="card-img-top pt-4" />
                                <div class="card-body">
                                    <h4 class="card-title">Mobile Pouch (Blue) </h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bx-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 150</h6>
                                    <p class="card-text">Styish Handmade Mobile Pouch.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">

                            <div class="card" style={stylee}>
                                <img src={mm3} class="card-img-top pt-4" />
                                <div class="card-body" >
                                    <h4 class="card-title">Mobile Cover</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bx-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 100</h6>
                                    <p class="card-text">We make mobile cover with love </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">
                            <div class="card" style={stylee}>
                                <img src={m4} class="card-img-top pt-4" />
                                <div class="card-body" >

                                    <h4 class="card-title">Mobile Cover</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bx-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 100</h6>
                                    <p class="card-text">We make mobile cover with love </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">
                            <div class="card" style={stylee}>
                                <img src={m3} class="card-img-top pt-4" />
                                <div class="card-body" >
                                    <h4 class="card-title">Mobile Cover</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 120</h6>
                                    <p class="card-text">We make mobile cover with love </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8  pt-5">

                            <div class="card" style={stylee}>
                                <img src={h1} class="card-img-top pt-4" />
                                <div class="card-body" >
                                    <h4 class="card-title">Hang Bag</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bx-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 330</h6>
                                    <p class="card-text"> Stylish Bag Handmade </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">
                            <div class="card" style={stylee}>

                                <img src={h2} class="card-img-top pt-4" />
                                <div class="card-body" >
                                    <h4 class="card-title">Hand Bag</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 300</h6>
                                    <p class="card-text">PurpleCombo Stylish Bag </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">
                            <div class="card" style={stylee}>

                                <img src={h4} class="card-img-top pt-4" />
                                <div class="card-body" >
                                    <h4 class="card-title">Hand Bag</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bx-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 280</h6>
                                    <p class="card-text">Stylish Bag </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">

                            <div class="card" style={stylee}>
                                <img src={hb2} class="card-img-top pt-4" />
                                <div class="card-body" >
                                    <h4 class="card-title">Hand Bag</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 330</h6>
                                    <p class="card-text">Grey & White Combo Stylish Bag </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5 mb-4">

                            <div class="card" style={stylee}>
                                <img src={c1} class="card-img-top pt-4" />
                                <div class="card-body">
                                    <h4 class="card-title">Crochet Cap</h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bx-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 180</h6>
                                    <p class="card-text">Stylish cap with muti line complex</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5">
                            <div class="card" style={stylee}>

                                <img src={r1} class="card-img-top pt-4" />
                                <div class="card-body">
                                    <h4 class="card-title">Round Pouch </h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                    </div>
                                    <h6 class="card-title">Price 100</h6>
                                    <p class="card-text">Stylish cap with muti line complex</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-2 col-8 pt-5 mb-4">
                            <div class="card" style={stylee}>

                                <img src={s1} class="card-img-top pt-4" />
                                <div class="card-body">
                                    <h4 class="card-title">Stylish Bag </h4>
                                    <div class="rating">
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bxs-star"></i>
                                        <i class="bx bx-star"></i>
                                    </div>
                                    <p class="card-text">Stylish Bag made with love</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
          
            
            <section>
                <section class="bg-dark text-center text-white py-2 mb-3 ">
                    <h5>© Crochet Craft 2021 </h5>
                </section>
            </section>
        </div >


    )
}
export default Product;