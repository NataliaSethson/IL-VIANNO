import './Inicio.css'

const Inicio = () => {
    return (
        <div className='inicioConteiner'>
            <img src = '/resto.jpg' alt='' className='imgInicio'/>
            <h3 className='textInicio'>
                Con más de 15 años de trayectoria, IL VIANNO se ha consolidado como un referente de la gastronomía italiana. Nuestra misión es ofrecer una experiencia culinaria única, combinando ingredientes frescos y de calidad con recetas tradicionales que reflejan el verdadero espíritu de Italia.
                <br></br>
                Cada plato, desde nuestras pastas artesanales hasta nuestras pizzas horneadas al estilo clásico, está cuidadosamente elaborado para brindar sabor, autenticidad y excelencia en cada bocado.
                <br></br>
                En IL VIANNO, no solo servimos comida; creamos momentos memorables para familias, amigos y amantes de la buena gastronomía. Nuestra pasión por la tradición y la innovación se refleja en cada detalle, desde la atención personalizada hasta la ambientación de nuestro espacio.
            </h3>
            <h4 className='descubriInicio'>
                Descubrí la esencia de Italia en cada visita y dejate sorprender por la experiencia IL VIANNO.
            </h4>
        </div>
    )
}

export default Inicio