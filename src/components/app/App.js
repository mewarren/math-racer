import Template from '../Template';
import html from './app.html';
import Subjects from './subjects/Subjects';

const template = new Template(html);

const subjects = new Subjects(html);

export default class App{
  
  render(){
    const dom = template.clone();
    const main = dom.getElementById('main-content');
    main.appendChild(subjects.render());
    
    return dom;
  }
}