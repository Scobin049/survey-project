import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, Text} from 'react-native';

import HeaderPage from '../../components/HeaderPage';
import SurveyItem from '../../components/SurveyItem';
import {GET_SURVEYS} from '../../data/queries.grahpql';
import {Container, ContainerNoData} from './styles';

function DefaultContainer({
  children,
  navigation,
}: {
  children: any;
  navigation: any;
}): React.JSX.Element {
  return (
    <Container>
      <HeaderPage
        title="Pesquisas para responder"
        handleBack={navigation.goBack}
      />

      {children}
    </Container>
  );
}

function SurveyListScreen({navigation}: any): React.JSX.Element {
  const {loading, error, data} = useQuery(GET_SURVEYS, {
    variables: {status: true},
  });

  if (loading) {
    return (
      <DefaultContainer navigation={navigation}>
        <ContainerNoData>
          <Text>Loading...</Text>
        </ContainerNoData>
      </DefaultContainer>
    );
  }
  if (error) {
    return (
      <DefaultContainer navigation={navigation}>
        <ContainerNoData>
          <Text>Error! {error.message}</Text>
        </ContainerNoData>
      </DefaultContainer>
    );
  }

  console.log('data', JSON.stringify(data, null, 2));

  return (
    <DefaultContainer navigation={navigation}>
      <FlatList
        data={data.surveys}
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
    </DefaultContainer>
  );
}

export default SurveyListScreen;
