import ReactDOM from 'react-dom';
import { SettingsProvider } from 'src/context/useSettings';
import App from 'src/App';

ReactDOM.render(
  <SettingsProvider>
    <App />
  </SettingsProvider>,
  document.getElementById('root')
);
