import './style/classificacao.sass'

import Tabela from '../assets/tabela-imc.webp'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Classificacao = () => {
    return(
        <>
            <div id="container-classificacao">
                <div id="img">
                    <img src={Tabela} alt="" />
                </div>
            </div>
        </>
    )
}

export default Classificacao;