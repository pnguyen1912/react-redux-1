import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import People from './components/People'
import Add from './components/Add'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageNum: 'home'
    }
  }



  changePage = (val) => {
    this.setState({ pageNum: val })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link onClick={() => this.setState({ pageNum: 'home' })} to='/' params="" ><header>People Rolodex</header></Link>
          <ul className="menu">
            <li className={this.state.pageNum === 'home' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'home' })}> <Link style={{ paddingLeft: '20px' }} to='/' params="" >Home</Link></li>
            <li className={this.state.pageNum === 'people' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'people' })} ><Link style={{ paddingLeft: '20px' }} to='/people'>People</Link></li>
            <li className={this.state.pageNum === 'add' ? 'is-active' : ''} onClick={() => this.setState({ pageNum: 'add' })} ><Link style={{ paddingLeft: '20px' }} to='/add'>Add People</Link></li>
          </ul>
          <Route exact path='/' render={() => <Home />} />
          <Route path='/people' render={() => <People changePage={this.changePage} />} />
          <Route path='/add' render={() => <Add />} />
        </div>
      </BrowserRouter >
    );
  }
}


// const mapStateToProps = state => {
//   return {
//     people: state.people,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addPeople: person => dispatch(addPeople(person)),
//   }
// }

export default App;
