import '@mantine/core/styles.css';
import { Provider } from 'react-redux';

import { MantineProvider } from '@mantine/core';

import { theme } from './theme';
import store from './store/store';
import { Router } from './Router';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </MantineProvider>
  );
}
