<template>
    <div>
        <section class="page-section bg-section-dark clearfix">
            <div class="container">
                <div class="container">
                    <div class="intro">
                        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="../assets/img/ms.png" alt="">
                        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Michal Smetana</span>
                                <br>
                                <span class="section-heading-lower">Fitness Trenér</span>
                            </h2>
                            <p class="mb-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris elementum mauris vitae tortor. Duis risus. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim.
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
            width: 75%;
            float: right;
            z-index: 1;
            position: absolute;
        }
        .intro .intro-text {
            left: 0;
            width: 60%;
            margin-top: 3rem;
            position: relative;
        }
        .intro .intro-text .intro-button {
            width: 100%;
            left: 0;
            position: relative;
            bottom: -2rem;
        }
    }

    @media (min-width: 1200px) {
        .intro .intro-text {
            width: 45%;
        }
    }
</style>