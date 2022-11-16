import '@styles/styles.css';
import '@styles/tablet.css';
import '@styles/desktop.css';
import menuImg from '@images/icons/menu.png';
const introduccionTemplate = require('./components/introduccionTemplate.js');
const putumayoTemplate = require('./components/putumayoTemplate.js');
const misionCaucheraTemplate = require('./components/misionCaucheraTemplate.js');
const apaporisTemplate = require('./components/apaporisTemplate.js');
const culturaIndigenaTemplate = require('./components/culturaIndigenaTemplate.js');
const plantaTemplate = require('./components/plantaTemplate.js');

// Inserting the image menu image
document.getElementById('menuImg').src = menuImg;

// Script to catch the click event in each nav item
const navigation = Array.from(document.getElementsByClassName('navList__item'));
const menu = document.getElementById('menuImg');
const close = document.getElementById('close');
const components = document.getElementById('components');
const headerNav = document.getElementById('header__nav');
components.appendChild(introduccionTemplate.main); // Append the introduction since the begining
navigation.push(menu);
navigation.push(close);

navigation.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;
        
        switch (target.id) {
            case 'introduccion':
                appendComponent(introduccionTemplate.main);
                break;
        
            case 'putumayo':
                appendComponent(putumayoTemplate.main);
                break;

            case 'misionCauchera':
                appendComponent(misionCaucheraTemplate.main);
                break;

            case 'apaporis':
                appendComponent(apaporisTemplate.main);
                break;

            case 'culturaIndigena':
                appendComponent(culturaIndigenaTemplate.main);
                break;

            case 'planta':
                appendComponent(plantaTemplate.main);
                break;

            case 'menuImg': 
                headerNav.classList.remove('hidden');
                break;

            case 'close':
                headerNav.classList.add('hidden');
                break;
                
        }
    });
});


function appendComponent(component) {
    if(!headerNav.classList.contains('hidden')) { // Check if the nav bar is showed of not
        headerNav.classList.add('hidden')
    }

    components.innerHTML = '';
    components.appendChild(component);
}