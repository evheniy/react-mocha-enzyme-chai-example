import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import md5 from 'md5';

import Gravatar from '../src/Gravatar';
import Avatar from '../src/Avatar';
import Email from '../src/Email';

describe('<Gravatar />', () => {
  it('contains an <Avatar/> component', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.find(Avatar)).to.have.length(1);
  });

  it('contains an <Email/> component', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.find(Email)).to.have.length(1);
  });

  it('should have an initial email state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().email).to.equal('someone@example.com');
  });

  it('should have an initial src state', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.state().src).to.equal('http://placehold.it/200x200');
  });

  it('should update the src state on clicking fetch', function () {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({ email: 'evheniy.bystrov@gmail.com' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).to.equal('evheniy.bystrov@gmail.com');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('evheniy.bystrov@gmail.com')}?s=200`);
  });
});
