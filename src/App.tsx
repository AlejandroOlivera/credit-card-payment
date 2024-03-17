import '@mantine/core/styles.css';
import { Provider } from 'react-redux';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import store from './store/store';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </MantineProvider>
  );
}
