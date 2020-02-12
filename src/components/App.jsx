import React from 'react';
import Header from './Header';
import DaysList from './DaysList';
import SeasonProduce from './SeasonProduce';
import { Switch, Route } from 'react-router-dom';

var AppStyling = {
  backgroundImage: 'url(https://images.medicaldaily.com/sites/medicaldaily.com/files/styles/full_breakpoints_theme_medicaldaily_desktop_1x/public/2015/03/09/farmers-market-breakdown.jpg)',
  backgroundAttachment: 'fixed',
  backgroundSize: 'contain',
  overflow: 'hidden',
  height: '100%'
};
var BoxStyling = {
  margin: '50px',
  backgroundColor: 'rgba(26,0,0,0.6)',
  overflow: 'auto',
  color: 'white'
};

function App(){
  return (
    <div style={AppStyling}>
      <div style={BoxStyling}>
        <Header/>
        <Switch>
          <Route exact path="/" component={DaysList} />
          <Route path="/seasons" component={SeasonProduce}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;