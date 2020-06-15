<template>
  <div id="page-top">
    <app-navigation></app-navigation>
    <app-masthead></app-masthead>
    <app-services></app-services>
    <app-modals></app-modals>
    <app-about></app-about>
    <app-team></app-team>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Navigation from "./components/Navigation.vue";
  import Masthead from "./components/Masthead.vue";
  import Services from "./components/Services.vue";
  import Portfolio from "./components/portfolio/Portfolio.vue";
  import Modals from "./components/portfolio/Modals.vue";
  import About from "./components/About.vue";
  import Team from "./components/Team.vue";
  import Contact from "./components/Contact.vue";
  import Footer from "./components/Footer.vue";

  export default {
    components: {
      appNavigation: Navigation,
      appMasthead: Masthead,
      appServices: Services,
      appPortfolio: Portfolio,
      appModals: Modals,
      appAbout: About,
      appTeam: Team,
      appContact: Contact,
      appFooter: Footer

    }
  }
</script>

<style>
  @import './css/styles.css';
</style>
