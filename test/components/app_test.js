import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/App';

//use to group similar tests
describe("App component", ()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(App);
  })

//use "it" to test a single attr/to make a specific test of a target
  it('shows correct text', ()=>{
    // 'expect; or make 'assertion' about a target
    expect(component.find('h1')).to.contain('React simple starter');
  })

  it("shows comment box", ()=>{
    expect(component.find('.CommentBox')).to.exist;
  })

  it("contains component comment list", ()=>{
    expect(component.find('.comment_list')).to.exist;
  })
});
