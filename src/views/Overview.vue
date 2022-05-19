<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
        <mini-statistics-card
          title="Today Rewards"
          :value="rewards_sum/(1000000)+' uTORII'"
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
      <div class="col-xl-4 col-sm-6 mb-xl-0 mb-4">
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
      <!--<div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
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
      </div>-->
    </div> 
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
            <div class="card-header pb-0">
                <h6>TOTAL CONTRACT REWARDS</h6>
                <vsud-switch style="position:absolute; top: 21px; right: 25px;"
                  id="refresh_5s"
                  name="email"
                  class="ps-0 ms-auto"
                  @click="refresh_contracts(is_checked)"
                  :checked='is_checked'
                  label-class="mb-0 text-body ms-3 text-truncate w-120"
                  >Refresh 5s</vsud-switch
                >
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
                            Rewards uTORII
                        </th>
                        <th class="text-secondary opacity-7"></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in total_rewads" :key="index" class="hv_link">
                                <td>
                                    <router-link :to="{ name: 'Contract', params: { id: item.contract }}" class="font-weight-bold">
                                      <div class="d-flex px-2 py-1">
                                        <div class="d-flex flex-column justify-content-center">
                                            <h6 class="mb-0 text-sm sub_hv_link" >{{item.contract}}</h6>
                                            <!--<p class="text-xs text-secondary mb-0">
                                            laurent@creative-tim.com
                                            </p>-->
                                        </div>
                                      </div>
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="{ name: 'Contract', params: { id: item.contract }}"
                                     class="text-xs font-weight-bold mb-0 sub_hv_link" style="display:flex"> 
                                     <div>
                                        <span v-if="item.rewards/(1000000)>=10000" class="icon_coin"></span> 
                                        <span v-else class="icon_coin-top"></span> 
                                     </div>
                                     <div class="p-1">
                                       {{item.rewards/(1000000)}}
                                     </div>
                                     </router-link>
                                </td>
                                <td class="align-middle">
                                    <router-link :to="{ name: 'Contract', params: { id: item.contract }}"
                                    class="text-secondary font-weight-bold text-xs sub_hv_link"
                                    data-toggle="tooltip"
                                    data-original-title="Edit user"
                                    >
                                    View
                                    <span>
                                      <i class="fa fa-solid fa-eye"></i>
                                    </span>
                                    </router-link>
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
import VsudSwitch from "@/components/VsudSwitch.vue";

export default {
    name: "Overview",
    components: {
        MiniStatisticsCard,
        VsudSwitch
    },
    data(){
        return {
            img1,
            rewards_sum:0,
            total_rewads:[],
            //contracts_rewards:[],
            iconBackground: "bg-gradient-success",
            is_pollInterval:null,
            is_checked:false
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
        //console.log(el.rewards)
      });
    },
    refresh_contracts($event){
        this.is_checked = !$event
        if(this.is_checked){
          this.$apollo.queries.total_rewads.startPolling(5000)
        }else{
          this.$apollo.queries.total_rewads.stopPolling()
        }
        //this.$apollo.queries.startPolling(ms) / stopPolling()
        console.log(this.is_checked)
    }
  },
  apollo: {
    // Apollo specific options
    total_rewads:{
      query: TOTAL_REWARDS,
      //pollInterval: this.is_pollInterval,
      /*pollInterval() {
        //reactive pollInterval.
        return this.is_pollInterval
      }*/
    },
  },
  watch: {
    total_rewads: {
      handler() {
        this.get_total_rewards()
      }
    }
  }
}
</script>
<style scoped>
.hv_link:hover{
  color: #2d6519 !important
}
.hv_link:hover .sub_hv_link{
  color: #2d6519 !important
}
.icon_coin-top {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #FEBD17;
  background-image: url("~@/assets/img/icons/noun-coin-top.svg") no-repeat center;
  -webkit-mask: url("~@/assets/img/icons/noun-coin-top.svg") no-repeat center;
  mask: url("~@/assets/img/icons/noun-coin-top.svg") no-repeat center;
}
.icon_coin {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #FEBD17;
  background-image: url("~@/assets/img/icons/noun-coin.svg") no-repeat center;
  -webkit-mask: url("~@/assets/img/icons/noun-coin.svg") no-repeat center;
  mask: url("~@/assets/img/icons/noun-coin.svg") no-repeat center;
}
</style>