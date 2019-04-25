import React, { Component } from 'react'

export class Weather extends Component {
  render() {
    return (
      <div className="weather__info">
        
        { 
          this.props.city && this.props.country && <p> Location : 
          <span></span>
          </p>
          }
        { 
          this.props.temperature && <p>Temperature : 
          { this.props.temperature } 
          
          </p>
          }
        { 
          this.props.humidity && <p>Humidité : 
          { this.props.humidity }
          </p>
          }
        { 
          this.props.city && <p>Conditions : 
          { this.props.description } 
          </p>
          }
        
        { 
          this.props.error && <p>{ this.props.error }
          </p>
          }
        
      </div>
    )
  }
}

export default Weather;
