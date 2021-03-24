<script>
import { lightOffStore } from "../store/index.js";

function toggle() {
  lightOffStore.setlightOff(!$lightOffStore);
}
</script>

<style>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.25em;
  right: 20px;
  width: 45px;
  height: 45px;
  padding: 8px;
  cursor: none;
  z-index: 999;
}
button.true .round { transform: translateX(11px); }
button:hover .round { transform: scale(1.05); }
button.true:hover .round { transform: translateX(11px) scale(1.05); }
.hidden {
  display: block;
  width: 0;
  height: 0;
  white-space: nowrap;
  text-indent: 999px;
  overflow: hidden;
}
button:hover .wrapper {
  background: var(--active-color);
  opacity: 1;
  transform: scale(1.05);
}
.wrapper,
.round { transition: all .2s ease-in; }
.wrapper {
  position: relative;
  display: block;
  width: 100%;
  height: 18px;
  border-radius: 10px;
  background: var(--second-color);
  opacity: 0.3;
}
.round {
  position: absolute;
  top: 2px;
  left: 2px;
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: var(--main-color);
  opacity: 1;
}
</style>

<button on:click={toggle} data-cursor="sticky-cusor" class="{$lightOffStore}">
<span class="hidden">{$lightOffStore}</span>
<span class="wrapper">
  <span class="round"></span>
</span>
</button>