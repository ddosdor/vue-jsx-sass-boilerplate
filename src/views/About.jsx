import SomeInfoAboutThis from '@/components/SomeInfoAboutThis';

export default {
  name: 'About',
  components: { SomeInfoAboutThis },

  render() {
    return (
      <div>
        <SomeInfoAboutThis title="Vue + JSX boilerplate" />
      </div>
    );
  },
};
