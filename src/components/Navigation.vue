<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Michal Smetana</a>
                <div @click="openMenu" class="navbar-toggler navbar-toggler-right" :class="menuClass">
                    <div class="menu-btn__burger"></div>
                </div>
                <div class="navbar-collapse" :class="collapsing" :style="collapseStyle" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#sluzby">Služby</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#zkusenosti">O mně</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#klienti">Klienti</a></li>
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
                menuOpen: false,
                menuClass: 'menu-btn',
                collapsing: 'collapse',
                collapseStyle: ''
            }
        },
        methods: {
            openMenu() {
                if (this.menuOpen === false) {
                    this.menuClass = "menu-btn open";
                    this.menuOpen = true;
                    this.showMenu();
                } else {
                    this.menuClass = "menu-btn";
                    this.menuOpen = false;
                    this.hideMenu();
                }
            },
            showMenu() {
                this.collapsing = "collapsing";
                setTimeout(() => {
                    this.collapseStyle = "height: 155px";
                },1)
                setTimeout(() => {
                    this.collapseStyle = ''
                    this.collapsing = "collapse show"
                },500);
            },
            hideMenu() {
                this.collapsing = "collapsing";
                setTimeout(() => {
                    this.collapsing = "collapse"
                },500);
            }
        }
    }
</script>

<style scoped>
    .menu-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        cursor: pointer;
        transition: all .5s ease-in-out;
        /* border: 3px solid #fff; */
    }
    .menu-btn__burger {
        width: 30px;
        height: 4px;
        background: #fff;
        border-radius: 5px;
        transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before,
    .menu-btn__burger::after {
        content: '';
        position: absolute;
        width: 30px;
        height: 4px;
        background: #fff;
        border-radius: 5px;
        transition: all .5s ease-in-out;
    }
    .menu-btn__burger::before {
        transform: translateY(-10px);
    }
    .menu-btn__burger::after {
        transform: translateY(10px);
    }
    /* ANIMATION */
    .menu-btn.open .menu-btn__burger {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
    }
    .menu-btn.open .menu-btn__burger::before {
        transform: rotate(45deg) translate(25px, -25px);
    }
    .menu-btn.open .menu-btn__burger::after {
        transform: rotate(-45deg) translate(25px, 25px);
    }
</style>