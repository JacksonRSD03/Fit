import React from 'react';
import styled from 'styled-components/native';
import DefaultButton from '../components/defaultButton';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-right: 30px;
  margin-left: 30px;
`;
const WelcomeText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
`;
const WelcomeImage = styled.View`
  flex: 1;
  justify-content: center;
`;
const WelcomeLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
const BeginConfigArea = styled.View`
  margin-bottom: 50px;
  width: 100%;
`;
const ButtonText = styled.Text`
  color: #000;
`;

const Page = props => {
  const start = () => {
    props.navigation.navigate('StarterName');
  };
  return (
    <Container>
      <WelcomeText> Bem vindo ao DevFit </WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={require('../assets/boneco.png')} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton width="100%" underlayColor="#e33" onPress={start}>
          <ButtonText>Iniciar configuração</ButtonText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};
Page.navigationOptions = {
  header: null,
};
export default Page;
