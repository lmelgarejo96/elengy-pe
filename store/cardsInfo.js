import services from '../static/offer.png';
import team from '../static/cards/team.svg';
import portafolio from '../static/cards/portafolio.svg';


export const state = () => ({
    allInfo: [{
            title: 'Nuestros servicios',
            description: 'En Elengy ofrecemos una variedad de soluciones dentro de nuestras 4 clases de servicios.',
            img: services,
            redirectTo: '/servicios'
        },
        {
            title: '¿Quiénes somos?',
            description: 'Descubre nuestra misión, visión, valores y características como empresa.',
            img: team,
            redirectTo: '/nosotros'
        },
        {
            title: 'Nuestro Portafolio',
            description: 'Revisa detalladamente nuestro portafolio de trabajos culminados.',
            img: portafolio,
            redirectTo: '/portafolio'
        }
    ]
})