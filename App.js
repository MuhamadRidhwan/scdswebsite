import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

//Main Sections
import { CallForPapers } from './components/sections/CallForPapers';
import { Dates } from './components/sections/Dates';
import { Information } from './components/sections/Information';
import { Proceeding } from './components/sections/Proceeding';

//Child Sections
import { BestPaper } from './components/sectionChilds/BestPaper';
import { Contact } from './components/sectionChilds/Contact';
import { FeePayment } from './components/sectionChilds/FeePayment';
import { Maps } from './components/sectionChilds/Maps';
import { Organizer } from './components/sectionChilds/Organizer';
import { PreviousSCDS } from './components/sectionChilds/PreviousSCDS';
import { ProgramBook } from './components/sectionChilds/ProgramBook';
import { Publication } from './components/sectionChilds/Publication';
import { Registration } from './components/sectionChilds/Registration';
import { SubmissionGuideline } from './components/sectionChilds/SubmissionGuideline';
import { TechnicalCommittee } from './components/sectionChilds/TechnicalCommittee';
import { Venue } from './components/sectionChilds/Venue';
import { Visa } from './components/sectionChilds/Visa';

import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />           
              <Route path="/callPapers" component={CallForPapers} />            
              <Route path="/dates" component={Dates} />
              <Route path="/information" component={Information} />
              <Route path="/proceeding" component={Proceeding} />

              <Route path="/bestPaper" component={BestPaper} />
              <Route path="/contact" component={Contact} />
              <Route path="/feepayment" component={FeePayment} />
              <Route path="/maps" component={Maps} />
              <Route path="/organizer" component={Organizer} /> 
              <Route path="/previousscds" component={PreviousSCDS} />
              <Route path="/programBook" component={ProgramBook} />
              <Route path="/publication" component={Publication} />
              <Route path="/registration" component={Registration} />
              <Route path="/submissionGuideline" component={SubmissionGuideline} />
              <Route path="/committee" component={TechnicalCommittee} /> 
              <Route path="/venue" component={Venue} />
              <Route path="/visa" component={Visa} />

              <Route component={NoMatch} />
            </Switch>
            <Footer />
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
