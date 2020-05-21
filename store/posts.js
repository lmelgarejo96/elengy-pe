import img1 from '../static/posts/elengy-covid.jpg';
import img2 from '../static/posts/elengy-covid1.jpg';
import img3 from '../static/posts/elengy-covid2.jpg';
import milpo1 from '../static/posts/sub_estacion_milpo_2019-09-15.webp';
import logo from '../static/logo.svg';
import videoElengyCovid from '../static/posts/elengy-covid.mp4';
import videoElengyCovid2 from '../static/posts/elengy-covid2.mp4';

export const state = () => ({
    all: [{
            title: 'Elengy presente en la lucha contra el Covid 19',
            author: {
                names: 'ELENGY SAC',
                img: logo
            },
            description: 'Nuestra cabina de desinfeccion con el nebulizado correcto evitando mojar a la persona, usando acido hipocloroso (Aprobado por la EPA contra el covid), no daña las vias respiratorias ni irrita los ojos.<br/><br/>Está automatizada con activacion por sensor de movimiento y con fluorescente para su uso hasta de madrugada. <br/><br/> ELENGY Ingenieria para El Mundo!',
            shortDescription: 'Nuestra cabina de desinfeccion con el nebulizado correcto evitando mojar a la persona, usando acido hipocloroso (Aprobado por la EPA contra el covid), no daña las vias respiratorias ni irrita los ojos',
            date: '23 Abr, 2020',
            location: 'Lima, Perú',
            portada: img1,
            media: [{
                    type: 'img',
                    src: img1,
                    w: 2240,
                    h: 1244,
                },
                {
                    type: 'img',
                    src: img2,
                    w: 277,
                    h: 337,
                },
                {
                    type: 'img',
                    src: img3,
                    w: 207,
                    h: 251,
                },
                {
                    type: 'mp4',
                    src: videoElengyCovid
                },
                {
                    type: 'mp4',
                    src: videoElengyCovid2
                },
                /*  {
                     uri: 'http://img-ys011.didistatic.com/static/didiglobal/do1_pcUZZjSG7vFlMbdr8fA6',
                     type: 'mp4'
                 } */

            ],
        },
        {
            title: 'Elengy realizando obras electromecánicas en la subestación Milpo',
            author: {
                names: 'ELENGY SAC',
                img: logo
            },
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sed veniam. Quasi culpa labore sed repellendus ipsam nisi libero, natus vitae dicta delectus, recusandae quam quibusdam nobis accusamus possimus saepe. Consectetur adipisicing elit. Odio, sed veniam. <br/><br/> Quasi culpa labore sed repellendus ipsam nisi libero, natus vitae dicta delectus, recusandae quam quibusdam nobis accusamus possimus saepe.',
            shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, sed veniam. Quasi culpa labore sed repellendus ipsam nisi libero.',
            date: '15 Sep, 2019',
            location: 'Puno, Perú',
            portada: milpo1,
            media: [{
                type: 'img',
                src: milpo1,
                w: 1066,
                h: 800,
            }],
        },
    ]
})