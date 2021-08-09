import { Link } from "react-router-dom";
import g1 from "../img/g1.jpg";
import g2 from "../img/g2.jpg";
import g3 from "../img/g3.jpg";
import g4 from "../img/g4.jpg";
import g5 from "../img/g5.jpg";
import g6 from "../img/g6.jpg";
import imga1 from "../img/imga1.jpg";
import img33 from "../img/img33.jpg";

const About = () => {
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
                        <li class="nav-item active">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/Product">Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="jumbotron jumbotron-fluid">
                <div class="container mb-2">
                    <h1 class="display-4">About Us </h1>
                    <p class="lead">“Crochet Gives Me An Inner Peace That I Treasure Each & Every Day”</p>
                </div>
            </div>
            <div class="container my-4 mb-2">

                <div class="row featurette justify-content-center align-items-center">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">Once You Start Pulling Loops <span class="text-muted">Through Loops, Why Evah Stop?</span></h2>
                        <p class="lead">Crochet Is An Accessible Art That Comes With A License To Be Prolific</p>
                    </div>
                    <div class="col-md-5">
                        <img src={imga1} class="img-fluid"/>

                    </div>
                </div>
                <div class="row featurette justify-content-center align-items-center">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">You Can Crochet With Any Fine, Flexible, Continuous Material That You Can Wrap Around A Crochet Hook.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img src={img33} class="img-fluid"/>

                    </div>
                </div>
          
            <section>
                <div class="container-fluid"></div>
                <h1 class="text-center pt-5">Gallery</h1>
                <hr class="w-auto mx auto pt-5" />
                <div class="row">
                    <div class="col-lg-4 col-md-2 col-12 mb-4">
                        <img src={g1} className="img-fluid" />
                    </div>
                    <div class="col-lg-4 col-md-2 col-12 mb-4">
                        <img src={g2} class="img-fluid" />
                    </div>
                    <div class="col-lg-4 col-md-2 col-12 mb-4">
                        <img src={g3} class="img-fluid" />
                    </div>
                    <div class="col-lg-4 col-md-2 col-12 mb-4">
                        <img src={g4} class="img-fluid" />
                    </div>
                    <div class="col-lg-4 col-md-2 col-12 mb-4">
                        <img src={g5} class="img-fluid" />
                    </div>
                    <div class="col-lg-4 col-md-2 col-12 mb-4">
                        <img src={g6} class="img-fluid" />
                    </div>
                </div>
            </section>
            <section>
                <section class="bg-dark text-center text-white py-2 mb-3 ">
                    <h5>© Crochet Craft 2021 </h5>
                </section>
            </section>
            </div>
        </div>
    )
}
export default About;