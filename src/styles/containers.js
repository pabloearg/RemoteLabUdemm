import { Dimensions } from 'react-native';
import * as Constants from './constants';
import { LOW_PADDING } from './paddings';

const { width } = Dimensions.get('window');

export const LOW_CONTAINER_WIDTH = width * (1 - Constants.HIGH_SIZE_PERCENTAGE);
export const MEDIUM_CONTAINER_WIDTH = width * (1 - Constants.MEDIUM_SIZE_PERCENTAGE);
export const HIGH_CONTAINER_WIDTH = width - LOW_PADDING;
