import React,{ Component } from 'react'
import '../components/css/PopMSG.css'


class PopMSG extends Component {
    state = {
  
    }
  
    componentDidMount(){
  
    }
  
    render() {
      return(
        <div id="msg-popup-container" className="transition" style={{display: this.props.display}}>
          <div id="msg-box" className="transition">
            <strong><span id="msg-text">{this.props.text}</span></strong>!
          </div>
        </div>
      )
    }
  }
  
  export default PopMSG

  