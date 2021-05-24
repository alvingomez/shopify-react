import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useParams, Link} from 'react-router-dom'

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {
  return (
    <div className="App">
     <Router> 
       <Route path="/products/:handle" exact>
        <ProductPage />
       </Route>
       <Route path="/">
        <Home />
       </Route> 
     </Router>
    </div>
  );
}

export default App;
