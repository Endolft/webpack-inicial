 import '../css/componentes.css';

 import webapackLogo from '../assets/img/webpack-logo.png';

 export const saludar =(nombre)=>{

    console.log('imprimiendo etiqueta h1');
    
    const h1= document.createElement('h1')
    
    h1.innerText=`hola, ${nombre}`;
    
    document.body.append(h1);
   
  /*  const img= document.createElement('img')
   img.src=webapackLogo;
   document.body.append(img); */

   }


















