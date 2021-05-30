import { getString, translateEnum } from '../static/locale';
import { colorHeaderStyle } from '../styles/header';
import LoginContainer from './Login/LoginContainer';
import ScreensNames from './ScreensNames';
import Splash from './Splash/SplashContainer';

export default {
  [ScreensNames.SPLASH]: {
    name: ScreensNames.SPLASH,
    component: Splash,
    options: {
      title: getString(translateEnum.INTRO_APPOINTMENT_TITLE), ...colorHeaderStyle
    }
  },
  [ScreensNames.LOGIN]: {
    name: ScreensNames.LOGIN,
    component: LoginContainer,
  },
};
