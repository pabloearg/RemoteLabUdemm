// @flow
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  Animated
} from 'react-native';
import ButtonLarge from '../ButtonLarge/ButtonLarge';
import Spinner from '../../Spinner/Spinner';
import { ORANGE } from '../../../styles/colors';

type Props = {
  text: string,
  onPress: () => void,
  disabled?: boolean,
  style?: any,
  styleContainer?: any,
  loading?: boolean,
  frozen?: boolean,
  btnAccessibilityLabel?: string,
  textAccessibilityLabel?: string,
  secondButton?: any,
  loadingType?: string,
  buttonColor?: string,
  opacityAnimation?: any,
  isInvestmentButton: boolean,
}

const ButtonFooter = ({
  text,
  disabled,
  onPress,
  style,
  loading,
  loadingType,
  frozen,
  btnAccessibilityLabel,
  textAccessibilityLabel,
  styleContainer,
  secondButton,
  buttonColor,
  opacityAnimation,
  isInvestmentButton
}: Props) => {
  const renderButton = () => (
    <ButtonLarge
      disabled={disabled || frozen}
      accessibilityLabel={btnAccessibilityLabel}
      style={[
        { backgroundColor: buttonColor || ORANGE },
        styles.button,
        disabled && styles.disabledButton,
        style]}
      onPress={onPress}
    >
      <Text accessibilityLabel={textAccessibilityLabel}>{text}</Text>
    </ButtonLarge>
  );

  return (
    <SafeAreaView
      style={[styles.container, styleContainer, frozen && styles.frozenContainer]}
    >
      <Animated.View style={{ opacity: opacityAnimation }}>
        {loading
          ? <Spinner style={styles.spinner} size={loadingType || 'large'} />
          : renderButton()}
        {secondButton && secondButton}
      </Animated.View>
    </SafeAreaView>
  );
};

ButtonFooter.defaultProps = {
  disabled: false,
  style: undefined,
  loading: false,
  frozen: false,
  btnAccessibilityLabel: 'BTN-Continue',
  textAccessibilityLabel: 'TEXT-Continue',
  styleContainer: undefined,
  secondButton: undefined,
  loadingType: 'large' || 'smal',
  buttonColor: ORANGE,
  opacityAnimation: 1,
};

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    marginHorizontal: 18,
  },
  disabledButton: {
    opacity: 0.6
  },
  container: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 15,
  },
  frozenContainer: {
    opacity: 0.3
  },
  spinner: {
    paddingVertical: 10,
  }
});

export default ButtonFooter;
