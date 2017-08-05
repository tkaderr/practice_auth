import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//use class because we are using helper function

class Header extends Component {

  renderContent(){
    switch (this.props.auth){
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login With Google</a></li>
        );
      default:
        return (
          <li><a href="/api/logout">Logout</a></li>
        );
    }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
          <div className ="nav-wrapper">
            <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
              Emaily
            </Link>
                <ul className="right">
                      {this.renderContent()}
                </ul>
          </div>
      </nav>
    );
  }
}

//return statement passes state to the header component as props
function mapStateToProps(state){
  return {auth:state.auth};
}

//first argument is passing mapstatetoprop
export default connect(mapStateToProps)(Header);
