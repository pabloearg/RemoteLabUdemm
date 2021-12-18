// @flow
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

let handlers = [];

const removeHandlers = (currentHandler, setParams) => {
  if (setParams) setParams({ gesturesEnabled: true });
  if (currentHandler?.remove) { currentHandler.remove(); }
  handlers.forEach((handler) => {
    if (handler?.remove) { handler.remove(); }
  });
  handlers = [];
};

const addHandlers = (handler, setParams) => {
  const handlerR = BackHandler.addEventListener('hardwareBackPress', handler);
  handlers.push(handlerR);
  if (setParams) setParams({ gesturesEnabled: false });
  return handlerR;
};

const doNothing = () => true;

type Props = {
  /**
   * react navigation setParams function
   */
  setParams: (params: Object) => void,
  /**
   * if false the back key and the gestures will be disabled
   */
  disable: boolean,
  /**
   * callback for back key
   */
  handler: () => void,
  /**
   * pending implementation
   */
  type: string,
}

/**
 *
 * @description add: SCREEN_COMPONENT_OBJECT.navigationOptions = ({ navigation }) => ({
  gesturesEnabled: navigation.getParam('gesturesEnabled', true)
});
 */
const useBackButton = ({
  setParams,
  disable,
  handler,
  type,
}: Props) => {
  useEffect(() => {
    let handlerR = null;
    if (!disable) {
      handlerR = addHandlers(handler ?? doNothing, setParams);
    } else {
      removeHandlers(handlerR, setParams);
    }
    return () => {
      console.log("exit-back")
      removeHandlers(handlerR, setParams);
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handler
      );
    };
  }, [handler, disable, type]);
};

export default useBackButton;
