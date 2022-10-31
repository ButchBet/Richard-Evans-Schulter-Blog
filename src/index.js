import '@styles/styles.css';
import '@styles/tablet.css';
import '@styles/desktop.css';
import menuImg from '@images/menu.png';
const introduccionTemplate = require('./components/introduccionTemplate.js');
const putumayoTemplate = require('./components/putumayoTemplate.js');
const misionCaucheraTemplate = require('./components/misionCaucheraTemplate.js');
const apaporisTemplate = require('./components/apaporisTemplate.js');
const culturaIndigenaTemplate = require('./components/culturaIndigenaTemplate.js');
const planta = require('./components/planta.js');

// Inserting the image menu image
document.getElementById('menuImg').src = menuImg;

// Script to catch the click event in each nav item
const navigation = Array.from(document.getElementsByClassName('navList__item'));
const components = document.getElementById('components');

navigation.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            
            switch (target.id) {
                case 'introduccion':
                    components.innerHTML = '';
                    components.appendChild(introduccionTemplate.main);
                    break;
            
                case 'putumayo':
                    components.innerHTML = '';
                    components.appendChild(putumayoTemplate.main)
                    break;

                case 'misionCauchera':
                    components.innerHTML = '';
                    components.appendChild(misionCaucheraTemplate.main)
                    break;

                case 'apaporis':
                    components.innerHTML = '';
                    components.appendChild(apaporisTemplate.main)
                    break;

                case 'culturaIndigena':
                    components.innerHTML = '';
                    components.appendChild(culturaIndigenaTemplate.main)
                    break;

                case 'planta':
                    components.innerHTML = '';
                    components.appendChild(planta.main)
                    break;
            }
        });
    });