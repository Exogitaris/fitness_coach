<template>
    <div>
        <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">Petra</h2>
                                    <h2 class="text-uppercase surname"><small>Dlougošová</small></h2>
                                    <label class="switch">
                                        <input type="checkbox" v-model="toggles.first">
                                        <span class="slider round"></span>
                                    </label>
                                    <p>PŘED / PO</p>
                                    <img v-if="toggles.first" class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/petapofull.png" alt="" />
                                    <img v-else class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/petapredfull.png" alt="" />
                                    <p>Nikdy som nechcela držať diétu, ani držať niečo poriadne, lebo som si myslela, že to nezvládnem a bude to náročné. Míša ma presvedčil o tom, že dokážem v živote všetko čo chcem a že aj tú dietu a režim zvládnem ako nič. A tak vznikol náš 3-mesačný challenge. Nebudem klamať, občas to bolo ťažšie, ale Michal mi bol veľkou oporou. Je to Trener s veľkým T s jeho úžasným prístupom a hlavne výsledkami. Za 3 mesiace som schudla neuveriteľných 23kg. Určite to nebola posledná spolupráca, pretože v spolupráci s Michalom zvládne každý úplne nemožné a hlavne dojde nad rámec svojich možnosti. Odporúčam a určite sa zas vrátim pre lepšie výsledky.</p>
                                    <ul class="list-inline">
                                        <li>Progress: 15.5.2019 – 16.8.2020</li>
                                        <li>Věk: 23 let</li>
                                    </ul>
                                    <button class="btn btn-danger text-uppercase" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Zavřít</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal 2-->
        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">Petr</h2>
                                    <h2 class="text-uppercase surname"><small>Zasadil</small></h2>
                                    <label class="switch">
                                        <input type="checkbox" v-model="toggles.second">
                                        <span class="slider round"></span>
                                    </label>
                                    <p>PŘED / PO</p>
                                    <img v-if="toggles.second" class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/petrpofull.png" alt="" />
                                    <img v-else class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/petrpredfull.png" alt="" />
                                    <p>Petr trávil každý den přes deset hodin prací u počítače. Sport a se jeho života dotýkal pouze okrajově dokud jsme na sebe nenarazili. Stravovací návyky byly někde na bodu mrazu. (bageta z benzínky atp..). Během těchto 9 měsíců jsem Petrovi dokázal vytřídit priority v životě. Zdraví vystřídalo práci na prvním místě a Petr nabral přes 10kg svalové hmoty. Cítí se výborně a nehodlá se nikdy vrátit ke starému životnímu stylu.</p>
                                    <ul class="list-inline">
                                        <li>Progress: 16.9.2020 – 14.6.2021</li>
                                        <li>Věk: 36 let</li>
                                    </ul>
                                    <button class="btn btn-danger text-uppercase" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Zavřít</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal 3-->
        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal"><img src="../../assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="modal-body">
                                    <!-- Project Details Go Here-->
                                    <h2 class="text-uppercase">Tomáš</h2>
                                    <h2 class="text-uppercase surname"><small>Smetana</small></h2>
                                    <label class="switch">
                                        <input type="checkbox" v-model="toggles.third">
                                        <span class="slider round"></span>
                                    </label>
                                    <p>PŘED / PO</p>
                                    <img v-if="toggles.third" class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/tompofull.png" alt="" />
                                    <img v-else class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/tompredfull.png" alt="" />
                                    <p>Tomáš měl prahnoucí touhu po tom oběvit břišní svaly svého těla. Během jednoho měsíce se nám s pravidelným cvičením, jídelníčkem a spoustou odříkání povedlo zhubnout tuk a vytáhnout všechny svaly hezky na povrch. Tomáš si splnil svůj cíl a dále se věnuje nabírání více svalové hmoty aby nám všem příští roky vytřel zrak a dokázal, že lenost je opravdu jen lenost a musí se s ní bojovat!</p>
                                    <ul class="list-inline">
                                        <li>Progress: 22.12.2020 – 22.1.2021</li>
                                        <li>Věk: 14 let</li>
                                    </ul>
                                    <button class="btn btn-danger text-uppercase" data-dismiss="modal" type="button"><i class="fas fa-times mr-1"></i>Zavřít</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                toggles: {
                    first: false,
                    second: false,
                    third: false
                }
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: black;
    }

    li {
        color: black;
    }

    p {
        color: black;
    }

    .btn {
        border: none;
        border-radius: 30px;
        position: relative;
        padding: 12px 30px;
        margin: 10px 1px;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0;
        background-color: #ff5f5f;
        will-change: box-shadow, transform;
        transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #ff5f5f;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #ff5f5f;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    small {
      font-size: 60%;
    }
</style>