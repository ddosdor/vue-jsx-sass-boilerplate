import style from './style';

export default {
  name: 'TheHeader',

  methods: {
    goTo(name) {
      this.$router.push({ name });
    },
  },

  computed: {
    activeLink() {
      return this.$route.name;
    },
  },

  render() {
    const menuItems = [
      { name: 'Home' },
      { name: 'About' },
    ].map(item => (
      <li class={ style['menu__item'] } key={ item.name }>
        <a class={ this.activeLink === item.name ? style['link--active'] : style['link'] }
           onClick={ () => this.goTo(item.name) }>{ item.name }</a>
      </li>
    ));

    return (
      <div class={ style['TheHeader']}>
        <div class={ style['TheHeader__title'] }>
          Vue + JSX
        </div>
        <ul class={ style['TheHeader__menu'] }>
          { menuItems }
        </ul>
      </div>
    );
  },
};
