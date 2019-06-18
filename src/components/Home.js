import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  unique = (val) => {
    let newAr = []
    val.map(item => newAr.push(item.favorite))
    var unique = newAr.filter((item, i, ar) => ar.indexOf(item) === i)
    return unique
  }

  render() {
    return (
      <div>
        {this.props.people.length > 0 && (


          <figure data-title="Summary">
            <figcaption>
              Number of People: {this.props.people.length} People
          </figcaption>

            <figcaption>
              Favorite Coding Languages:
            <ul>
                {this.unique(this.props.people).map(item =>
                  <li>{item}</li>
                )}
              </ul>

            </figcaption>

          </figure>)}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    people: state.people,
  }
}

export default connect(mapStateToProps)(Home)