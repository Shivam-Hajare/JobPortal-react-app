import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
import { FaSistrix } from "react-icons/fa";

const Home = () => {
//for home component
const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSearch = (textToSearch) => {
        if (textToSearch.trim() === '') {
            return;
        }
        // Navigate to JobList with searchText as query parameter
        navigate(`/jobList?search=${encodeURIComponent(searchText)}`);
    }

    return (
        <>
            <div className='home-searchbar'>
                <button className='btn-search' onClick={(e) => handleSearch(searchText)}>
                    <FaSistrix />
                </button>
                <input
                    className='input-search'
                    type='text'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder='Enter to search'
                />
            </div>

            <div> <header class="banner">
                <div class="leftBannerSide">
                    <h1>Find the job that fit your life</h1>
                    <h6>A job portal is an online platform connecting job seekers and employers, offering a vast array of job listings across industries. Users can create profiles, highlight their skills, and easily search for suitable positions based on location, industry, and experience. It serves as a convenient bridge between candidates and companies, streamlining the job search process.</h6>

                </div>
                <div class="rightBannerSide">
                    <img src="/img/intro.png" alt="" srcset="" />
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
                                <img src="../img/responsive.png" alt="" />
                                <Link className='home-search-text' to={"/jobList?search=Web Design"}>
                                <span><b >Web Design</b></span>
                                </Link>
                                
                            </div>
                            <div class="browserIntem">
                                <img src="../img/illustration.png" alt="" />
                                <Link className='home-search-text' to={"/jobList?search=Graphic design"}> 
                                <span><b >Graphic design</b></span>
                                </Link>
                            </div>
                            <div class="browserIntem">
                                <img src="../img/web-development.png" alt="" />
                                <Link className='home-search-text' to={"/jobList?search=web"}>
                                <span><b>Web Development</b></span>
                                </Link>

                            </div>
                        </div>
                        <div class="secondRow">
                            <div class="browserIntem">
                                <img src="../img/hiring.png" alt="" />
                                <Link className='home-search-text' to={"/jobList?search=human"}>
                                <span><b >Human Resource</b></span>
                                </Link>
                            </div>

                            <div class="browserIntem">
                                <img src="../img/technical-support.png" alt="" />
                                <Link className='home-search-text' to={"/jobList?search=support"}>

                                <span><b >Support</b></span>
                                </Link>
                            </div>
                            <div class="browserIntem">
                                <img src="../img/desktop.png" alt="" />
                                <Link className='home-search-text' to={"/jobList?search=andriod"}>
                                <span><b >Android Development</b></span>
                                </Link>
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
                                <img src="../img/profile.png" alt="" />
                                <h4>Create an Account</h4>
                            </div>
                        </Link>
                        <Link href="">
                            <div class="middleContainerTopitem">
                                <img src="../img/search (1).png" alt="" />
                                <h4>Search Jobs</h4>
                            </div>
                        </Link>
                        <Link href="/postJob">
                            <div class="middleContainerTopitem">
                                <img src="../img/posting.png" alt="" />
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
                        <a href=""><img src="../img/logo/004-facebook.png" alt="Facebook" /></a>
                        <a href=""><img src="../img/logo/002-twitter.png" alt="Twitter" /></a>
                        <a href=""><img src="../img/logo/003-linkedin.png" alt="LinkedIn" /></a>
                        <a href=""><img src="../img/logo/001-google-plus.png" alt="Google" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home