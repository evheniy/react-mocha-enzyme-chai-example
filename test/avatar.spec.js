import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Avatar from '../src/Avatar';

describe('<Avatar/>', function () {
  it('should have an image to display the gravatar', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should have props for email and src', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.instance().props.email).to.be.not.undefined;
    expect(wrapper.instance().props.src).to.be.not.undefined;
  });
});
