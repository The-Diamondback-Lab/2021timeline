import React from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'

import Spinner from './components/Spinner'
import Header from './components/Header'
import Footer from './components/Footer'
import Event from './components/Event'
// import ReverseEvent from './components/ReverseEvent'
import Title from './components/Title'

import './styles/main.css'
import EventInfo from './data/EventInfo.json'

class Home extends React.Component {
  constructor() {
    super()
    this.state = { loaded: false, startFadeOut: false }
  }

  componentDidMount() {
    // After main component finishes mounting, wait 500ms
    // and change "loaded" to true and "startFadeOut" to true.
    // This will cause the spinner to start fading out.
    // This setState will call another timeout (750ms later)
    // to change the loaded to true and fade out to false,
    // indicating to the spinner that it should not display

    setTimeout(() => {
      // Indicating spinner to start fading out
      this.setState({
        loaded: true,
        startFadeOut: true
      }, () => {
        // Eventually tell spinner to never display
        setTimeout(() => {
          this.setState({
            loaded: true,
            startFadeOut: false
          })
        }, 1000)
      })
    }, 1000)
  }

  render() {
    return (
      <div id='Home'>
        <Spinner
          loaded={this.state.loaded}
          startFadeOut={this.state.startFadeOut} />
        <Helmet>
          <title>2020-2021 Timeline</title>
          <link rel='icon' href='favicon.ico' />
        </Helmet>

        <Header />
        <p></p>
        <Title />
        {EventInfo.map((item) =>
          <Event key={item.Title} date={item.Date} title={item.Title} desc={item.Description} image={item.Image} link={item.Link} />
        )}
        <p></p>
        <Footer style={{ display: 'inline-block' }} />
      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('app'))
