import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import {SecondaryLayout} from './layouts/SecondaryLayout.jsx';
import App from '../App.jsx';

FlowRouter.route('/',{
  action(){
    mount(MainLayout,{
        content: (<App />)
    })
  }
});

FlowRouter.route('/secondary',{
  action(){
    mount(SecondaryLayout,{
      content:(<App />)
    })
  }
})
