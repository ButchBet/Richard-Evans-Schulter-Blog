const virolaTemplate = `
    <div class="template">
        <section class="template__section">
            <p class="template__text">Virola, conocida como epená, es un género botánico de árboles medianos, nativos de las selvas de Sudamérica, estrechamente vinculadas con otras Myristicaceae, como Myristica. Comprende 77 especies descritas y de estas, solo 41 aceptadas.</p>

            <figure class="template__figure">
                <img src="" alt="Virola 1 image" class="template__img" id="virola1">
            </figure>

            <p class="template__text template--lessWidthLeft">Tiene hojas lustrosas, oscuras con diminutas flores amarillas, y emite un olor pungente.</p>

            <figure class="template__figure">
                <img src="" alt="Virola 2 image" class="template__img" id="virola2">
            </figure>

            <p class="template__text template--lessWidthLeft">  La resina rojiza oscura de su corteza contiene varios alcaloides alucinógenos, muy notable es 5-MeO-DMT (en Virola calophylla), bufotenina (5-OH-DMT), y Dimetiltriptamina (DMT); también hay beta-carbolina alcaloides harmala, IMAO que potencia los efectos de DMT. De acuerdo a Richard Evans Schultes, el uso de Virola en rituales mágico-religiosos se restringe a naciones del occidente de la cuenca del río Amazonas y partes de la cuenca del Orinoco color puya.</p>

            <p class="template__text">Los brotes de Virola oleifera producen lignano-7-ols y verrucosina con acción antifúngica a Cladosporium sphaerospermum en dosis tan bajas como 25 microgramos. El lignano-7-ols oleiferina-B y oleiferina-G trabajan en C. cladosporoides a dosis tan bajas como 10 microgramos.</p>
        </section>

        <section class="template__section">
            <h2 class="template__title">Rapé de Virola para la medicina, la magia y la profecía</h2>

            <p class="template__text">El rapé preparado con la corteza interna de varias especies de Virola es extremadamente importante en la vida de los indígenas de muchas tribus de la Amazonía noroccidental de Brasil, Colombia y el Alto Orinoco de Venezuela. A pesar de su importancia, parece que por un tiempo no fue reconocido y se confundió en la literatura con otras preparaciones de rapé. Fue mencionado por primera vez, pero sin la identificación botánica, en un informe antropológico sobre Venezuela de 1923. La identificación definitiva de la especie de Virola se hizo en 1954, sobre la base de especímenes recolectados en Colombia. Los ingredientes activos en las preparaciones psicoac-tivas de Virola son las triptaminas.</p>
        </section>
    </div>
`

const main = document.createElement('main');
main.classList.add('components__item');
main.id = 'virolaTemplate';
main.innerHTML = virolaTemplate;

module.exports = {
    main
}
