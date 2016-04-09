import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import {SecondaryLayout} from './layouts/SecondaryLayout.jsx';
import ResolutionPage from './Resolution/ResolutionPage.jsx';
import UsersPage from './Users/UsersPage.jsx';


FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
        content: (<ResolutionPage />)
    })
  }
});

FlowRouter.route('/users',{
  action(){
    mount(MainLayout,{
      content:(<UsersPage />)
    })
  }
})

FlowRouter.route('/secondary',{
  action(){
    mount(SecondaryLayout,{
      content:(<App />)
    })
  }
})
