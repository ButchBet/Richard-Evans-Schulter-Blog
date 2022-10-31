import '@styles/styles.css';
import '@styles/tablet.css';
import '@styles/desktop.css';
import menuImg from '@images/menu.png';

// Inserting the image menu image
document.getElementById('menuImg').src = menuImg;

// Script to catch the click event in each nav item
const navigation = Array.from(document.getElementsByClassName('navList__item'));

navigation.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            
            switch (target.id) {
                case 'introduction':
                    console.log('Clicked the introduction');
                    break;
            
                case 'putumayo':
                    console.log('clicked putumayo');
                    break;

                case 'misionCauchera':
                    console.log('clicked misionCauchera');
                    break;

                case 'apaporis':
                    console.log('clicked apaporis');
                    break;

                case 'culturaIndigena':
                    console.log('clicked culturaIndigena');
                    break;

                case 'planta':
                    console.log('clicked planta');
                    break;
            }
        });
    });