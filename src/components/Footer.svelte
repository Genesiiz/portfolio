<style>
footer {
  position: relative;
  background: var(--low-dark-color);
}
footer * {
  color: var(--second-color);
}
footer a:hover, footer a:focus {
  color: var(--active-color);
  cursor: none;
}
.wrapper-content {
  padding: 2em 0;
  min-height: 100vh;
}
.email-wrapper a {
  text-decoration: none;
  cursor: none;
  transition: all .32s cubic-bezier(0.64, 0.57, 0.67, 1.53);
  padding: 0.2em;
  color: var(--second-color);
  opacity: 0.35;
}
.email-wrapper a:hover, .email-wrapper a:focus {
  /* color: transparent;
  -webkit-text-stroke: 1px var(--second-color); */
  opacity: 0.8;
}
.cv-link {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 100px;
  white-space: nowrap;
  padding: 1em;
}
.cv-link span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
  white-space: nowrap;
  text-decoration: underline;
  transition: all .2s ease-in;
}
.cv-link:hover span {
  text-decoration: none;
  color: var(--active-color);
}
</style>

<footer>
<div class="container container-fluid">

  <div class="row center-xs middle-xs wrapper-content">
    <div class="col-xs-12 email-wrapper">
      <p>If my profil interrest you for any kind of projects and reason, just contact me!</p>
      <h2
        data-cursor-wrapper="wrapper-link"
        data-cursor="out-items"><a href="mailto:maxime.houyoux@gmail.com">maxime.houyoux@gmail.com</a></h2>
    </div>
    <div class="col-xs-12">
      <a href="MAXIME_HOUYOUX-CV.pdf" target="_blank" class="cv-link" data-cursor="sticky-cusor"><span>view my CV</span></a>
    </div>
  </div>

</div>
</footer>