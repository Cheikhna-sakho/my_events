import './App.css';
import AuthProviders from './contexts/AuthProvider';
import Router from './router/Router';

function App() {
  return (
    <AuthProviders>
     <Router/>
    </AuthProviders>
  );
}

export default App;
