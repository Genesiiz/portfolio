<script>
  import {onMount} from 'svelte';
  import TweenLite from 'gsap';
  import MouseDown from './svg/MouseDown.svelte';
  import Switch from './Switch.svelte';

  let Back = null;
  export let title = ["Maxime", "Fullstack", "developer"];

  onMount(() => {
    Back = window;
  });
  function scrollToNextSection () {
    if (!Back) return;
    const hero = document.getElementById('hero');
    const scrollToThis = hero.offsetHeight - Back.pageYOffset;
    window.scrollBy({
      top: scrollToThis,
      left: 0,
      behavior: 'smooth'
    });
  }
</script>

<style>
header {
  display: flex;
  position: relative;
  box-sizing: border-box;
  padding: 2rem;
  padding-bottom: 90px;
  min-height: 93vh;
}
span {
  color: transparent;
  -webkit-text-stroke: 1px var(--second-color);
}
button {
  /* position */
  display: block;
  position: absolute;
  left: 50%;
  bottom: 75px;
  transform: translateX(-50%) translateY(100%);
  /* style */
  width: 72px;
  height: 72px;
  padding: 25px;
  background: none;
  cursor: none;
}
button > span {
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  white-space: nowrap;
  text-indent: 999px;
  overflow: hidden;
}
</style>

<header class="row center-xs middle-xs" id="hero">
  <div class="col-xs-12">

    <Switch></Switch>

    {#if title}
      <h1>
        {#each title as word, i}
          {#if i === 0}
          <span>{word}</span>
          {:else}
            <br>{word} 
          {/if}
        {/each}
      </h1>
    {:else}
      <h1><span>Maxime</span> <br>Fullstack <br>developer</h1>
    {/if}

    <button on:click="{scrollToNextSection}" data-cursor="sticky-cusor">
      <MouseDown></MouseDown>
      <span>scroll to my project's</span>
    </button>

  </div>
</header>