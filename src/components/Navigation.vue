<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Michal Smetana</a><button class="navbar-toggler navbar-toggler-right" @click="showNavigation">Menu<i class="fas fa-bars ml-1"></i></button>
                <div class="collapse navbar-collapse" :class="{show: this.isCollapsed}" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Služby</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">O mně</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#team">Ceník</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Kontakt</a></li>
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
                isCollapsed: false
            }
        },
        methods: {
            showNavigation() {
                this.isCollapsed = this.isCollapsed === false;
            }
        }
    }
</script>

<style scoped>

</style>