import React from 'react';
import Resolution from './Resolution';


export default class ResolutionsList extends React.Component{

  constructor(){
    super();
    this.state = {
      'search': 'tesdfsfdst'
    };
  }

  updateSearch(event){
    var x = event.taget.value;
    // this.setState({'search':x});
    console.log(x);
    // var x = this.state.search;
    // console.log(x);
  }

  render(){
    return(
      <div>
        <h1> List of resolutions </h1>

        <h2> Filter resolutions </h2>
        <form>
          <input type="text" value={this.state.search} onChange={this.updateSearch} ref="query_text" placeholder="Query" />
        </form>

        <table>
          <tbody>
          {
            this.props.resolutions.map((r)=>{
              return <Resolution resolution={r} key={r._id}/>
            })
          }
          </tbody>

        </table>

    </div>
    )
  }
}
