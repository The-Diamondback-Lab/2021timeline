import React from 'react'

import credits from '../data/credits.json'
import logoPath from '../assets/dbk-logo.png'

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="credits"><p>Credits</p></div>
        {credits.map((creditLine, idx) => <p key={`credit-${idx}`}>{creditLine.info}</p>)}
        <a href="https://dbknews.com" target="_blank" rel="noopener noreferrer">
          <img className="footer-logo" src={logoPath} alt="The Diamondback Logo"></img>
        </a>
      </footer>
    )
  }
}
