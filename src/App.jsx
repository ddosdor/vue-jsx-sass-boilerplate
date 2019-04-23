import StringTypes from 'string-types';
import { routeTransitionAnimations } from '@/mixins';
import globalStyle from '@/assets/styles/global';
import TheHeader from '@/components/TheHeader';

export default {
  name: 'App',
  components: { TheHeader },
  mixins: [routeTransitionAnimations],

  render() {
    return (
      <div class={ globalStyle['app'] }>
        <TheHeader />
        <transition
          vOn:beforeEnter={ this.mBeforeEnter }
          vOn:enter={ this.mEnter }
          vOn:leave={ this.mLeave }
        >
          <router-view class={ StringTypes(globalStyle['view'], globalStyle['view--center'], globalStyle['view--columns']) }/>
        </transition>
      </div>
    );
  },
};
