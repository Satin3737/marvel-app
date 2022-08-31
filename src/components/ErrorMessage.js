import errorGif from '../resources/images/error.gif'

const ErrorMessage = () => {
    return (
        <img className="error" src={errorGif} alt="error"/>
        // <img alt="error" src={process.env.PUBLIC_URL + '/error.gif'}/>
    )
}

export default ErrorMessage;