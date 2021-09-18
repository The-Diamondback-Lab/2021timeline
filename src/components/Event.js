import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
  render() {
    return (
            <>
                <div className = "box">
                    <div className = "left-border">
                    </div>
                    <div className = "right-border">
                    </div>
                </div>
                <div className = "box">
                    <div className = "content">
                        <div className = "title-content-picture-box">
                            <div className ="title-and-content-box">
                <p className="title" ><a href={this.props.link}>{this.props.title}</a></p>
                                <p className = "event-description">{this.props.desc}</p>
                            </div>
                            <div><img className = "event-img" src={this.props.image} alt="#"/></div>
                        </div>
                        <div className = "hl"></div>
                    </div>
                    <div className = "date">
                        <div className = "date-text">{this.props.date}</div>
                    </div>
                </div>
            </>
    )
  }
}

Event.propTypes = {
  children: PropTypes.node.isRequired
}

export default Event
