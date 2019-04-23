import Link from '@styles/link';
import style from './style';

export default ({ props }) => (
  <div class={ style['SomeInfoAboutThis'] }>
    <h1 class={ style['SomeInfoAboutThis__title'] }>{ props.title }</h1>
    <p>
      Vue is a very flexible framework and therefore I decided to see how it will work with JSX.
    </p>
    <h2 class={ style['SomeInfoAboutThis__subtitle'] }>Some info about this</h2>
    <p>
      This boilerplate include:
      <ul>
        <li>Vue (without @vue/cli)</li>
        <li>Vue-router</li>
        <li>JSX support</li>
        <li>SASS support</li>
        <li>Webpack 4.x</li>
        <li>Eslint with airbnb</li>
      </ul>
    </p>
    <h2 class={ style['SomeInfoAboutThis__subtitle'] }>CSS Modules</h2>
    <p>
      Since JSX is used for rendering components, it is not possible to use "scoped" styles in the template.
      The solution was to use CSS Modules.
    </p>
    <h2 class={ style['SomeInfoAboutThis__subtitle'] }>Animation in route transition</h2>
    <p>
      Due to CSS Modules, it was not possible to use the standard capabilities of the 'transition' component.
      Therefore, I used props (beforeEnter, enter and leave) plus Velocity.js library for animation.
    </p>
    <h2 class={ style['SomeInfoAboutThis__subtitle'] }>The project also uses</h2>
    <p>
      <ul>
        <li>
          <b>better-npm-run</b> (sometimes uses this tool, especially in older projects. This makes it easier for me to manage environment variables in scripts.)
          --> <a class={ Link.link } href="https://github.com/benoror/better-npm-run">Github</a>
        </li>
        <li>
          <b>string-types</b> (alternative to class-names.)
          --> <a class={ Link.link } href="https://github.com/voil/string-types">Github</a>
        </li>
      </ul>
    </p>
    <h2 class={ style['SomeInfoAboutThis__subtitle'] }>More about me ;)</h2>
    <p>
      <ul>
        <li>
          My blog: <a class={ Link.link } href="meandjs.com">meandjs.com</a>
        </li>
        <li>
          My github: <a class={ Link.link } href="meandjs.com">https://github.com/ddosdor</a>
        </li>
      </ul>
    </p>    
  </div>
);
