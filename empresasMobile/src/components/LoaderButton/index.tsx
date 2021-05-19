import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container } from './styles';

import loadAnimation from '../../assets/button-loader.json';

const LoaderButton: React.FC = () => {
  return (
    <Container>
      <LottieView
              source={loadAnimation}
              autoPlay
              loop
              style={
                {
                  backgroundColor: 'transparent',
                  width: 50,
                  height: 50
                }
              }
            />
    </Container>
  );
}

export default LoaderButton;
