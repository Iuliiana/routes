import './App.css';
import {Route, Routes} from "react-router-dom";
import {Notfoundpage} from "./pages/Notfoundpage";
import {HomePage} from "./pages/HomePage";
import {DriftPage} from "./pages/DriftPage";
import {TimeAttackPage} from "./pages/TimeAttackPage";
import {ForzaPage} from "./pages/ForzaPage";
import {Menu} from "./components/nav/Menu";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Menu/>}>
                <Route path="/" index element={<HomePage/>}/>
                <Route path="/drift" element={<DriftPage/>}/>
                <Route path="/timeattack" element={<TimeAttackPage/>}/>
                <Route path="/forza" element={<ForzaPage/>}/>
                <Route path='*' element={<Notfoundpage/>}/>
            </Route>
        </Routes>
    );
}


export default App;
