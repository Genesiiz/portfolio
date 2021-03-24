<script>
  import {projects} from '../data/projects.js';
  let visible = null;

  function handleMouseOver(i) {
    visible = i;
	}
</script>

<style>
ul { list-style: none; }
.projects-name-wrapper {
  list-style: none;
  display: flex;
  flex-direction: column;
}
li, a {
  display: block;
  /* font */
  font-family: var(--second-font), sans-serif;
  font-size: 1.9em;
	font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  transition: -webkit-text-stroke .15s ease-in;
  cursor: none;

  color: var(--second-color);
  /* color: transparent;
  -webkit-text-stroke: 1px var(--second-color); */
}
a {
  text-decoration: none;
  transition: all .32s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  padding: 0.2em;
  padding-left: 0;
}
a:hover, a:focus {
  color: transparent;
  -webkit-text-stroke: 1px var(--second-color);
  /* color: var(--second-color); */
}

.projects-thumbnail-wrapper {
  display: none;
}
.projects-thumbnail-wrapper img {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 100%;
  max-width: 100%;
  opacity: 0;
  visibility: hidden;
  transition: all .19s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  transform: scale(0.96) translateX(-50%) translateY(-50%);
  /* animation: bounceappear 0.32s cubic-bezier(.15,1.84,.14,.78) 0s 1 forwards; */
}
.projects-thumbnail-wrapper img.visible {
  visibility: visible;
  opacity: 1;
  transform: scale(1) translateX(-50%) translateY(-50%);
}
@media (min-width: 400px) {
	li, a { font-size: 2em; }
}
@media (min-width: 1024px) {
  .projects-thumbnail-wrapper {
    display: block;
    position: sticky;
    top: 5vh;
    height: 90vh;
  }
}
</style>

{#if projects}
<section class="row">
  <!-- project's names -->
  <ul class="col-xs-12
             col-md-7
             projects-name-wrapper"
      data-cursor="out-items"
      data-cursor-wrapper="wrapper-link">
    {#each projects as project, i}
      <!-- {#if project.thumbnail} -->
      <li
        on:mouseover={() => {handleMouseOver(i)}}
        on:mouseleave={() => {visible = null}}>
        {#if project.link && project.name}
          <a href="{project.link}" target="_blank">{project.name}</a>
        {:else if project.name}
          {project.name}
        {/if}
      </li>
      <!-- {/if} -->
    {/each}
  </ul>

  <!-- project's thumbnail -->
  <div class="col-xs-12
             col-md-5
             projects-thumbnail-wrapper">
    {#each projects as project, i}
      <img
        class="{visible == i ? 'visible' : ''}"
        src="projects/{project.thumbnail}"
        alt="{project.name}">
    {/each}
  </div>
</section>
{/if}