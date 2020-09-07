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
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <label class="switch">
                                        <input type="checkbox" v-model="toggles.first">
                                        <span class="slider round"></span>
                                    </label>
                                    <p>PŘED / PO</p>
                                    <img v-if="toggles.first" class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/persona2.jpg" alt="" />
                                    <img v-else class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/persona1.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>Datum: Srpen 2020</li>
                                        <li>Klient: Petra</li>
                                        <li>Kategorie: Fitness</li>
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
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <label class="switch">
                                        <input type="checkbox" v-model="toggles.second">
                                        <span class="slider round"></span>
                                    </label>
                                    <p>PŘED / PO</p>
                                    <img class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/icon_people.webp" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>Datum: Září 2020</li>
                                        <li>Klient: Jakub</li>
                                        <li>Kategorie: Kulturistika</li>
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
                                    <h2 class="text-uppercase">Project Name</h2>
                                    <label class="switch">
                                        <input type="checkbox" v-model="toggles.third">
                                        <span class="slider round"></span>
                                    </label>
                                    <p>PŘED / PO</p>
                                    <img class="img-fluid d-block mx-auto" src="../../assets/img/portfolio/icon_people.webp" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul class="list-inline">
                                        <li>Datum: Duben 2019</li>
                                        <li>Klient: David</li>
                                        <li>Kategorie: Atletika</li>
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
</style>