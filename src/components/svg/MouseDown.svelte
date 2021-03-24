<style>
svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: var(--second-color);
}
circle {
  animation: updown 1.7s ease-in-out 2s infinite forwards;
}
@keyframes updown {
  0% {transform: translateY(-1%);}
  20% {transform: translateY(-1%);}
  38% {transform: translateY(17%);}
  61% {transform: translateY(2%);}
  75% {transform: translateY(10%);}
  100% {transform: translateY(-1%);}
}
</style>

<svg version="1.1" viewBox="0 0 24 24">
  <path d="M12,2c3.3,0,6,2.7,6,6v8c0,3.3-2.7,6-6,6s-6-2.7-6-6V8C6,4.7,8.7,2,12,2z M12,0C7.6,0,4,3.6,4,8v8c0,4.4,3.6,8,8,8s8-3.6,8-8V8C20,3.6,16.4,0,12,0z"/>
  <circle cx="12" cy="7.5" r="1.5"/>
</svg>
