import '@styles/styles.css';
import '@styles/tablet.css';
import '@styles/desktop.css';

import menuImg from '@images/icons/menu.png';
import titleImg from "@images/logos/pageLogo2.png";

// Introduction images
import richardImage from "@images/richard.png";
import firstExplorationsImage from "@images/firstExplorations.jpg";
import peyoteImage from "@images/peyote.png";
import mushroomImage from "@images/mushroom.jpg";
import ololiuquiImage from "@images/ololiuqui.jpg";
import peyoteZoneImage from "@images/peyoteZone.jpg";

// Putumayo images
import railOfBogotaImage from "@images/tranviaDeBogota.jpg";
import schultesSpecimenImage from "@images/especimenDeSchultes.png";
import illustrationOfPachyphyllumSchultesiiImage from "@images/ilustraciónDePachyphyllumSchultesii.png";
import paramoEcosystemOutsideTheSibundoyValleyImage from "@images/ecosistemaDeParamoFueraDelValle.jpg";
import plantInspectionInTheParamoImage from "@images/inspecciónPlantasEnElParamo.jpg";
import kamenstáYoungManImage from "@images/Joven de kamenstá y fraile capuchino inspeccionando un frailejón.jpg";
import SchultesSpecimen2Image from "@images/especimenDeSchultes2.png";
import ingaNearToImage from "@images/ingaCercaDeAponte.jpg";
import salvadorChindoyImage from "@images/salvadorChindoy.png";
import indogenousImage from "@images/indogena.jpg";
import aYoungKamentsáBoyImage from "@images/UnJovenDeKamentsa.jpg";

// Templates
const introduccionTemplate = require('./components/introduccionTemplate.js');
const putumayoTemplate = require('./components/putumayoTemplate.js');
const misionCaucheraTemplate = require('./components/misionCaucheraTemplate.js');
const apaporisTemplate = require('./components/apaporisTemplate.js');
const culturaIndigenaTemplate = require('./components/culturaIndigenaTemplate.js');
const virolaTemplate = require('./components/virolaTemplate.js');

const components = document.getElementById('components');
components.appendChild(introduccionTemplate.main); // Append the introduction since the begining
insertAssetsIntroduction();

document.getElementById('menuImg').src = menuImg;
document.getElementById('titleImg').src = titleImg;

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

                components.style.display = "flex";
                break;
        
            case 'putumayo':
                appendComponent(putumayoTemplate.main);

                option.style.display = "block";

                components.style.display = "flex";

                insertAssetsPutumayo()
                break;

            case 'misionCauchera':
                appendComponent(misionCaucheraTemplate.main);

                option.style.display = "block";

                components.style.display = "flex";
                break;

            case 'apaporis':
                appendComponent(apaporisTemplate.main);

                option.style.display = "block";

                components.style.display = "flex";
                break;

            case 'culturaIndigena':
                appendComponent(culturaIndigenaTemplate.main);

                option.style.display = "block";

                components.style.display = "flex";
                break;

            case 'virola':
                appendComponent(virolaTemplate.main);

                option.style.display = "block";

                components.style.display = "flex";
                break;

            case 'menuImg': 
                headerNav.classList.remove('hidden');

                option.style.display = "none";

                components.style.display = "none";
                break;

            case 'close':
                headerNav.classList.add('hidden');

                option.style.display = "block";

                components.style.display = "flex";
                break;
                
        }
    });
});


function appendComponent(component) {
    if(!headerNav.classList.contains('hidden')) { // Check if the nav bar is showed of not
        headerNav.classList.add('hidden')
    }

    components.innerHTML = null;
    components.appendChild(component);
}

function insertAssetsIntroduction() {
    document.getElementById('richardImage').src = richardImage; 
    document.getElementById('firstExplorations').src = firstExplorationsImage;
    document.getElementById('peyote').src = peyoteImage;
    document.getElementById('mushroom').src = mushroomImage;
    document.getElementById('ololiuqui').src = ololiuquiImage;
    document.getElementById('peyoteZone').src = peyoteZoneImage;
}

function insertAssetsPutumayo() {
    document.getElementById('railOfBogota').src = railOfBogotaImage;
    document.getElementById('schultesSpecimen').src = schultesSpecimenImage;
    document.getElementById('illustrationOfPachyphyllumSchultesii').src = illustrationOfPachyphyllumSchultesiiImage;
    document.getElementById('paramoEcosystemOutsideTheSibundoyValley').src = paramoEcosystemOutsideTheSibundoyValleyImage;
    document.getElementById('plantInspectionInTheParamo').src = plantInspectionInTheParamoImage;
    document.getElementById('kamenstáYoungMan').src = kamenstáYoungManImage;
    document.getElementById('SchultesSpecimen2').src = SchultesSpecimen2Image;
    document.getElementById('ingaNearTo').src = ingaNearToImage;
    document.getElementById('salvadorChindoy').src = salvadorChindoyImage;
    document.getElementById('indogenous').src = indogenousImage;
    document.getElementById('aYoungKamentsáBoy').src = aYoungKamentsáBoyImage;
}

function insertAssetsMisionCauchera() {
    return false;
}

function insertAssetsApaporis() {
    return false;
}

function insertAssetsCulturaIndigena() {
    return false;
}

function insertAssetsVirola() {
    return false;
}