import TweenMax from 'gsap';
export default class CursorSticky {
  constructor(outerCursor, innerCursor, linkItems, outItems, lightOff) {
    this.outerCursor = document.querySelector(outerCursor);
    this.innerCursor = document.querySelector(innerCursor);
    this.linkItems = document.querySelectorAll(linkItems);
    this.outItems = document.querySelectorAll(outItems);
    this.lightOff = document.querySelector(lightOff);
    if (!this.outerCursor || !this.innerCursor || !this.linkItems) return;
    this.initCursor();
    this.initHover();
  }

  initCursor() {
    // sticky cursor
    this.outerCursorBox = this.outerCursor.getBoundingClientRect();
    this.outerCursorSpeed = 0;
    this.easing = "elastic.out(1, 0.7)";
    this.clientX = -100;
    this.clientY = -100;
    this.showCursor = false;

    const unveilCursor = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      TweenMax.set(this.outerCursor, {
        x: this.clientX - this.outerCursorBox.width / 2,
        y: this.clientY - this.outerCursorBox.height / 2
      });
      setTimeout(() => {
        this.outerCursorSpeed = 0.2;
      }, 100);
      this.showCursor = true;
    };
    document.addEventListener("mousemove", unveilCursor);

    document.addEventListener("mousemove", e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      if (!this.isStuck) {
        TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2
        });
      }
      if (this.showCursor) {
        document.removeEventListener("mousemove", unveilCursor);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  initHover() {
    const handleMouseEnter = e => {
      this.isStuck = true;
      const target = e.currentTarget;
      const box = target.getBoundingClientRect();
      const light = this.lightOff.classList.contains("true") ? "#FFFFFF" : "#000000";
      this.outerCursorOriginals = {
        width: this.outerCursorBox.width,
        height: this.outerCursorBox.height
      };
      TweenMax.to(this.innerCursor, 0.2, {
        width: 4,
        height: 4,
        opacity: 0.72,
        borderColor: light
      });
      TweenMax.to(this.outerCursor, 0.2, {
        x: box.left,
        y: box.top,
        width: box.width,
        height: box.height,
        opacity: 1,
        borderColor: "#0000FF"
      });
    };

    const handleMouseLeave = () => {
      this.isStuck = false;
      const light = this.lightOff.classList.contains("true") ? "#FFFFFF" : "#000000";
      TweenMax.to(this.innerCursor, 0.2, {
        width: 6,
        height: 6,
        opacity: 1,
        borderColor: light
      });
      TweenMax.to(this.outerCursor, 0.2, {
        width: this.outerCursorOriginals.width,
        height: this.outerCursorOriginals.height,
        opacity: 0.2,
        borderColor: light
      });
    };

    const hideCursor = () => {
      this.isStuck = false;
      TweenMax.to(this.innerCursor, 0.2, {
        width: 0,
        height: 0,
        opacity: 0,
        borderColor: "none"
      });
      TweenMax.to(this.outerCursor, 0.2, {
        width: 0,
        height: 0,
        opacity: 0,
        borderColor: "none"
      });
    };
    const showCursor = () => {
      this.isStuck = false;
      const light = this.lightOff.classList.contains("true") ? "#FFFFFF" : "#000000";
      TweenMax.to(this.innerCursor, 0.2, {
        width: 6,
        height: 6,
        opacity: 1,
        borderColor: light
      });
      TweenMax.to(this.outerCursor, 0.2, {
        width: this.outerCursorOriginals.width,
        height: this.outerCursorOriginals.height,
        opacity: 0.2,
        borderColor: light
      });
    };

    this.linkItems.forEach(item => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    this.outItems.forEach(item => {
      item.addEventListener("mouseenter", hideCursor);
      item.addEventListener("mouseleave", showCursor);
    });
  }
}