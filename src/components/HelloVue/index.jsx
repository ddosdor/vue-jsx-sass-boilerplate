import StringTypes from 'string-types';
import Button from '@styles/buttons';
import style from './style';

export default {
  name: 'HelloVue',

  render() {
    return (
      <div class={ style['HelloVue'] }>
        <h1 class={ style['HelloVue__title'] }>Welcome to Vue + JSX</h1>
        <p>
          Vue application boilerplate with JSX, Sass and CSS Modules
        </p>
        <a class={ StringTypes(Button['button'], style['HelloVue__link']) }
          href="https://github.com/ddosdor/vue-jsx-sass-boilerplate" target="_blank"
          rel="noopener noreferrer"
        >See me on Github</a>
      </div>
    );
  },
};
