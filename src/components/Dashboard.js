import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SearchResult from './SearchResult';
import SearchForm from './SearchForm';
import Header from './Header';
import Loader from './Loader';

const Dashboard = () => {
 return (
    <React.Fragment>
     (
        <div>
          <Header />
          <SearchForm />
         
          <SearchResult
          />
        </div>
    )
        
      )}
    </React.Fragment>
  );
};
    
export default Dashboard;