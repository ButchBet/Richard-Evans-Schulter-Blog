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

// Misión Cauchera images

// Apaporis images
import santAugustineStatue1 from "@images/estatuaSanAgustin1.jpg";
import santAugustineStatue2 from "@images/estatuaSanAgustin2.jpg";
import santAugustineStatue3 from "@images/estatuaSanAgustin3.jpg";
import santAugustineStatue4 from "@images/estatuaSanAgustin4.jpg";
import santAugustineStatue5 from "@images/estatuaSanAgustin5.jpg";
import macayaRiver from "@images/rioMacaya.jpg";
import chiribiqueteHill from "@images/cerroChiribiquete.jpg";
import SchultesSpecimen3Image from "@images/especimenDeSchultes3.jpg";
import vellozia1 from "@images/schultes1.jpg";
import heveaNitidia from "@images/heveaNitidia.jpg";
import aiaiuRiver from "@images/rioAiaiu.jpg";
import castleHill from "@images/cerroCastillo.jpg";
import naviaSchultesiana1 from "@images/naviaSchultesiana1.jpg";
import naviaSchultesiana2 from "@images/naviaSchultesiana2.jpg";
import bellHill1 from "@images/bellHill1.jpg";
import castañoUribe from "@images/castañoUribe.jpg";
import richardImage2 from "@images/richard2.jpg";
import indigenous1 from "@images/indigenous1.jpg";
import indigenous2 from "@images/indigenous2.jpg";
import apaporisRiver1 from "@images/apaporisRiver1.jpg";
import apaporisRiver2 from "@images/apaporisRiver2.jpg";
import apaporisRiver3 from "@images/apaporisRiver3.jpg";
import apaporisRiver4 from "@images/apaporisRiver4.jpg";
import apaporisRiver5 from "@images/apaporisRiver5.jpg";
import apaporisRiver6 from "@images/apaporisRiver6.jpg";
import websTree from "@images/websTree.jpg";
import ancientWall1 from "@images/ancientWall1.jpg";
import ancientWall2 from "@images/ancientWall2.jpg";
import ancientWall3 from "@images/ancientWall3.jpg";
import ancientWall4 from "@images/ancientWall4.jpg";
import ancientWall5 from "@images/ancientWall5.jpg";

// Cultura indígena images

// Virola images
import virola1 from "@images/virola1.jpg";
import virola2 from "@images/virola2.jpg";


// Templates
const introduccionTemplate = require('./components/introduccionTemplate.js');
const putumayoTemplate = require('./components/putumayoTemplate.js');
const misionCaucheraTemplate = require('./components/misionCaucheraTemplate.js');
const apaporisTemplate = require('./components/apaporisTemplate.js');
const culturaIndigenaTemplate = require('./components/culturaIndigenaTemplate.js');
const virolaTemplate = require('./components/virolaTemplate.js');

const components = document.getElementById('components');
components.appendChild(apaporisTemplate.main); // Append the introduction since the begining
// insertAssetsIntroduction();
insertAssetsApaporis();

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

                insertAssetsApaporis();
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

                insertAssetsVirola();
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
}

function insertAssetsApaporis() {
    document.getElementById('santAugustineStatue1').src = santAugustineStatue1;
    document.getElementById('santAugustineStatue2').src = santAugustineStatue2;
    document.getElementById('santAugustineStatue3').src = santAugustineStatue3;
    document.getElementById('santAugustineStatue4').src = santAugustineStatue4;
    document.getElementById('santAugustineStatue5').src = santAugustineStatue5;
    document.getElementById('macayaRiver').src = macayaRiver;
    document.getElementById('chiribiqueteHill').src = chiribiqueteHill;
    document.getElementById('SchultesSpecimen3Image').src = SchultesSpecimen3Image;
    document.getElementById('vellozia1').src = vellozia1;
    document.getElementById('heveaNitidia').src = heveaNitidia;
    document.getElementById('aiaiuRiver').src = aiaiuRiver;
    document.getElementById('castleHill').src = castleHill;
    document.getElementById('naviaSchultesiana1').src = naviaSchultesiana1;
    document.getElementById('naviaSchultesiana2').src = naviaSchultesiana2;
    document.getElementById('bellHill1').src = bellHill1;
    document.getElementById('castañoUribe').src = castañoUribe;
    document.getElementById('richard2').src = richardImage2;
    document.getElementById('indigenous1').src = indigenous1;
    document.getElementById('indigenous2').src = indigenous2;
    document.getElementById('apaporisRiver1').src = apaporisRiver1;
    document.getElementById('apaporisRiver2').src = apaporisRiver2;
    document.getElementById('apaporisRiver3').src = apaporisRiver3;
    document.getElementById('apaporisRiver4').src = apaporisRiver4;
    document.getElementById('apaporisRiver5').src = apaporisRiver5;
    document.getElementById('apaporisRiver6').src = apaporisRiver6;
    document.getElementById('websTree').src = websTree;
    document.getElementById('ancientWall1').src = ancientWall1;
    document.getElementById('ancientWall2').src = ancientWall2;
    document.getElementById('ancientWall3').src = ancientWall3;
    document.getElementById('ancientWall4').src = ancientWall4;
    document.getElementById('ancientWall5').src = ancientWall5;
}

function insertAssetsCulturaIndigena() {
    return false;
}

function insertAssetsVirola() {
    document.getElementById('virola1').src = virola1;
    document.getElementById('virola2').src = virola2;
}