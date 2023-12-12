import { ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { CiEdit } from 'react-icons/ci';
import Formulario from './Formulario';


function Editar({id}){
    const [show,setShow] = useState(false)
    const [funcionario, setFuncionario] = useState(false)

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
                <Formulario id={funcionario} setShow={setShow}/>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
     </div>
    )
 
}
export default Editar