import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ButtonLarge from './ButtonLarge';
import TextStrong from '../TextStrong';
import { ORANGE } from '../../utils/constants';

describe('ButtonLarge', () => {
  describe('Rendering', () => {
    it('should match to snapshot - Primary', () => {
      const component = shallow(
        <ButtonLarge onPress={() => {}} backgroundColor={ORANGE}>Continue</ButtonLarge>
      );
      expect(toJson(component)).toMatchSnapshot('Primary button snapshot');
    });
    it('should match to snapshot - Secondary', () => {
      const component = shallow(
        <ButtonLarge onPress={() => {}}><TextStrong>Probando</TextStrong></ButtonLarge>
      );
      expect(toJson(component)).toMatchSnapshot('Secondary button snapshot');
    });
  });

  describe('Interaction', () => {
    describe('onPressHandler', () => {
      it('should call onPress', () => {
        const mockOnPress = jest.fn();
        const component = shallow(
          <ButtonLarge onPress={mockOnPress}>Probando</ButtonLarge>
        );
        component.props().onPress();

        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
      });
    });
  });
});
