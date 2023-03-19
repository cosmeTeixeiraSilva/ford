
import { Route, Routes } from 'react-router-dom';
import Video from '../../pages/Video';
import Home from '../../pages/Home';
import Contato from '../../pages/Contato';


const RoutesApp = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Contato" element={<Contato />} />
                <Route path="/Video" element={<Video />} />
            </Routes>
        </div>

    )

}
export default RoutesApp;