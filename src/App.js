
import Home from './components/Home'
import About from './components/About'
import Course from './components/Course'
import Blog from './components/Blog'
import Contact from './components/Contact';
import {Route,Switch} from 'react-router-dom';
import Err from './components/Err';

function App() {
  return (
    <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/Blog' component={Blog} />
          <Route path='/contact' component={Contact} />
          <Route path='/course' component={Course} />
          <Route component={Err} />
        </Switch>
    </>
  );
}

export default App;
