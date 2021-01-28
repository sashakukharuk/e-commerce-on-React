import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {useEventEmitter} from '@umijs/hooks'

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
import {Message} from './Components/Component/Message/Message'
import {Modal} from './Components/Component/Modal/Modal'
import {PositionType} from "./State/Types/PositionType";
import {PreloaderProvider} from "./State/Preloader/PreloaderProvider";
import {MessageProvider} from "./State/Message/MessageProvider";
import {HeaderProvider} from "./State/Header/HeaderProvider";
import {PositionProvider} from "./State/Position/PositionProvider";
import {PositionsProvider} from "./State/Positions/PositionsProvider";
import {CategoriesProvider} from "./State/Categories/CategoriesProvider";
import {BasketProvider} from "./State/Basket/BasketProvider";
import {AuthProvider} from "./State/Auth/AuthProvider";
import {OrderProvider} from "./State/Order/OrderProvider";
import {MainPage} from "./Components/Content/Main/MainPage";
import {MainProvider} from "./State/Main/MainProvider";
import {ChatProvider} from "./State/Chat/ChatProvider";
import {Chat} from "./Components/Content/Chat/Chat";
import {Menu} from "./Components/Menu/Menu";
import {FooterProvider} from "./State/Footer/FooterProvider";

function App() {
    const activeLi$ = useEventEmitter<string>()
    const preloader$ = useEventEmitter<boolean>()
    const toast$ = useEventEmitter<string>()
    const openModal$ = useEventEmitter<void>()
    const addPositionOrder$ = useEventEmitter<{position: PositionType, quantity: number}>()
    const addPositionBasket$ = useEventEmitter<{position: PositionType, quantity: number}>()
    const addOrders$ = useEventEmitter<{orders: PositionType[]}>()
    const clearOrders$ = useEventEmitter<void>()
    const openChat$ = useEventEmitter<void>()
    const logOut$ = useEventEmitter<void>()
    const clearProfile$ = useEventEmitter<void>()

    return <BrowserRouter>
        <HeaderProvider toast$={toast$}>
            <Header activeLi$={activeLi$} openModal$={openModal$} logOut$={logOut$}/>
        </HeaderProvider>
        <MessageProvider toast$={toast$}>
            <Message/>
        </MessageProvider>
        <div>
            <BasketProvider toast$={toast$} openModal$={openModal$} addPositionBasket$={addPositionBasket$} clearOrders$={clearOrders$}>
                <Modal activeLi$={activeLi$} addOrders$={addOrders$}/>
            </BasketProvider>
        </div>
        <div className='preloader'>
            <PreloaderProvider preloader$={preloader$}>
                <Preloader/>
            </PreloaderProvider>
        </div>
        <div className='row'>
            <CategoriesProvider toast$={toast$} preloader$={preloader$} activeLi$={activeLi$}>
                <Sidebar/>
            </CategoriesProvider>
            <div className='content'>
                <MainProvider preloader$={preloader$}>
                    <Route exact path='/' render={() => <MainPage activeLi$={activeLi$}/>}/>
                </MainProvider>
                <AuthProvider toast$={toast$} preloader$={preloader$} logOut$={logOut$} clearProfile$={clearProfile$}>
                    <Route path='/login' render={() => <Login/>}/>
                </AuthProvider>
                <AuthProvider toast$={toast$} preloader$={preloader$} logOut$={logOut$} clearProfile$={clearProfile$}>
                    <Route path='/register' render={() => <Register/>}/>
                </AuthProvider>
                <OrderProvider
                    clearOrders$={clearOrders$}
                    toast$={toast$}
                    preloader$={preloader$}
                    addPositionOrder$={addPositionOrder$}
                    addOrders$={addOrders$}
                    clearProfile$={clearProfile$}
                >
                    <Route path='/order/:id?' render={() => <Order/>}/>
                </OrderProvider>
                <PositionsProvider toast$={toast$} preloader$={preloader$}>
                    <Route path='/positions/:id' render={() => <Positions activeLi$={activeLi$}/>}/>
                </PositionsProvider>
                <PositionProvider toast$={toast$} preloader$={preloader$}>
                    <Route path='/position/:id' render={
                        () => <Position
                            addPositionBasket$={addPositionBasket$}
                            addPositionOrder$={addPositionOrder$}
                        />}
                    />
                </PositionProvider>
                <ChatProvider openChat$={openChat$}>
                    <Chat/>
                </ChatProvider>
                <Menu openModal$={openModal$} openChat$={openChat$}/>
            </div>
        </div>
        <FooterProvider>
            <Footer/>
        </FooterProvider>
    </BrowserRouter>
}

export default App;
