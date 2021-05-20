import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container } from './styles';

import loaderAnimation from '../../assets/loader.json';

const LoaderButton: React.FC = () => {
  return (
    <Container>
      <LottieView
              source={loaderAnimation}
              autoPlay
              loop
              style={
                {
                  backgroundColor: 'transparent',
                  width: 200,
                  height: 200
                }
              }
            />
    </Container>
  );
}

export default LoaderButton;
