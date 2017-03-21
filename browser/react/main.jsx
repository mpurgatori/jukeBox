import React from 'react'
import Sidebar from './sidebar.js'
import Footer from './footer.js'

class Main extends React.Component {

constructor(){
  super()
  this.state = {
    greet: 'Hello Mike'
  }
}

render() {
  return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <Footer />
      </div>
    )
  }
}

export default Main
