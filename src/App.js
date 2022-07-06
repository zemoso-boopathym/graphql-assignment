import './App.css';
import CountryList from './pages/CountryList';
import { MESSAGES } from './util/messages';

function App() {
  return (
    <div className='App'>
      <h1>{MESSAGES.APP_NAME}</h1>
      <CountryList />
    </div>
  );
}

export default App;
