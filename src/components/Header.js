import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './css/Header.css'
import {DataContext} from './Context'

class Header extends Component{
  static contextType=DataContext
  state={
    toggle:false
  }

  menuToggle=()=>{
    this.setState({toggle:!this.state.toggle})
  }

  render(){
    const {toggle}=this.state
    const{cart,auth}=this.context
    return(
      <header>
        <div className="menu" onClick={this.menuToggle}>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          {/*<i className="fa fa-times" aria-hidden="true"></i>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
        </div>
        <div className="logo">
          <h1><Link to="/">Nike</Link></h1>
        </div>
        <nav>
          <ul className={toggle ? "toggle" : ""}>
            {/*<li><Link to="/">Home</Link></li>*/}
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">{auth===true ?"Logout":"Login/Register"}</Link></li>
            <li className="close" onClick={this.menuToggle}><i className="fa fa-times fa-2x"></i></li>
          </ul>
          <div className="nav-cart">
            <span>{cart.length}</span>
            <Link to="/cart">
            <i className="fa fa-shopping-cart fa-1x shop" ></i>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header