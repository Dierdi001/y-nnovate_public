import { defineNuxtPlugin } from "#app";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    nuxtApp.provide("gsap", gsap);
    console.log("GSAP plugin loaded");
  }
});
