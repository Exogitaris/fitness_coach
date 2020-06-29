<template>
    <div>
        <section class="page-section bg-section-dark clearfix">
            <div class="container">
                <div class="container">
                    <div class="intro">
                        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="../assets/img/ms3.png" alt="">
                        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Michal Smetana</span>
                                <br>
                                <h3 class="section-heading-lower">Fitness Trenér</h3>
                            </h2>
                            <p class="mb-3">Cvičení se věnuji již od roku 2012. Je to můj koníček, ale i životní styl. Věřím, že díky mému profesionálnímu a individuálnímu přístupu dokážu najít efektivní řešení pro každého z Vás. Jste připraveni na změnu?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
    .bg-faded {
        background-color: rgba(255, 85, 85, 0.8);
    }

    .intro {
        position: relative;
    }

    @media (min-width: 992px) {
        .intro .intro-img {
            width: 45%;
            float: right;
        }

        .intro .intro-text {
            left: 0;
            width: 60%;
            margin-top: 16rem;
            position: absolute;
        }
        .intro .intro-text .intro-button {
            width: 100%;
            left: 0;
            position: absolute;
            bottom: -2rem;
        }
    }
</style>