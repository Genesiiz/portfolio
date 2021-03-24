<script>
  import {socials} from '../data/socials.js';
</script>

<style>
nav {
  /* position */
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 900;
}
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  /* padding-right: 20px; */
}
li { margin-bottom: 5px; }
li:last-child { margin-bottom: 0; }
a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  padding: 12px;
  opacity: 0.72;

  cursor: none !important;
}
a:hover, a:focus { opacity: 1; }
span {
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  white-space: nowrap;
  text-indent: 999px;
  overflow: hidden;
}
@media (min-width: 400px) {
	ul { padding-right: 7px; }
}
@media (min-width: 720px) {
	ul { padding-right: 20px; }
}
</style>

{#if socials}
<nav>
  <ul>
    {#each socials as social}
      {#if social.link && social.name}
        <li>
          <a href="{social.link}" target="_blank" data-cursor="sticky-cusor">
            <span>{social.title}</span>
            <svelte:component this={social.name}/>
          </a>
        </li>
      {/if}
    {/each}
  </ul>
</nav>
{/if}