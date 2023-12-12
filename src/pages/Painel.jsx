import Header from "../components/header"
import Conteudo from "../components/Conteudo"
import Tabela from "../components/Tabela"
function Painel(){
    return(
        <>
            
            <Header btn={true}/>
            <Conteudo>
                <h2>Lista de funcionários</h2>
                <Tabela/>
            </Conteudo>
        </>
    )
}
export default Painel