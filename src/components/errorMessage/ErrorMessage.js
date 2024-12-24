import img from './error.gif'
const ErrorMessage = () => {
    // Глянути 004 17 - 18мин як путь до паблыка добавити
    return (
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}} src={img} alt='none'></img>
    )
}

export default ErrorMessage;