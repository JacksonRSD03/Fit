import React from 'react';
import styled from 'styled-components/native';
import DefaultButton from '../components/defaultButton';
import {connect} from 'http2';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-right: 30px;
  margin-left: 30px;
`;
const HeaderText = styled.Text`
  font-size: 22px;
  color: #333;
  margin-top: 50px;
`;
const NameInput = styled.TextInput`
  border: 2px solid #ccc;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  padding: 10px;
`;

const Page = props => {
  return (
    <Container>
      <HeaderText> Qual é o seu nome</HeaderText>
      <NameInput />
    </Container>
  );
};
Page.navigationOptions = ({navigation}) => {
  return {};
};
const mapStateToProps = state => {
  return {
    name: state.userReducer.name,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
