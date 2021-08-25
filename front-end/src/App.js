import './App.css';
import Layout from './components/Layout';
import { BrowserRouter } from "react-router-dom" 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          
        </Layout>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
