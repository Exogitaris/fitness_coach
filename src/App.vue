<template>
  <div id="page-top">
    <app-navigation></app-navigation>
    <app-masthead></app-masthead>
    <app-michal></app-michal>
    <app-services></app-services>
    <app-about></app-about>
    <!-- <app-portfolio></app-portfolio>
    <app-modals></app-modals> -->
    <app-pricing></app-pricing>
    <transition name="component-fade" mode="out-in">
      <component @form-posted="formCompleted" :is="formComponent"></component>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation.vue";
  import Masthead from "./components/Masthead.vue";
  import Michal from "./components/Michal";
  import Services from "./components/Services.vue";
  //import Portfolio from "./components/portfolio/Portfolio.vue";
  //import Modals from "./components/portfolio/Modals.vue";
  import About from "./components/About.vue";
  import Pricing from "./components/Pricing.vue";
  import Contact from "./components/Contact.vue";
  import ContactCompleted from "./components/ContactCompleted.vue";
  import Footer from "./components/Footer.vue";

  export default {
    data() {
      return {
        formComponent: 'app-contact'
      }
    },
    methods: {
      formCompleted() {
        this.formComponent = 'app-contact-completed';
      }
    },
    components: {
      appNavigation: Navigation,
      appMasthead: Masthead,
      appMichal: Michal,
      appServices: Services,
      //appPortfolio: Portfolio,
      //appModals: Modals,
      appAbout: About,
      appPricing: Pricing,
      appContact: Contact,
      appContactCompleted: ContactCompleted,
      appFooter: Footer
    }
  }
</script>

<style>
  @import './css/styles.css';

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
