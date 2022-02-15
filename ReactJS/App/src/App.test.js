import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';
import {configure, mount,shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';


const renderer=new ShallowRenderer();
test("two plus two is four",()=>{
expect(2+2).toBe(4);
});
test("check app comes up without any issues",()=>{
  renderer.render(<App/>)
})
/* test('APP renders the html content inside it',()=>{
  const wrapper=shallow(<App />);
  const someContent=<p>Inter Component commmunication/ Ref Demo</p>;
  expect(wrapper.contains(someContent)).toEqual(true);
})
/*test('App  hhas a h4 element wwith all  letters',()=>{
  const wrapper=shallow(<App/>);

const h4Arr=wrapper.find('h4');
let noOfh4=0;
if(h4Arr!=null)
noOfh4=h4Arr.length;
console.log('noOfh4'+noOfh4);
 // const someContent=<p>Inter Component commmunication/ Ref Demo</p>;
  expect(noOfh4).toEqual(2);

})

test('App has a single scorecard component and has context',()=>{
  const wrapper=render(<ScoreBoard/>);
  console.log(wrapper.text());
  var content=wrapper.text();
  expect(content.indexOf('Name:player1 score')).toEqual(true);
})*/