import Logo from '@images/Logo';
import HelloVue from '@/components/HelloVue';

export default {
  name: 'Home',

  render() {
    return (
      <div>
        <img src={ Logo } />
        <HelloVue />
      </div>
    );
  },
};
