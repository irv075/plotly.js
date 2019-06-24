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
    name: 'ru',
    dictionary: {
        'Autoscale': 'Автомасштаб',
        'Download plot as a png': 'Загрузить исходные данные в формате png',
        'Pan': 'Прокрутка',
        'Double-click on legend to isolate one trace': 'Двойной щелчок на обозначении для выделения одного поиска',
        'Double-click to zoom back out': 'Двойной щелчок для отмены изменения масштаба',
        'Snapshot succeeded': 'Снимок сделан',
        'Sorry, there was a problem downloading your snapshot!': 'Извините, не удается загрузить снимок',
        'Taking snapshot - this may take a few seconds': 'Сделать снимок - это может занять несколько секунд',
        'Zoom': 'Увеличить',
        'Zoom in': 'Увеличить',
        'Zoom out': 'Уменьшить',
		'Reset': 'Сбросить',
        'Lower fence:': 'Нижний предел:',                           // traces/box/calc.js:134
        'Max:': 'Макс.:',                                               // traces/box/calc.js:132
        'Mean ± σ:': 'media ± σ:',                                    // traces/box/calc.js:133
        'Mean:': 'media:',                                            // traces/box/calc.js:133
        'Median:': 'Медиана:',                                        // traces/box/calc.js:128
        'Min:': 'Мин.:',                                               // traces/box/calc.js:129
        'Q1:': 'Q1:',                                                 // traces/box/calc.js:130
        'Q3:': 'Q3:',                                                 // traces/box/calc.js:131
        'Upper fence:': 'Верхний предел:'                            // traces/box/calc.js:135
    },
    format: {
        days: [
            'воскресенье', 'понедельник', 'вторник', 'среда',
            'четверг', 'пятница', 'суббота'
        ],
        shortDays: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        months: [
            'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
        ],
        shortMonths: [
            'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
        ],
        date: '%d.%m.%Y',
		periods: ['AM', 'PM'],
        dateTime: '%a %b %e %X %Y',
        time: '%H:%M:%S',
        decimal: ',',
        thousands: '.',
        grouping: [3],
        currency: ['$', '']
    }
};
