import Template from '../../Template';
import html from './subjects.html';

const template = new Template(html);

export default class Subjects{

  render(){
    const dom = template.clone();
        
    return dom;
  }
}