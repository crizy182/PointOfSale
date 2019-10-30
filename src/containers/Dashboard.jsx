import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Layout from '../components/Layout';
import House from './House';


const Home = () => (
  // <sideDrawer />
  <BrowserRouter>
      <Switch>
        <Layout>
            <Route exact path="/home" component={House} />
            <Route exact path="/checkout" component={Checkout} />
        </Layout>
      </Switch>
  </BrowserRouter>

);

export default Home;