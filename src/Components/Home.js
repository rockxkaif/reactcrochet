import "./Home.css";
import slider2 from '../img/slider2.jpg';
import sliderr2 from '../img//sliderr2.jpg';
import slider1 from '../img/slider1.jpg';
import imga1 from '../img/imga1.jpg';
import { Link } from "react-router-dom";

const Home = () => {
    const useStyle = {
        background: '#2c3e50'
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
                        <li class="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/product">Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Carausel */}
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade10" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner mb-4">
                    <div class="carousel-item active ">
                        <img src={slider2} className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Elegant Crochet</h5>
                            <p>Once You Start Pulling Loops Through Loops Why Evah Stop?</p>
                        </div>
                    </div>
                    <div class="carousel-item">

                        <img src={sliderr2} className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h3>Crochet</h3>
                            <p>Crochet Has Morphed Has From Homespun To Hot</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={slider1} className="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Be Crafte</h5>
                            <p>Crocheting keeps me from unraveling</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="pb-4 mb-2 text-white pt-4 text-center" style={useStyle}>
                <h1 class="ml10">
                    <span class="text-wrapper">
                        <span class="letters">Welcome to GAZAL'S Apsara Qureshi Work!</span>
                    </span>
                </h1>
            </div>


            <div class="container-fluid">
                <h1 class="text-center pt-5">About Us</h1>
                <hr class="w-25 mx-auto pt-5" />
                <div class="row mb-5">
                    <div class="col-lg-6 col-md-6 col-12">
                        <img src={imga1} class="img-fluid" />
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        <h3>!!! Keep Calm & Craft On !!!</h3>
                        <hr />
                        <p>Work done by you with unconditional love and pure devotion goes straight in the category of
                            divine and immortal craft</p>
                        <p>We've serve you our best what you need </p>
                        <p>Art is everywhere, except it has to pass through a creative mind.</p>
                        <button class="btn bg-danger text-white">Join Now</button>
                    </div>
                </div>
            </div>

            <section>
                <section class="bg-primary text-center text-white py-3 mb-4  ">
                    <h2>For Any Queries Or Concerns </h2>
                    <h4>Let's Get in Touch! </h4>
                    <a href="https://www.instagram.com/gazalsapsara/" class="fa fa-instagram"></a>
                </section>
            </section>

            <div>
                <div class="containers mb-4">
                    <h1 class="text-center pt-5">Contact Us</h1>
                    <hr class="w-25 mx-auto pt-5" />
                    <div class="w-50 mx-auto">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Your Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    placeholder="Enter your name" />
                                <small id="emailHelp"></small>
                            </div>
                            <div class=" form-group">
                                <label for="exampleInputPassword1">Email</label>
                                <input type="email" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Mobile Number</label>
                                <input type="number" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea class="form-control"></textarea>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <section>
                <section class="bg-dark text-center text-white py-2 mb-3 ">
                    <h4>Developed By Kaif Akhtar </h4>
                    <a href="https://www.instagram.com/rockxkaif/" class="fa fa-instagram"></a>
                </section>
            </section>
        </div>
    )
}
export default Home;