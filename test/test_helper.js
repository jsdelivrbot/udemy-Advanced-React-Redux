//
// 1. Set up tesing environment
//jsdom simulates dom / creates fake dom
import jsdom from 'jsdom';

global.documet = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;

//if you import just $(instead of "jquery") it will try to access browser and will fail. We defile our own jquery
import jquery from 'jquery';
const $ = jquery(global.window);


//
// 2. Build renderComponent helper
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import {expect} from 'chai';

//these imports are needed to wrap componentClass with provider. Otherwise redux and store do not work
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from '../src/reducers';

function renderComponent(ComponentClass, props, appLevelStateAKAIntialState) {
  //here we make instance/copy of the class
  const componentInstance = TestUtils.renderIntoDocument(
      <Provider store={createStore(reducers, appLevelStateAKAIntialState)}>
        <ComponentClass {...props}/>
      </Provider>
        );

  return $(ReactDOM.findDOMNode(componentInstance)); //produces html. We wrap it with jquery to get access to all methods of jquery-chai
}

// 3.
// Build simulate input helper
//here we add function to jquery:
$.fn.simulate = function(eventName, value) {
  if(value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);    //this is example: $('div').simulate()      <---- here "this[0]" would refer to the first div in the DOM
};




// 4.
// Set up chai-jquery
import chai from 'chai';
import chaiJquery from 'chai-jquery';

chaiJquery(chai, chai.util, $);



// export
export {renderComponent, expect};
