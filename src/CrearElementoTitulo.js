import imagen from './recursos/simone-secci-49uySSA678U-unsplash.jpg'
//generar nuestros elementos HTML//
function CrearElementoTitulo() {
    return (
        <div>
            <h1> Adivina mi numero</h1>
            <hr/>
            <img src={imagen} alt='logo'></img>
     </div>  
   )
    
}
export default CrearElementoTitulo;