<script>
	// import Nav from '../components/Nav.svelte';
	import SocialNav from '../components/SocialNav.svelte';
	import Footer from '../components/Footer.svelte';
	import { onMount } from 'svelte';
  import CursorSticky from '../js/cursor-sticky.js';
  import CursorLink from '../js/cursor-link.js';
  import { lightOffStore } from "../store/index.js";

  let hiddeCursorInner = 'opacity: 0; visibility: hidden;';
  let hiddeCursorOuter = 'opacity: 0; visibility: hidden;';
  let hiddeCursor = 'display: none;';
  onMount(async () => {
    hiddeCursorInner = 'opacity: 1; visibility: visible';
    hiddeCursorOuter = 'opacity: 0.2; visibility: visible';
    const cursorSticky = await new CursorSticky(".circle-cursor--outer", ".circle-cursor--inner", "[data-cursor='sticky-cusor']", "[data-cursor='out-items']", ".colors");

    hiddeCursor = 'display: block;';
    const cursorLink = await new CursorLink(".arrow-cursor", ".arrow-cursor__svg", "[data-cursor-wrapper='wrapper-link']");
  });
  // export let segment;
</script>

<style>
/* cursor sticky */
.circle-cursor {
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  border-radius: 50%;
}
.circle-cursor--outer {
  width: 30px;
  height: 30px;
  border: 1px solid var(--second-color);
  z-index: 12000;
  opacity: 0.2;
}
.circle-cursor--inner {
  width: 6px;
  height: 6px;
  left: -3px;
  top: -3px;
  z-index: 11000;
  background: var(--second-color);
}
/* cursor link */
.arrow-cursor {
  width: 80px;
  height: 80px;
  position: fixed;
  left: -40px;
  top: -40px;
  z-index: 10000000;
  pointer-events: none;
  fill: var(--active-color);
  /* fill: transparent;
  stroke: var(--active-color);
  stroke-width: 6px; */
}
.arrow-cursor__svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>

{#if $lightOffStore}
<style>
:root {
  /* color */
  --main-color: #0A0A0A;
  --second-color: #FFFFFF;
  --low-dark-color: #000000;
  /* --active-color: #0000FF;
  --dark-color: #000000; */
}
</style>
{/if}
<div class="{$lightOffStore} colors">
  <!-- <Nav {segment}/> -->
  <SocialNav></SocialNav>

  <slot></slot>

  <Footer></Footer>

  <div class="arrow-cursor" style="{hiddeCursor}">
    <svg class="arrow-cursor__svg" viewBox="0 0 150 150">
      <path class="arrow-cursor__path" d="M2.9,135c20.5-21.3,54.6-41.7,89.2-39.9l0,21.8c0,2.7,1.9,3.2,4,1.1l50.3-48.2c1.5-1.5,1.5-3,0-4.3L95,16.6c-1-1-2.8-0.6-2.8,1.2l0,22.9C92.2,40.6,22.1,54.2,2.9,135z"/>
    </svg>
  </div>
  <div class="circle-cursor circle-cursor--inner" style="{hiddeCursorInner}"></div>
  <div class="circle-cursor circle-cursor--outer" style="{hiddeCursorOuter}"></div>
</div>