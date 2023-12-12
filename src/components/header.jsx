import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button  from 'react-bootstrap/Button'
function Header({btn}){
    function sair(){
        localStorage.removeItem("key")
        location.href="/"
    }
    return(
        <header>
            <Navbar variant='dark'>
                <Container>
                    <Navbar.Brand>
                        Minha Empresa
                    </Navbar.Brand>
                    {btn ?(
                    <div className='d-flex gap-3'>
                        <Button>Adicionar</Button>
                        <Button onClick={sair}>Sair</Button>
                    </div>
                ):"" }
                </Container>
            </Navbar>
        </header>
    )
}
export default Header