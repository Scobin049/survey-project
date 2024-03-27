import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import initialbackground from '../../assets/images/initial-background.png';
import palette from '../../assets/images/palette';

const height = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: 'space-between';
  background-color: ${palette.white};
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
  border-color: ${palette.lightGray};
  border-width: 1px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const ButtonAdminText = styled.Text`
  color: ${palette.gray};
  font-size: 12px;
  text-transform: uppercase;
`;

export const ButtonSurveys = styled.TouchableOpacity`
  background-color: ${palette.primary};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonSurveysText = styled.Text`
  color: ${palette.white};
  font-size: 18px;
  margin-right: 16px;
  font-weight: bold;
`;

export const ImageSurvey = styled.Image.attrs({
  source: initialbackground,
  resizeMode: 'center',
})`
  height: ${height / 2.5}px;
  width: 100vw;
`;
