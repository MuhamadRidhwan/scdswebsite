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
import { Organizer } from './components/sectionChilds/InternationalCommittee';
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
          {/* <Jumbotron /> */}
          <Layout>
            <Switch>
              <Route exact path='/scds2021/' component={Home} />           
              <Route path="/scds2021/home" component={Home} />   
              <Route path="/scds2021/callPapers" component={CallForPapers} />            
              <Route path="/scds2021/dates" component={Dates} />
              <Route path="/scds2021/information" component={Information} />
              <Route path="/scds2021/proceeding" component={Proceeding} />
              <Route path="/scds2021/bestPaper" component={BestPaper} />
              <Route path="/scds2021/contact" component={Contact} />
              <Route path="/scds2021/feePayment" component={FeePayment} />
              <Route path="/scds2021/maps" component={Maps} />
              <Route path="/scds2021/organizer" component={Organizer} /> 
              <Route path="/scds2021/previousscds" component={PreviousSCDS} />
              <Route path="/scds2021/programBook" component={ProgramBook} />
              <Route path="/scds2021/publication" component={Publication} />
              <Route path="/scds2021/registration" component={Registration} />
              <Route path="/scds2021/submissionGuideline" component={SubmissionGuideline} />
              <Route path="/scds2021/committee" component={TechnicalCommittee} /> 
              <Route path="/scds2021/venue" component={Venue} />
              <Route path="/scds2021/visa" component={Visa} />

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
