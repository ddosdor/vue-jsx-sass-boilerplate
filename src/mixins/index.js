/* eslint-disable no-param-reassign */
import Velocity from 'velocity-animate';

export const routeTransitionAnimations = {
  methods: {
    mBeforeEnter(el) {
      el.style.top = 0;
      el.style.opacity = 0;
    },
    mEnter(el, done) {
      Velocity(el, {
        translateY: '60px',
        translateX: 0,
        translateZ: 0,
        opacity: 0.1,
      }, { duration: 100 });
      Velocity(el, { opacity: 1 }, { duration: 100, complete: done });
    },
    mLeave(el, done) {
      Velocity(el, {
        translateY: 0,
        translateX: 0,
        translateZ: 0,
        opacity: 0.1,
      }, { duration: 100, complete: done });
    },
  },
};
