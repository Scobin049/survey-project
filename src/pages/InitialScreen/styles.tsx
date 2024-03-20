import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import initialbackground from '../../assets/images/initial-background.png';

const height = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: 'space-between';
  background-color: #fff;
`;

export const ContainerSurveys = styled.ScrollView`
  flex: 1;
  padding: 24px 16px;
`;

export const ContainerLogin = styled.View`
  padding: 8px 16px;
`;

export const ButtonAdmin = styled.TouchableOpacity`
  padding: 8px;
  background-color: transparent;
  border-color: #d8ddde;
  border-width: 1px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonAdminText = styled.Text`
  color: #637081;
  font-size: 12px;
  text-transform: uppercase;
`;

export const ButtonSurveys = styled.TouchableOpacity`
  background-color: #ef3054;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonSurveysText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ImageSurvey = styled.Image.attrs({
  source: initialbackground,
  resizeMode: 'center',
})`
  height: ${height / 2.5}px;
  width: 100vw;
`;
