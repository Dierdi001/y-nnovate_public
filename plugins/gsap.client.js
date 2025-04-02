import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default defineNuxtPlugin(() => {
    if(process.client){
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    }
})