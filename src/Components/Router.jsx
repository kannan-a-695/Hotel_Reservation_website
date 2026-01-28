import { Routes,Route} from 'react-router-dom'
import { Contactus } from "./Contactus"
import { About } from "./About"
import { Home } from "./Home"
import { Booking } from "./Booking"
import { Location } from "./Location"
import { Room } from "./Room"
import { Login } from './Login'

export const Router=()=>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contactus/>}/>
                <Route path='/location' element={<Location/>}/>
                <Route path='/booking' element={<Booking/>}/>
                <Route path='/room' element={<Room/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
    )
}