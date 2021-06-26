import './App.css';
import Navigation from '../src/Component/Navigation/Navigation'
import AdminDashboard from './Component/AdminDashboard/AdminDashboard';
import ManageBlogs from './Component/ManageBlogs/ManageBlogs';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BlogDetails from './Component/Blogs/BlogDetails';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Footer from './Component/Footer/Footer';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import { createContext } from 'react';
import { useState } from 'react';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blogDetails/:blogId">
            <Navigation />
            <BlogDetails />
            <Footer />
          </Route>
          <Route path="/manageBlogs">
            <ManageBlogs />
          </Route>
          <PrivateRoute path="/admin">
            <AdminDashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
