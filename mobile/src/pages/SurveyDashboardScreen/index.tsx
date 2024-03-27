import React from 'react';
import HeaderPage from '../../components/HeaderPage';
import {GlobalContainer} from '../../components/global.styles';
import {useMainContext} from '../../context/main-context';

function SurveyDashboardScreen({navigation}: any): React.JSX.Element {
  const {user} = useMainContext();
  return (
    <GlobalContainer>
      <HeaderPage
        title="Dashboard"
        handleBack={navigation.popToTop}
        user={user}
      />
    </GlobalContainer>
  );
}

export default SurveyDashboardScreen;
