
import Modal from 'react-bootstrap/Modal'
import { useState, useEffect } from 'react'
import { CiEdit } from 'react-icons/ci';
import axios from 'axios';
import Formulario from './Formulario';


function Editar({id}) {
    const [show,setShow] = useState(false)
    const [funcionario, setFuncionario] = useState([])

    useEffect(() =>{
        axios.get("https://apiaulas.thiagodev502.repl.co/funcionarios/" + id)
        .then((resposta)=>{
            setFuncionario(resposta.data)
        }).catch((error)=>{
            console.log(error)
        })

    }, [])


    return(
     <div>
        <span style={{cursor:"pointer"}} onClick={() => setShow(true)} className='text-primary'><CiEdit /></span>
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <h2>Editar</h2>
            </Modal.Header>
            <Modal.Body>
                <Formulario funcionario={funcionario} setShow={setShow}/>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
     </div>
    )
 
}
export default Editar