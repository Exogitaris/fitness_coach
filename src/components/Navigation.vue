<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Michal Smetana</a>
                <div class="navbar-toggler navbar-toggler-right" @click="showNavigation"><font-awesome-icon :icon="icon" /></div>
                <div class="collapse navbar-collapse" :class="{show: this.isCollapsed}" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#sluzby">Služby</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#zkusenosti">O mně</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#cenik">Ceník</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#kontakt">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapsed: false,
                icon: 'bars'
            }
        },
        methods: {
            showNavigation() {
                this.isCollapsed = this.isCollapsed === false;
                if (this.icon === 'bars') {
                    this.icon = 'times'
                } else {
                    this.icon = 'bars'
                }
            }
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>