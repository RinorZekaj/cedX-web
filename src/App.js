import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import classes from './App.module.css';
import Layout from './container/Layout/Layout';
import Home from './container/Pages/Home/Home';
import CedTalks from './container/Pages/CedTalks/CedTalks';
import Contact from './container/Pages/Contact/Contact';
import Projects from './container/Pages/Projects/Projects';
import Publications from './container/Pages/Publications/Publications';
import Sponsors from './container/Pages/Sponsors/Sponsors';
import Trainings from './container/Pages/Trainings/Trainings';
import SingleCourse from './components/SingleCourse/SingleCourse';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Layout>
            {/* Pages */}

            <Route path="/" exact component={Home}></Route>
            <Route exact path="/cedtalks" component={CedTalks} />
            <Route path="/kontakti" component={Contact} />
            <Route path="/projektet" component={Projects} />
            <Route path="/publikimet" component={Publications} />
            <Route path="/sponzoret" component={Sponsors} />
            <Route path="/trajnimet" component={Trainings} />

            {/* Courses */}

            <Route path="/course" component={SingleCourse}/>
      </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;