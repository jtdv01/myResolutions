import React from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

export class AccountsUIWrapper extends React.Component{
    componentDidMount(){
      // Use meteor to render the loginButtons template from accounts-ui
      this.view = Blaze.render(
        Template.loginButtons,
        ReactDOM.findDOMNode(this.refs.accounts_ui_container));
    }

    componentWillUnmount(){
      Blaze.remove(this.view);
    }

    render(){
      return(
        <span ref="accounts_ui_container" />
      );
    }
}
