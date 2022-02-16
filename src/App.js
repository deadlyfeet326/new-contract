import BSC from './routes/BSC'
import {useState, useEffect} from 'react'
import Home from './routes/Home'
import ETH from './routes/ETH'
import AVAX from './routes/AVAX'
import { BrowserRouter, Routes , Route, useRoutes} from 'react-router-dom'


//const socket = io.connect('http://localhost:5000')

function App() {
const[page, setPage] = useState("home")

    return (

        <div>
            {/* { page == "home" && <div>
            <button onClick={() => setPage("bsc")}> BSC </button>
            <button onClick={() => setPage("eth")}> ETH </button>
            <button onClick={() => setPage("avax")}> AVAX </button>
            </div>}

            {
                page == "bsc" &&
                <BSC />
            }
            {
                page == "eth" &&
                <ETH />
            }
            {
                page == "avax" &&
                <AVAX />
            } */}

        <BrowserRouter >
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/bsc" element ={<BSC />} />
                <Route path="/eth" element = {<ETH />} />
                <Route path="/avax" element = {<AVAX />} />
            </Routes>
        </BrowserRouter>

    </div>
        )
}

export default App;
