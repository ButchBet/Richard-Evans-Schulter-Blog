const apaporisTemplate = `
    <p>Hello from apaporis</p>
`

const main = document.createElement('main');
main.classList.add('components__item');
main.id = 'apaporisTemplate';
main.innerHTML = apaporisTemplate;

module.exports = {
    main
}
