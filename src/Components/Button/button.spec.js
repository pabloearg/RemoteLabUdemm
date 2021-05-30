import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from '.';
import TextStrong from '../TextStrong';
import { ORANGE } from '../../utils/constants';


describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Primary', () => {
      const component = shallow(
        <Button
          onPress={() => {}}
          backgroundColor={ORANGE}
        >
          Continue
        </Button>
      );
      expect(toJson(component)).toMatchSnapshot('Primary button snapshot');
    });
    it('should match to snapshot - Secondary', () => {
      const component = shallow(
        <Button onPress={() => {}}>
          <TextStrong>Probando</TextStrong>
        </Button>
      );
      expect(toJson(component)).toMatchSnapshot('Secondary button snapshot');
    });
  });

  describe('Interaction', () => {
    describe('onPressHandler', () => {
      it('should call onPress', () => {
        const mockOnPress = jest.fn();
        const component = shallow(
          <Button onPress={mockOnPress}>Probando</Button>
        );
        component.props().onPress();

        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
      });
    });
  });
});
