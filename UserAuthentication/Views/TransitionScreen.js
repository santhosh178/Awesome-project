import React from 'react';
import { View ,ActivityIndicator} from 'react-native';
import Styles from '../Themes/Styles';

const TransitionScreen = () => {
  return (
    <View style={Styles.modalBackground}>
        <View style={Styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#000000"
            size="large"
            style={Styles.activityIndicator}
          />
        </View>
      </View>
  )
}

export default TransitionScreen