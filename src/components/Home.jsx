import './style/home.sass'

import { BsArrowDownCircleFill } from 'react-icons/bs'
import { useState } from 'react'

const Home = () => {

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const [result, setResult] = useState("");

    const calcImc = () => {
        let formula = (peso/(altura*altura)).toFixed(2);
        console.log(formula);

        setResult(formula);

        setPeso("")
        setAltura("")
    }

    const limpar = () => {
        setResult("")
    }

    return(
        <>
            <div id="container-home">
                <h1>Calcule seu IMC</h1>
                <p>Informe seus dados</p>
                <p id='important'><span>Importante!</span> não use vírgula, somente ponto.</p>

                <div id="form">
                    <input type="text" placeholder='Digite seu peso. Ex 70' value={peso}
                    onChange={(e) => setPeso(e.target.value)}/>
                    <input type="text" placeholder='Digite sua altura. Ex 80.5' value={altura}
                    onChange={(e) => setAltura(e.target.value)}/>
                </div>

                <div id="container-btn">
                    <button onClick={calcImc}>calcular</button>
                    <button id='btn-limpar' onClick={limpar}>limpar</button>
                </div>

                <div id="imc-result">
                    IMC : <span id='resultado'>{result}</span>
                </div>

                <div id="icon-direction">
                    <a href="#container-classificacao">
                        <span>classificação</span>
                        <BsArrowDownCircleFill/>
                    </a>
                </div>
                
            </div>
        </>
    )
}

export default Home;