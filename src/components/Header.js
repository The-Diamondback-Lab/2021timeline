import React from 'react'
import bgImage from '../assets/doge.jpg'

export default class Header extends React.Component {
  render() {
    return (
      <div className='header-bg'>
        <div><img id="background-image" src={bgImage} /></div>
        <div className='header-content'>
          <div id="title-text">2020 - 2021</div>
          <div id="subtitle-text">A Year In Review</div>
        </div>
      </div>
    )
  }
}
