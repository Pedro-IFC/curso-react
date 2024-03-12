import Card from './componentes/layout/Card.jsx';
import ParOuImpar from './componentes/condicional/parOuImpar.jsx';
import Aleatorio from './componentes/basicos/Aleatorio.jsx';
import ComParametro from './componentes/basicos/ComParametro.jsx';
import Primeiro from './componentes/basicos/Primeiro.jsx';
import Familia from './componentes/basicos/Familia.jsx';
import FamiliaMembro from './componentes/basicos/FamiliaMembro.jsx';
import ListaAlunos from './componentes/repeticao/ListaAlunos.jsx';
import Produtos from './componentes/repeticao/Produtos.jsx';
import UsuarioInfo from './componentes/condicional/UsuarioInfo.jsx';
import DiretoPai from './componentes/comunicacao/DiretaPai.jsx';
import IndiretaPai from './componentes/comunicacao/IndiretaPai.jsx';
import Input from './componentes/formulario/input.jsx';
import Contador from './componentes/contador/contadors.jsx';
import Megasena from './componentes/megasena/megasena.jsx';

const App = _ =>
    <div className='Cards'>
        <Card titulo="Megasena" color="#444">
            <Megasena digitos={10}>
            </Megasena>
        </Card>
        <Card titulo="Contador" color="#444">
            <Contador numeroInicial={10}>
            </Contador>
        </Card>
        <Card titulo="Inputs" color="#444">
            <Input>
            </Input>
        </Card>
        <Card titulo="Comunicação Indireta" color="#444">
            <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo="Comunicação direta" color="#444">
            <DiretoPai></DiretoPai>
        </Card>
        <Card titulo="Usuário Info" color="#444">
            <UsuarioInfo usuario={{nome:'Pedro'}}></UsuarioInfo>
        </Card>
        <Card titulo="Par ou Impar" color="#444">
            <ParOuImpar numero={21}></ParOuImpar>
        </Card>
        <Card titulo="Produtos" color="#444">
            <Produtos>
            </Produtos>
        </Card>
        <Card titulo="Repetição" color="#444">
            <ListaAlunos>
            </ListaAlunos>
        </Card>
        <Card titulo="Família" color="#444">
            <Familia sobrenome="Ferreira">
                <FamiliaMembro nome="Pedro"></FamiliaMembro>
                <FamiliaMembro nome="Emanuel"></FamiliaMembro>
                <FamiliaMembro></FamiliaMembro>
                <FamiliaMembro></FamiliaMembro>
            </Familia>
        </Card>
        <Card titulo="Aleatório" color="#000">
            <Aleatorio max="12" min="1"></Aleatorio>
        </Card>
        <Card titulo="Com parâmetro" color="#222">
            <ComParametro texto="Teste param"></ComParametro>
        </Card>
        <Card titulo="Primeiro">
            <Primeiro></Primeiro>
        </Card>
    </div>

export default App;