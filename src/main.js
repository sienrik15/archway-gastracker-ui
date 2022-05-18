//import { createApp, provide, h } from "vue"
import { createApp, h } from "vue"
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";

import { ApolloClient, createHttpLink, InMemoryCache, concat } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

import { createApolloProvider } from '@vue/apollo-option'
import { DataTable } from "@jobinsjp/vue3-datatable"

// Create an http link:
// 
// http://135.181.153.131:8080/v1/graphql
// https://g-archway.giansalex.dev/v1/graphql

const authLink = setContext(async (_, { headers }) => {
    return {
        headers: {
            ...headers,
            "content-type": "text/plain;charset=UTF-8"
        },
    };
});

// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://g-archway.giansalex.dev/v1/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: concat(authLink, httpLink),
    cache,
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

const appInstance = createApp({
    render: () => h(App),
})
appInstance.use(apolloProvider);
appInstance.use(store);
appInstance.use(router);
appInstance.use(SoftUIDashboard);
appInstance.use(DataTable);
appInstance.mount("#app");