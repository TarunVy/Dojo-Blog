import Navbar from './Navbar';
import Home from './Home';
import Home1 from './Home1';
import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 50;
  // const person = { name: 'foo', age: 30 };
  // const link = "http://www.google.com";

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
        <Route exact path="/">
           <Home1 />
        </Route>
        <Route path="/create">
           <Create />
        </Route>
        <Route path="/blogs/:id">
           <BlogDetails />
        </Route>
        <Route path="*">
           <NotFound/>
        </Route>
        </Switch>
      </div>
        {/* <Home /> */}
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p> */}

        {/* <p>{person}</p> */}

        {/* <p>{10}</p>
        <p>{'hello ninjas'}</p>
        <p>{[1, 2, 4, 5, 8]}</p>
        <p>{Math.floor(Math.random() * 10)}</p> */}

        {/* <a href={link}>Google Site</a> */}
    </div >
    </Router>
  );
}

export default App;
