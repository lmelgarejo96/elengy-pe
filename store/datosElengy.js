import logo from '../static/logo.webp';

import imgNosotros from '../static/team-elengy.jpg';
import imgCaracteristicas from '../static/offer.svg';
import videoNosotros from '../static/video/elengy.mp4';
import bgNosotros from '../static/bg/elengy.jpg';
import imgMision from '../static/offer.png';
import imgVision from '../static/vision.svg';
import imgValores from '../static/valores.svg';

export const state = () => ({
    datos: {
        empresa: 'Elengy SAC',
        logoEmpresa: logo,
        direccion: 'Manzana C Lote 3 Asociación Casuarinas de Santa Rosa',
        distrito: 'San Martín de Porres',
        provincia: 'Lima',
        pais: 'Perú',
        telefonoPrincipal: '(01) 393 5206',
        telefonos: [
            '(01) 393 5206',
        ],
        horarioAtención: 'Lunes a viernes de 09:00 am a 06:00 pm',
        correos: [
            'elengy@elengy.com'
        ],
        frase: 'Engineering for the world',
        bgNosotros: bgNosotros,
        nosotros: 'ELENGY es una empresa, con sede central en Lima (Perú) y filial en Santiago (Chile), que cuenta con alto potencial humano especializado en planeamiento, administración y ejecución de proyectos electromecánicos y de telecomunicaciones. Contamos con especialistas en subestaciones de media, alta y extra alta tensión, desarrollamos ingeniería, estudios, sistemas de control y protección.',
        imgNosotros: imgNosotros,
        videoNosotros: videoNosotros,
        mision: {
            desc: 'Ofrecer el mejor servicio en pruebas primarias, de protección y secundarías de Ingeniería eléctrica a nuestros clientes.',
            img: imgMision,
        },
        vision: {
            desc: 'Ser la opción número uno en soluciones de Ingeniería eléctrica a nivel nacional.',
            img: imgVision,

        },
        valores: {
            img: imgValores,
            list: [
                'Responsabilidad',
                'Compromiso',
                'Puntualidad',
                'Calidad',
                'Ética',
            ]
        },
        imgCaracteristicas: imgCaracteristicas,
        caracteristicas: [{
                title: 'Calidad',
                icons: 'fas fa-award',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus.'
            },
            {
                title: 'Profesionalidad',
                icons: 'fa fa-users',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus.'
            },
            {
                title: 'Seguridad',
                icons: 'fa fa-shield',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus.'
            },
            {
                title: 'Garantía',
                icons: 'fas fa-check-circle',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptatibus.'
            },
        ],
        descripcion: 'Somos una empresa peruana dedicada al rubro de Ingeniería Electrica. Contamos con especialistas en subestaciones de media, alta y extra alta tensión, desarrollamos ingeniería, estudios, sistemas de control y protección.',
        navegacion: [{
                name: 'Inicio',
                redirectTo: '/',
                hasSubItems: false,
            },
            {
                name: 'Nosotros',
                redirectTo: '/nosotros',
                hasSubItems: true,
            },
            {
                name: 'Servicios',
                redirectTo: '/servicios',
                hasSubItems: true,
            },
            {
                name: 'Portafolio',
                redirectTo: '/portafolio',
                hasSubItems: false,
            },
            {
                name: 'Contacto',
                redirectTo: '/contacto',
                hasSubItems: false,
            },
        ],
        socialItems: [
            /* Icons of font awesome */
            /* your decide what icon is showed  on footer*/
            {
                href: 'https://api.whatsapp.com/send?phone=51957786882&text=Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20por%20del%20favor.',
                icon: 'fab fa-whatsapp',
                bg: '#25d366',
                footer: false
            },
            {
                href: 'https://www.messenger.com/t/1674577982841908',
                icon: 'fab fa-facebook-messenger',
                bg: '#448aff',
                footer: false
            },
            {
                href: 'https://www.facebook.com/elengysac/',
                icon: 'fa fa-facebook',
                bg: '#3b5998',
                footer: true
            },
            {
                href: 'https://www.linkedin.com/company/elengy-sac/',
                icon: 'fa fa-linkedin',
                bg: '#0073B0',
                footer: true
            },
            {
                href: '#',
                icon: 'fa fa-instagram',
                bg: 'linear-gradient(45deg,#f09433,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888)',
                footer: true
            },
            {
                href: '#',
                icon: 'fa fa-twitter',
                bg: '#00adef',
                footer: true
            },
        ],

    }
})