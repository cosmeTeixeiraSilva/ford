import { Link } from "react-router-dom";
import './style.css'
import Logo from '../../img/territorry.webp'
function Home() {

    return (
        <div className="home">

            <img src={Logo} width="30%" alt="logo" />
            <div className="texto">
                <h1>Ford Terrytory 2023</h1>
                <p>O Territory 2023 conta com itens como 6 airbags, alarme, câmera de 360°, controles de tração e estabilidade, faróis em LED, alerta de ponto cego, piloto automático adaptativo, alerta de mudança de faixa, alerta de colisão frontal, frenagem automática de emergência, assistente de estacionamento, retrovisor interno fotocrômico, rebatimento elétrico dos retrovisores, teto solar panorâmico, bancos revestidos em couro, banco do motorista com ajustes elétricos e ventilação, chave presencial, freio de estacionamento elétrico e sistema multimídia com espelhamento da tela do celular e carregador de celular por indução.</p>

            </div>

        </div>
    )

}
export default Home;