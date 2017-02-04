import {renderComponent, expect} from '../test_helper';
import ComponentList from '../../src/components/comment_list';

describe("Component list", ()=>{
    let component;

    beforeEach(()=>{
        const props = {comments: ['New comment', 'other new comment']};
        component = renderComponent(ComponentList, null, props);
    })

    it("shows LI for each component", ()=>{
        expect(component.find('li').length).to.equal(2);
    });

    it("shows all provided comments", ()=>{
        expect(component.find('li:first-child')).to.contain('New comment');
        expect(component.find('li:last-child')).to.contain('other new comment');
    });
});
