import bg1 from '../static/bg/altoVoltaje.jpg';
import bg2 from '../static/bg/elengy.jpg';
import bg3 from '../static/bg/elengy-desinfection.jpg';
import bg4 from '../static/bg/teamElengy.jpg';


export const state = () => ({
    all: [
        /* You can added more items  */
        {
            background: bg1,
            href: '/nosotros',
            title: 'Somos una empresa Peruana dedicada al rubro de Ingeniería Eléctrica.',
            desc: 'Te invitamos a conocer más acerca de nosotros.',
            nameEnlace: 'Leer más aquí'
        },
        {
            background: bg2,
            href: '/servicios',
            title: 'Soluciones y servicios integrales para sus proyectos',
            desc: 'Desarrollamos ingeniería, estudios eléctricos, sistemas de control y protección.',
            nameEnlace: 'Conoce más aquí'
        },
        {
            background: bg3,
            href: '/portafolio',
            title: 'Elengy, un aliado en la lucha contra el Coronavirus',
            desc: 'Te invitamos a leer acerca de nuestra cabina de desinfección en la lucha contra el covid-19.',
            nameEnlace: 'Conoce más aquí'
        },
        {
            background: bg4,
            href: '/servicios',
            title: 'Soluciones y servicios integrales para sus proyectos',
            desc: 'Contamos con especialistas en subestaciones de media, alta y extra alta tensión.',
            nameEnlace: 'Conoce más aquí'
        },

    ]
})