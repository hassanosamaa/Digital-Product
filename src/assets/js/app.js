import $ from 'jquery';
import 'bootstrap';
import "slick-carousel"
import gsap from 'gsap';
import {sec7} from "./sec7";
import {sec3} from "./sec3";
import {sec6} from "./sec6";
import {nav} from "./nav";


$(document).ready(() => {
    nav();
    sec3();
    sec6();
    sec7();
    gsap.to(".gsap-sec1-icon",{  scale: 1.5, duration: 1 ,repeat:-1,yoyo:true})
    gsap.to(".gsap-footer-icon",{  x: 7, duration: 1 ,repeat:-1,yoyo:true})
    gsap.to(".logo",{  x: 10, duration: 1 ,repeat:-1,yoyo:true})

});
