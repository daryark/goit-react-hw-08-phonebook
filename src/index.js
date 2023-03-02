import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyles from 'styles/GlobalStyles';
import { App } from 'components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
