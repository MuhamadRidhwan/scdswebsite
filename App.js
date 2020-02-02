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
              <Route exact path='/scds2020/' component={Home} />           
              <Route path="/scds2020/home" component={Home} />   
              <Route path="/scds2020/callPapers" component={CallForPapers} />            
              <Route path="/scds2020/dates" component={Dates} />
              <Route path="/scds2020/information" component={Information} />
              <Route path="/scds2020/proceeding" component={Proceeding} />
              <Route path="/scds2020/bestPaper" component={BestPaper} />
              <Route path="/scds2020/contact" component={Contact} />
              <Route path="/scds2020/feePayment" component={FeePayment} />
              <Route path="/scds2020/maps" component={Maps} />
              <Route path="/scds2020/organizer" component={Organizer} /> 
              <Route path="/scds2020/previousscds" component={PreviousSCDS} />
              <Route path="/scds2020/programBook" component={ProgramBook} />
              <Route path="/scds2020/publication" component={Publication} />
              <Route path="/scds2020/registration" component={Registration} />
              <Route path="/scds2020/submissionGuideline" component={SubmissionGuideline} />
              <Route path="/scds2020/committee" component={TechnicalCommittee} /> 
              <Route path="/scds2020/venue" component={Venue} />
              <Route path="/scds2020/visa" component={Visa} />

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
