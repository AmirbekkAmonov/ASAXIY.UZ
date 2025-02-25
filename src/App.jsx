import React from 'react';
import Router from './router';
import "@/components/utils/i18n";
import {Provider} from './context';
function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App;
