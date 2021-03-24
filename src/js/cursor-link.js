import TweenLite from 'gsap';

export default class CursorLink {
  constructor(cursor, cursorSvg, wrapper) {
    this.cursor = document.querySelector(cursor);
    this.cursorSvg = document.querySelector(cursorSvg);
    this.wrapper = document.querySelectorAll(wrapper);
    if (!this.cursor || !this.cursorSvg || !this.wrapper) return;
    this.initCursor();
  }

  initCursor() {
    this.cursorBox = this.cursor.getBoundingClientRect();
    this.easing = "elastic.out(1, 0.7)";
    this.animationDuration = 0.3;
    this.cursorSide = null; // will be "left" or "right"

    // initial cursor style
    TweenLite.to(this.cursorSvg, 0, {
      rotation: -180,
      opacity: 0,
      scale: 0.5
    });

    // track mouse movement
    document.addEventListener("mousemove", e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      TweenLite.set(this.cursor, {
        x: this.clientX,
        y: this.clientY
      });
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // track mouse box enter
    const onMouseEnter = e => {
      this.containerBox = e.target.getBoundingClientRect();

      if (!this.clientX) this.clientX = e.clientX;
      if (!this.clientY) this.clientY = e.clientY;

      let startRotation;
      if (this.clientY < this.containerBox.top + this.containerBox.height / 2) {
        startRotation = -135;
      } else {
        startRotation = this.clientX > window.innerWidth / 2 ? 135 : -315;
      }
      TweenLite.set(this.cursorIcon, {
        rotation: startRotation
      });

      this.cursorSide = this.clientX > window.innerWidth / 2 ? "right" : "left";

      TweenLite.to(this.cursorSvg, this.animationDuration, {
        rotation: 0,
        scale: 1,
        opacity: 1,
        ease: this.ease
      });
    };

    // track mouse box leave
    const onMouseLeave = e => {
      this.containerBox = e.target.getBoundingClientRect();

      let outRotation;
      if (this.clientY < this.containerBox.top + this.containerBox.height / 2) {
        outRotation = this.cursorSide === "right" ? -135 : -45;
      } else {
        outRotation = this.cursorSide === "right" ? 135 : 135;
      }
      
      TweenLite.to(this.cursorSvg, this.animationDuration, {
        rotation: outRotation,
        opacity: 0,
        scale: 0.3
      });

      this.cursorSide = null;
    };

    // listen event's
    this.wrapper.forEach(item => {
      item.addEventListener("mouseenter", onMouseEnter);
      item.addEventListener("mouseleave", onMouseLeave);
    });
  }
}