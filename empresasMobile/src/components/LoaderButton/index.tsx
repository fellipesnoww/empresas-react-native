import React from 'react';
import LottieView from 'lottie-react-native';
import Container from './styles';

import loadAnimation from '../../assets/button-loader.json';

const Loader: React.FC = () => {
  return (
    <Container>
      <LottieView
        source={loadAnimation}
        autoPlay
        loop
        style={{
          backgroundColor: 'transparent',
          width: 50,
          height: 50,
        }}
      />
    </Container>
  );
};

export default Loader;
