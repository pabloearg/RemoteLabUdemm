import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextHeadings from '.';

describe('TextHeadings', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(
        <TextHeadings type="h1">NEXT</TextHeadings>
      );
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
