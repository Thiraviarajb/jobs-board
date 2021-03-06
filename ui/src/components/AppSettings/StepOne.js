import React, {Component} from 'react';

export class StepOne extends Component {
  constructor (props) {
    super(props);
    console.log(this.props.myData);
  }

  render () {
    const sourceOptions = this.props.myData.options.map((option) => <option key={option.port} value={option.name}>{option.name}</option>)
    return (
      <div style={{minHeight: "400px"}} className='center'>
        <div className='row' style={{margin: '10px 0 0 0'}}>
          <div className="six columns">
            <label htmlFor="source">Select Source</label>
            <select className="u-full-width" id="source" value={this.props.myData.selectedOption} onChange={this.props.handleChange} autoFocus>
              <option value="">Select Source</option>
              {sourceOptions}
            </select>
          </div>
        </div>
        {this.props.myData.selectedOption ?
        <section>
        <div className='row' style={{margin: '10px 0 0 0'}}>  
          <div className='six columns'>
            <label>User Name</label>
            <input
              className='u-full-width'
              placeholder='User Name'
              type='text'
              onChange={this.props.handleUserNameChanged}
              value={this.props.myData.userName}
              autoFocus
            />
          </div>
        </div>
        <div className='row' style={{margin: '10px 0 0 0'}}>
          <div className='six columns'>
            <label>Password</label>
            <input
              className='u-full-width required'
              placeholder='Password'
              type='password'
              onChange={this.props.handlePasswordChanged}
              value={this.props.myData.password}
            />
          </div>
        </div>
        <div className='row' style={{margin: '10px 0 0 0'}}>  
          <div className='six columns'>
            <label>DB Name</label>
            <input
              className='u-full-width'
              placeholder='DB Name'
              type='text'
              onChange={this.props.handleDbNameChanged}
              value={this.props.myData.dbName}
            />
          </div>
        </div>
        <div className='row' style={{margin: '10px 0 0 0'}}>
          <div className='six columns'>
            <label>Host</label>
            <input
              className='u-full-width'
              placeholder='Host'
              type='text'
              onChange={this.props.handleHostChanged}
              value={this.props.myData.host}
            />
          </div>
        </div>
        <div className='row' style={{margin: '10px 0 0 0'}}>
          <div className='six columns'>
            <label>Port</label>
            <input
              className='u-full-width'
              placeholder='Port'
              type='text'
              disabled
              onChange={this.props.handlePortChanged}
              value={this.props.myData.port}
            />
          </div>
        </div>
        </section> : null}
      </div>
    )
  }
}
