<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <mini-statistics-card
          title="Today Rewards"
          :value="rewards_sum"
          :percentage="{
            value: '+505%',
            color: 'text-success',
          }"
          :icon="{
            component: 'ni ni-money-coins',
            background: iconBackground,
          }"
          direction-reverse
        />
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <mini-statistics-card
          title="Today dApps"
          :value='total_rewads.length'
          :percentage="{
            value: '+3%',
            color: 'text-success',
          }"
          :icon="{
            component: ' ni ni-world',
            background: iconBackground,
          }"
          direction-reverse
        />
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
        <mini-statistics-card
          title="New Clients"
          value="+3,462"
          :percentage="{
            value: '-2%',
            color: 'text-danger',
          }"
          :icon="{
            component: 'ni ni-paper-diploma',
            background: iconBackground,
          }"
          direction-reverse
        />
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <mini-statistics-card
          title="Sales"
          value="$103,430"
          :percentage="{
            value: '+5%',
            color: 'text-success',
          }"
          :icon="{
            component: 'ni ni-cart',
            background: iconBackground,
          }"
          direction-reverse
        />
    </div>
    </div> 
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
            <div class="card-header pb-0">
                <h6>TOTAL CONTRACT REWARDS</h6>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                    <table class="table align-items-center mb-0">
                        <thead>
                        <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Contract
                        </th>
                        <th
                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                        >
                            Rewards
                        </th>
                        <th class="text-secondary opacity-7"></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in total_rewads" :key="index">
                                <td>
                                    <router-link :to="{ name: 'Contract', params: { id: item.contract }}">
                                      <div class="d-flex px-2 py-1">
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm">{{item.contract}}</h6>
                                            <!--<p class="text-xs text-secondary mb-0">
                                            laurent@creative-tim.com
                                            </p>-->
                                        </div>
                                      </div>
                                    </router-link>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.rewards}}</p>
                                </td>
                                <td class="align-middle">
                                    <a href="#"
                                    class="text-secondary font-weight-bold text-xs"
                                    data-toggle="tooltip"
                                    data-original-title="Edit user"
                                    >
                                    View
                                    <span>
                                      <i class="fa fa-close"></i>
                                    </span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>    
      </div>
    </div>
  </div>
</template>    
<script>
//import gql from 'graphql-tag'
import { TOTAL_REWARDS } from "../graphql-operations/total_rewards"
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
import img1 from "../assets/img/team-2.jpg"

export default {
    name: "Overview",
    components: {
        MiniStatisticsCard
    },
    data(){
        return {
            img1,
            rewards_sum:0,
            total_rewads:[],
            //contracts_rewards:[],
            iconBackground: "bg-gradient-success"
        };
    },
    mounted(){
      this.get_total_rewards()  
    /*const privateTodosQuery = useQuery(TOTAL_REWARDS)
    console.log(privateTodosQuery.result)
    const privateTodos = useResult(privateTodosQuery.result, [], (data) => data)
    this.contracts_rewards = privateTodos.value.total_rewads
    console.log(this.contracts_rewards)*/
  },
  methods:{
    get_total_rewards(){
      this.total_rewads.forEach(el => {
        this.rewards_sum+=el.rewards
        console.log(el.rewards)
      });
    },
  },
  apollo: {
    // Apollo specific options
    total_rewads: TOTAL_REWARDS
  },
}
</script>