const introduccionTemplate = `
    <p>Hello from apaporis</p>
`

const main = document.createElement('main');
main.classList.add('components__item');
main.id = 'introduccionTemplate';
main.innerHTML = introduccionTemplate;

module.exports = {
    main
}
