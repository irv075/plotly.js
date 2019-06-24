/**
* Copyright 2012-2018, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

module.exports = {
    moduleType: 'locale',
    name: 'es',
    dictionary: {
        'Autoscale': 'Escala automática',
        'Download plot as a png': 'Descargar gráfica en formato .png',
        'Pan': 'Hacer una panorámica',
        'Double-click on legend to isolate one trace': 'Doble clic en la leyenda para aislar una línea del gráfico',
        'Double-click to zoom back out': 'Doble clic para alejarse',
        'Snapshot succeeded': 'Instantánea realizada con éxito',
        'Sorry, there was a problem downloading your snapshot!': 'Lo sentimos, se ha producido un problema al descargar su instantánea.',
        'Taking snapshot - this may take a few seconds': 'Realizando instantánea - esta operación puede durar unos segundos',
        'Zoom': 'Zoom',
        'Zoom in': 'Acercar',
        'Zoom out': 'Alejar',
		'Reset': 'Restablecer',
        'Reset axes': 'Reiniciar ejes',                               // components/modebar/buttons.js:148
        'Reset camera to default': 'Restaurar cámara predeterminada', // components/modebar/buttons.js:313
        'Reset camera to last save': 'Restaurar anterior cámara',     // components/modebar/buttons.js:321
        'Reset view': 'Restaurar vista',                              // components/modebar/buttons.js:582
        'Reset views': 'Restaurar vistas',                            // components/modebar/buttons.js:528
        'Lower fence:': 'Cota inferior:',                           // traces/box/calc.js:134
        'Max:': 'Máx:',                                               // traces/box/calc.js:132
        'Mean ± σ:': 'Media ± σ:',                                    // traces/box/calc.js:133
        'Mean:': 'Media:',                                            // traces/box/calc.js:133
        'Median:': 'Mediana:',                                        // traces/box/calc.js:128
        'Min:': 'Mín:',                                               // traces/box/calc.js:129
        'Q1:': 'Q1:',                                                 // traces/box/calc.js:130
        'Q3:': 'Q3:',                                                 // traces/box/calc.js:131
        'Upper fence:': 'Cota superior:'                            // traces/box/calc.js:135  
    },
    format: {
        days: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        shortDays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
        months: [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ],
        shortMonths: [
            'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
            'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
        ],
        periods: ['AM', 'PM'],
        dateTime: '%a %b %e %X %Y',
        date: '%d/%m/%Y',
        time: '%H:%M:%S',
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['$', '']
    }
};