import Template from '../../Template';
import html from './header.html';

const template = new Template(html);

export default class Header{

  render(){
    const dom = template.clone();
        
    return dom;
  }
}