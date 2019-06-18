import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: ''
    };
  }



  render() {
    return (
      <div>
        {this.props.people.length > 0 ? (
          <div>
            <div>
              <ul className="menu">
                {this.props.people.map(item => (
                  <div>
                    <button
                      value={item.name}
                      className={this.state.highlight === `${item.name}` ? 'button' : 'button tertiary'}
                      style={{
                        paddingLeft: '20px',
                        paddingRight: '20px'
                      }}
                      onClick={() => this.setState({ item, showing: true, highlight: `${item.name}` })
                      }
                    >{item.name.split(' ')[0]}</button>

                  </div>
                )
                )}
              </ul>
            </div>

            {this.state.item && (
              <div id='details'>
                <div className="card">
                  <div className="card-divider">Full Name:
              {this.state.item.name}
                  </div>
                  <div className="card-section">
                    <h4>Hometown:{this.state.item.town}</h4>
                    <h4>Favorite Coding Language: {this.state.item.favorite}</h4>
                    <p>{this.state.item.extra}</p>
                  </div>
                </div>
              </div>
            )}
          </div>)
          :
          (
            <div><h3>There are currently no people in here... <Link to='/add' onClick={() => this.props.changePage('add')}>Add Some</Link></h3></div>

          )
        }


      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    people: state.people,
  }
}


export default connect(mapStateToProps)(People)