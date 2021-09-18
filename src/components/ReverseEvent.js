import React from 'react'

class ReverseEvent extends React.Component {
  render() {
    return (
            <>
                <div className="rbox">
                    <div className = "rleft-border">
                    </div>
                    <div className = "rright-border">
                    </div>
                </div>
                <div className = "rbox">
                    <div className = "rdate">
                        <div className = "rdate-text">{this.props.date}</div>
                    </div>
                    <div className = "rcontent">
                        <div className="rtitle-and-content-box">
                            <p className= "rtitle" ><a href="#">{this.props.title}</a></p>
                            <p className = "revent-description">{this.props.desc}</p>
                        </div>
                        <div className = "rhl">
                        </div>
                    </div>
                </div>
            </>
    )
  }
}

export default ReverseEvent
