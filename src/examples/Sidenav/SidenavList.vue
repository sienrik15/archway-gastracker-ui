<template lang="pug">
#sidenav-collapse-main.w-auto.h-auto.collapse.navbar-collapse.max-height-vh-100.h-100
  ul.navbar-nav
    li.nav-item
      sidenav-collapse(navText='Overview' :to="{ name: 'Overview' }")
        template(#icon='')
          spaceship
    li.nav-item
      sidenav-collapse(navText='Rewards' :to="{ name: 'Rewards' }")
        template(#icon='')
          Box3d
</template>
<script>
import SidenavCollapse from "./SidenavCollapse.vue";
//import SidenavCard from "./SidenavCard.vue";
//import Shop from "../../components/Icon/Shop.vue";
//import Office from "../../components/Icon/Office.vue";
//import CreditCard from "../../components/Icon/CreditCard.vue";
import Box3d from "@/components/Icon/Box3d.vue";
//import CustomerSupport from "../../components/Icon/CustomerSupport.vue";
//import Document from "../../components/Icon/Document.vue";
import Spaceship from "@/components/Icon/Spaceship.vue";
//import Settings from "../../components/Icon/Settings.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String,
  },
  data() {
    return {
      title: "Soft UI Dashboard PRO",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  components: {
    SidenavCollapse,
    //SidenavCard,
    //Shop,
    //Office,
    //CreditCard,
    Box3d,
    //CustomerSupport,
    //Document,
    Spaceship,
    //Settings,
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>
