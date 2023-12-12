import { Form, FormLabel } from 'react-bootstrap'
import form from 'react-bootstrap/Form'
function Formulario() {

    return (
        <Form>
            <Form.Group>
                <Form.Label>
                    Nome:
                </Form.Label>
                <Form.control type="text"></Form.control>
            </Form.Group>
        </Form>
    )

}
export default Formulario