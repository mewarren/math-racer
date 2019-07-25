import Template from '../Template';
import html from './app.html';
import Subjects from './subjects/Subjects';
import Header from './header/Header';

const template = new Template(html);
const subjects = new Subjects(html);
const header = new Header(html);

export default class App{
  
  render(){
    const dom = template.clone();
    dom.getElementById('main-head').appendChild(header.render());
    dom.getElementById('main-content').appendChild(subjects.render());
    
    return dom;
  }
}