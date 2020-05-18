import IMGComunicaciones from '../static/redescomunicaciones.webp';

export const state = () => ({
    all: [{
            id: 1,
            name_service: 'Obras Electromecánicas ',
            description_service: 'Realizamos todo tipo de servicio electromecánico.',
            category_service: 'Ingeniería Electríca',
            redirectTo: '/servicios/obras_electromecanicas',
            img: 'https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/20190426_101516_HDR.jpg/:/rs=w:1300,h:800',
            characteristics: [
                'Montaje electromecánico, pruebas primarias y puesta en servicio de subestaciones y plantas de generación, incluyendo: Equipo de alta tensión, Transformadores, Tratamiento de aceite dieléctrico, Seccionadores, Interruptores de potencia, sistemas de servicios auxiliares, sistemas de regulación y sistemas de control, medida y protección.',
                'Montaje electromecánico, pruebas secundarias y puesta en servicio de sistemas de protecciones eléctricas en centrales de generación, subestaciones de transmisión y distribución, sistemas industriales.',
                'Mantenimiento industrial correctivo, preventivo y predictivo en AT, MT y BT.',
                'Mantenimiento de Interruptores y subestaciones GIS, tratamiento de GAS SF6.',
                'Medición de resistencia de mallas de tierra y resistividad del suelo.',
                'Asistencia técnica, equipos de medición.',
                'Elaboración de terminaciones pfisterer.',
                'Ensamblaje mecánico, montaje eléctrico y cableado de tableros en BT y MT.',
                'Ejecución del tendido, conexionado, pruebas de continuidad y aislamiento de cables',
                'Ejecución del tendido, conexionado, pruebas de continuidad y aislamiento de cables de Control y Fuerza en Salas Eléctricas de baja tensión, Subestaciones Eléctricas de MT/AT y Centrales Eléctricas',
                'Verificación de enclavamientos, prueba de alarmas y disparos, amarillado de esquemas funcionales, seguimiento de circuitos, comprobación de polaridad, puestas en marcha y supervisión.',
                'Parada de Plantas.'
            ],
            icon: 'fas fa-cogs'
        },
        {
            id: 2,
            name_service: 'Ingeniería Secundaria y Protecciones',
            description_service: 'Brindamos servicios de Ingeniería secundaria y protecciones.',
            category_service: 'Ingeniería Electríca',
            redirectTo: '/servicios/ingenieria_secundaria_y_protecciones',
            img: 'https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/IMG_1012.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800',
            characteristics: [
                'Memorias de cálculo de los servicios auxiliares para subestaciones de baja, media, alta y extra alta tensión.',
                'Estudio de selectividad de interruptores.',
                'Especificaciones técnicas de cargadores, banco de baterías, grupo electrógeno, transformador de distribución y tableros de baja tensión.',
                'Elaboración de diagramas de principio y funcionales de tableros de control, protección y telecomunicaciones.',
                'Elaboración de planos eléctricos conforme a obra.',
                'Configuración de relés de protección de sistemas eléctricos. En todas las marcas (Siemens, ABB, SEL, General Electric, Alstom, Micom, etc.).',
                'Pruebas SAT (site aceptancetest) de relés de protección.',
                'Pruebas funcionales de los sistemas de protección.',
                'Pruebas End to End de líneas de transmisión.',
                'Configuración y pruebas de reguladores de tensión.'
            ],
            icon: 'fas fa-shield-alt'
        },
        /* img  ->  https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/IMG_20180812_141823.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:3900,h:2400 */
        {
            id: 3,
            name_service: 'Redes, Comunicaciones y Fibra Óptica',
            description_service: 'Realizamos todo tipo de obras en redes, comunicaciones y fibra óptica.',
            category_service: 'Ingeniería Electríca',
            redirectTo: '/servicios/redes_y_comunicaciones',
            img: IMGComunicaciones,
            characteristics: [
                'Cableado en redes categoría 5, 5e, 6, Coaxial, Fibra óptica.',
                'Ejecución de empalmes por Fusión y terminaciones de cables de Fibra Óptica, cables Coaxiales y cables de pares trenzados.',
                'Instalación de racks, gabinetes de servidor y Cableado estructurado.',
                'Análisis y Certificación de cableados de Fibra Óptica, cableados estructurados, Coaxiales y de pares trenzados.',
                'Montaje, ordenamiento y organización de Patch Panel, etiquetado de cables, Patch Cords.'
            ],
            icon: 'fas fa-network-wired'
        },
        {
            id: 4,
            name_service: 'Estudios Eléctricos en AT, MT y BT',
            description_service: 'Realizamos estudios eléctricos en AT, MT y BT.',
            category_service: 'Ingeniería Electríca',
            redirectTo: '/servicios/estudios_electricos',
            img: 'https://img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/IMG_1012.JPG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800',
            characteristics: [
                'Estudio de Flujo de Carga.',
                'Estudio de Cortocircuito.',
                'Análisis de contingencia.',
                'Estudio de Estabilidad de Sistemas Eléctricos de Potencia.',
                'Estudio de Pre Operatividad.',
                'Estudio de Operatividad.',
                'Estudio de Coordinación de Protecciones.',
                'Elaboración de archivos COMTRADE para pruebas las End to End de líneas de transmisión.'
            ],
            icon: 'fas fa-hard-hat'
        },
        /* {
            name_service: 'Ingeniería Primaria',
            description_service: 'Realizamos servicios de ingeniería primaria.',
            category_service: 'Ingeniería Electríca',
            redirectTo: '/servicios/ingeniería_primaria',
            img: '//img1.wsimg.com/isteam/ip/ba69460f-3ac0-4f5b-afa5-8b6ef5b4ac63/IMG_20180503_115054.jpg'
        }, */
    ],
    servicesNames: [
        "Obras electromecánicas",
        "Ingeniería secundaria y protecciones",
        "Redes, comunicaciones y fibra óptica",
        "Estudios Eléctricos en AT, MT y BT."
    ],
})