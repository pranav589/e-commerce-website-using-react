import React,{Component} from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from 'react-router-dom'
import Cart from './section/Cart'
import Payment from './section/Payment'
import Contact from './section/Contact'
import Login from './section/Login'
import SignUp from './section/SignUp'

 class Section extends Component{
  render(){
    return(
      <section>
        <Route path="/" component={Products} exact/>
        <Route path="/product/:id" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/payment" component={Payment}/>
        <Route path='/contact' component={Contact}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
      </section>
    )
  }
}

export default Section