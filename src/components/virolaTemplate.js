const virolaTemplate = `
    <p>Hello from Virola</p>
`

const main = document.createElement('main');
main.classList.add('components__item');
main.id = 'virolaTemplate';
main.innerHTML = virolaTemplate;

module.exports = {
    main
}
