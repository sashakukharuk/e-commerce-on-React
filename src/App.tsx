import React, {useContext} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css'
import {Header} from './Components/Header/Header'
import {Preloader} from './Components/Component/Preloader/Preloader'
import {Sidebar} from './Components/Sidebar/Sidebar'
import {Footer} from './Components/Footer/Footer'
import {Login} from './Components/Content/Auth/Login/Login'
import {Register} from './Components/Content/Auth/Register/Register'
import {Order} from './Components/Content/Order/Order'
import {Positions} from './Components/Content/Positions/Positions'
import {Position} from './Components/Content/Positions/Position/Position'
import {HeaderState} from './State/HeaderState'
import {PositionsState} from './State/PositionsState'
import {PositionState} from './State/PositionState'
import {CategoriesState} from './State/CategoriesState'
import {AuthState} from './State/AuthState'
import {OrderState} from './State/OrderState'
import {Message} from './Components/Component/Message/Message'
import {BasketContext} from "./State/BasketState";

function App() {
  const {isPreloader} = useContext(BasketContext)
  return <BrowserRouter>
    <HeaderState>
      <Header/>
    </HeaderState>
    <Message/>
    {isPreloader && <Preloader/>}
    <div className='row'>
      <CategoriesState>
        <Sidebar/>
      </CategoriesState>
      <div className='content'>
        <AuthState>
          <Route path='/login' render={() => <Login/>}/>
        </AuthState>
        <AuthState>
          <Route path='/register' render={() => <Register/>}/>
        </AuthState>
        <OrderState>
          <Route path='/order/:id?' render={() => <Order/>}/>
        </OrderState>
        <PositionsState>
          <Route path='/positions/:id' render={() => <Positions/>}/>
        </PositionsState>
        <PositionState>
          <Route path='/position/:id' render={() => <Position/>}/>
        </PositionState>
      </div>
    </div>
    <Footer/>
  </BrowserRouter>
}

export default App;
