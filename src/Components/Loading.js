import { Component } from 'react'
import loading from './loading.gif'

export default class Loading extends Component {
  
    render() {
        return (
            // 
            <div className="text-center">
                <img style={{height:'20px'}} className="my-4" src={loading} alt="loading" />
                
            </div>
        )
    }
}
