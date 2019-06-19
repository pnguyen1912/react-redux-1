import React from 'react'
import { connect } from 'react-redux'
import { addPeople } from '../state/action'
class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      town: '',
      favorite: '',
      extra: '',
      success: false,
      savedname: ''
    }
  }

  checkInput(event) {
    if (event === '') {
      console.log('Cannot be empty')
      this.setState({ success: false })
      return false
    } else return true
  }

  render() {
    return (
      <div>
        <label>Full Name</label>
        <input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} ></input>
        <p className="form-error is-visible" >*This is a required field and cannot be left blank</p>
        <label>Hometown</label>
        <input type="text" value={this.state.town} onChange={(e) => this.setState({ town: e.target.value })} ></input>
        <label> Favorite Coding Language</label>
        <select value={this.state.favorite} onChange={(e) => this.setState({ favorite: e.target.value })} >
          <option value="" disabled>Choose a Language</option>
          <option value="JS">Javascript</option>
          <option value="Python">Python</option>
          <option value="Ruby">Ruby</option>
          <option value=".Net">.Net</option>
          <option value="SQL">SQL</option>
          <option value="C#">C#</option>
          <option value="C++">C++</option>
          <option value="objectiveC">Objective C</option>
          <option value="other">Other</option>
        </select>
        <p className="form-error is-visible" >*This is a required field and cannot be left blank</p>

        <label>Interesting Fact</label>
        <textarea name="" id="" cols="30" rows="6" value={this.state.extra} onChange={(e) => this.setState({ extra: e.target.value })} ></textarea>
        <button className='button' style={{ height: '50px', width: '100%' }} onClick={() => {
          if (this.checkInput(this.state.name) &&
            this.checkInput(this.state.favorite)) {
            this.props.addPeople(this.state)

            this.setState({ success: true, savedname: this.state.name, name: '', town: '', favorite: '', extra: '' })
          }
        }}
        >Add</button>

        {this.state.success && this.state.savedname && (
          <div className='callout success'>{this.state.savedname} was successfully added!</div>
        )}
      </div >
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addPeople: person => dispatch(addPeople(person)),
  }
}

export default connect(null, mapDispatchToProps)(Add)