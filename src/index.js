import '@styles/styles.css';
import '@styles/tablet.css';
import '@styles/desktop.css';

import menuImg from '@images/icons/menu.png';
import titleImg from "@images/logos/pageLogo2.png";
import richardImage from "@images/richard.png";
import firstExplorationsImage from "@images/firstExplorations.jpg";
import peyoteImage from "@images/peyote.png";
import mushroomImage from "@images/mushroom.jpg";
import ololiuquiImage from "@images/ololiuqui.jpg";
import peyoteZoneImage from "@images/peyoteZone.jpg";

const introduccionTemplate = require('./components/introduccionTemplate.js');
const putumayoTemplate = require('./components/putumayoTemplate.js');
const misionCaucheraTemplate = require('./components/misionCaucheraTemplate.js');
const apaporisTemplate = require('./components/apaporisTemplate.js');
const culturaIndigenaTemplate = require('./components/culturaIndigenaTemplate.js');
const plantaTemplate = require('./components/plantaTemplate.js');

const components = document.getElementById('components');
components.appendChild(introduccionTemplate.main); // Append the introduction since the begining


// Inserting the images of the Introduction template
document.getElementById('menuImg').src = menuImg;
document.getElementById('titleImg').src = titleImg;
document.getElementById('richardImage').src = richardImage; 
document.getElementById('firstExplorations').src = firstExplorationsImage;
document.getElementById('peyote').src = peyoteImage;
document.getElementById('mushroom').src = mushroomImage;
document.getElementById('ololiuqui').src = ololiuquiImage;
document.getElementById('peyoteZone').src = peyoteZoneImage;

// Script to catch the click event in each nav item
const navigation = Array.from(document.getElementsByClassName('navList__item'));
const menu = document.getElementById('menuImg');
const close = document.getElementById('close');
const option = document.getElementById('option');
const headerNav = document.getElementById('header__nav');
navigation.push(menu);
navigation.push(close);

navigation.forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.target;

        // Inserting the option title in the option title
        
        // Unmarking as selected the current selected item
        navigation.forEach(item => {
            if(target.id != 'menuImg' && target.id != 'close') {
                item.classList.remove('selected');
            } 
        });

        
        // Marking as selected the current selected item
        if(target.id != 'menuImg' && target.id != 'close') {
            option.textContent = target.textContent;
            target.classList.add('selected');
        } 
        
        switch (target.id) {
            case 'introduccion':
                appendComponent(introduccionTemplate.main);

                option.style.display = "block";

                components.style.display = "block";
                break;
        
            case 'putumayo':
                appendComponent(putumayoTemplate.main);

                option.style.display = "block";

                components.style.display = "block";
                break;

            case 'misionCauchera':
                appendComponent(misionCaucheraTemplate.main);

                option.style.display = "block";

                components.style.display = "block";
                break;

            case 'apaporis':
                appendComponent(apaporisTemplate.main);

                option.style.display = "block";

                components.style.display = "block";
                break;

            case 'culturaIndigena':
                appendComponent(culturaIndigenaTemplate.main);

                option.style.display = "block";

                components.style.display = "block";
                break;

            case 'planta':
                appendComponent(plantaTemplate.main);

                option.style.display = "block";

                components.style.display = "block";
                break;

            case 'menuImg': 
                headerNav.classList.remove('hidden');

                option.style.display = "none";

                components.style.display = "none";
                break;

            case 'close':
                headerNav.classList.add('hidden');

                option.style.display = "block";

                components.style.display = "block";
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