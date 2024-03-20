import React from 'react';
import {FlatList, Text} from 'react-native';
import SurveyItem from '../../components/SurveyItem';
import TitlePage from '../../components/TitlePage';
import {Container, GoBackButton} from './styles';

function SurveyListScreen({navigation}: any): React.JSX.Element {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <Container>
      <GoBackButton
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={{fontSize: 22}}>{'<'}</Text>
      </GoBackButton>
      <TitlePage>Pesquisas para responder</TitlePage>

      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <SurveyItem
            title={item.title}
            onPress={() => {
              navigation.navigate('SurveyResponse', {
                id: item.id,
                name: item.title,
              });
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Container>
  );
}

export default SurveyListScreen;
