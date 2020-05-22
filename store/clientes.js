import abb from '../static/clientes/abb.png';
import siemens from '../static/clientes/siemens.png';
import luzdelsur from '../static/clientes/luzdelsur.png';
import enel from '../static/clientes/enel.png';
import cobra from '../static/clientes/cobra.png';
import milpo from '../static/clientes/milpo.png';
import abengoa from '../static/clientes/abengoa.png';


export const state = () => ({
    all: [
        /* You can added more clients */
        {
            src: abb,
            name: 'logo-abb'
        },
        {
            src: siemens,
            name: 'logo-siemens'
        },
        {
            src: luzdelsur,
            name: 'logo-luzdelsur'
        },
        {
            src: enel,
            name: 'logo-enel'
        },
        {
            src: cobra,
            name: 'logo-cobra'
        },
        {
            src: milpo,
            name: 'logo-milpo'
        },
        {
            src: abengoa,
            name: 'logo-abengoa'
        },

    ]
})