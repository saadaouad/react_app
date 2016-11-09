import  React from 'react';
import { IndexRoute, Route, hashHistory, Router } from 'react-router';
//import Home from './Home';
const Home =  () => <div> <h1>Home</h1> </div>;
const Contact =  () => <div> <h1>Contact</h1> </div>;
const Blog =  () => <div> <h1>Blog</h1> </div>;

class  Routes extends React.Component {
    render(){
       return (
           <Router history={hashHistory}>
               <Route path="/" component={Home}></Route>
           </Router>
       )
    }
}

export default Routes;
