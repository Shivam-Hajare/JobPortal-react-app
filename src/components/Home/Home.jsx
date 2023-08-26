import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div> <header class="banner">
    <div class="leftBannerSide">
        <h1>Find the job that fit your life</h1>
        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam et, beatae rerum omnis veritatis sunt reiciendis eaque exercitationem? Veniam, soluta officiis. Perferendis voluptatem corporis dolorum sapiente voluptates. Vero, eius voluptates!tempore aspernatur porro.</h6>

    </div>
    <div class="rightBannerSide">
        <img src="/img/intro.png" alt="" srcset=""/>
    </div>
</header>

<section class="browseSection">
    <div class="browseSectionTop">
        <h2>Browse Categories</h2>
        <p>Most categories of portal. sorted by popularity</p>
    </div>
    <div class="browseSectiondown">
        <div class="firstRow">
            <div class="browserIntem">
                <img src="../img/responsive.png" alt=""/>
                <span><b >Web Design</b></span>
            </div>
            <div class="browserIntem">
                <img src="../img/illustration.png" alt=""/>
                <span><b >Graphic design</b></span>
            </div>
            <div class="browserIntem">
                <img src="../img/web-development.png" alt=""/>
                <span><b>Web Development</b></span>
            </div>
        </div>
        <div class="secondRow">
            <div class="browserIntem">
                <img src="../img/hiring.png" alt=""/>
                <span><b >Human Resource</b></span>
            </div>

            <div class="browserIntem">
                <img src="../img/technical-support.png" alt=""/>
                <span><b >Support</b></span>
            </div>
            <div class="browserIntem">
                <img src="../img/desktop.png" alt=""/>
                <span><b >Android Development</b></span>
            </div>

        </div>
    </div>
</section>

<section class="middleContainer">
    <div class="middleContainerTop">
        <h2>How It Works?</h2>
        <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit ellente-sque dignissim quam et
            metus effci turac fr.ng.lla lorem facilrsis.</p>
    </div>
    <div class="middleContainerBottom">
    <Link href="/register">
        <div class="middleContainerTopitem">
            <img src="../img/profile.png" alt=""/>
            <h4>Create an Account</h4>
        </div>
    </Link>
    <Link href="">
        <div class="middleContainerTopitem">
            <img src="../img/search (1).png" alt=""/>
            <h4>Search Jobs</h4>
        </div>
    </Link>
    <Link href="/postJob">
        <div class="middleContainerTopitem">
            <img src="../img/posting.png" alt=""/>
            <h4>Post a job</h4>
        </div>
    </Link>
</div>

</section>

<div class="footer">
    <div class="footer-links">
      <a href="#">About Us</a>
      <a href="#">Support</a>
      <a href="#">Contact</a>
    </div>
    <div class="social-icons">
      <a href=""><img src="../img/logo/004-facebook.png" alt="Facebook"/></a>
      <a href=""><img src="../img/logo/002-twitter.png" alt="Twitter"/></a>
      <a href=""><img src="../img/logo/003-linkedin.png" alt="LinkedIn"/></a>
      <a href=""><img src="../img/logo/001-google-plus.png" alt="Google"/></a>
    </div>
  </div>
  </div>
  )
}

export default Home