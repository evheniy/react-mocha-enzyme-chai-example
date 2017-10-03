import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import Email from '../src/Email';

const props = {
  handleEmailChange() {
    return 0;
  },
  fetchGravatar() {
    return 0;
  }
};

describe('<Email>', function () {
  it('should have an input for the email', function () {
    const wrapper = shallow(<Email {...props} />);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', function () {
    const wrapper = shallow(<Email {...props} />);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for handleEmailChange and fetchGravatar', function () {
    const wrapper = shallow(<Email {...props} />);
    expect(wrapper.instance().props.handleEmailChange).to.be.not.undefined;
    expect(wrapper.instance().props.fetchGravatar).to.be.not.undefined;
  });
});
