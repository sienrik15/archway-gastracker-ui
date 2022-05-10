/**
*/

import { createApp, provide, h } from "vue"
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"


/*const getHeaders = () => {
    const headers = {}
    const token = window.localStorage.getItem("apollo-token")
    if (token) {
        headers["Authorization"] = `Bearer ${token}`
    }
    return headers
}*/

// Create an http link:
// 
// http://135.181.153.131:8080/v1/graphql
// https://g-archway.giansalex.dev/v1/graphql
const httpLink = new HttpLink({
    uri: "https://g-archway.giansalex.dev/v1/graphql",
    fetch,
    //headers: getHeaders()
})

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    /*cache: new InMemoryCache({
        appTypename: true
    }),*/
})


const appInstance = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },
    render: () => h(App),
})
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.mount("#app");
