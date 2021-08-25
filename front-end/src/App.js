import './App.css';
import Layout from './components/Layout';
import { BrowserRouter } from "react-router-dom" 
import RequestProvider from './contexts/request-context';

function App() {
  return (
    <div className="App">
      <RequestProvider>
        <BrowserRouter>
          <Layout>
          </Layout>
        </BrowserRouter>
      </RequestProvider>
    </div>
  );
}

export default App;
