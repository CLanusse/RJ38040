import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss'

const Loader = () => {

    return (
        <div className='loader'>
            <Spinner animation="border" variant="primary"/>
        </div>
    )
}

export default Loader