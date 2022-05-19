<template>
  <div class="py-4 container-fluid">
     
    <div class="row">
      <div class="col-12">
        <div class="card mb-4">
            <div class="card-header pb-0">
                <h6>CONTRACT REWARDS</h6>
            </div>
            <div class="card-body px-0 pt-0 pb-2">
                <div class="table-responsive p-0">
                    <!--<table class="table align-items-center mb-0">
                        <thead>
                        <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                            Contract
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Rewards
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            inflation
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            height
                        </th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                            Gas consumed
                        </th>
                        <th class="text-secondary opacity-7"></th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in block_rewards" :key="index">
                                <td>
                                    <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
                                        <h6 class="mb-0 text-sm">{{item.contract}}</h6>
                                    </div>
                                    </div>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.rewards}}</p>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.inflation}}</p>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.height}}</p>
                                </td>
                                <td>
                                    <p class="text-xs font-weight-bold mb-0">{{item.gas_consumed}}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>-->
                    <data-table :rows="block_rewards_model" :loading="isLoading" top-pagination :pagination="pagination" striped sn @loadData="load_data"/>
                </div>
            </div>
        </div>    
      </div>
    </div>
  </div>
</template>
<script>
import { BLOCK_REWARDS } from "../graphql-operations/block_rewards"
import { DataTable } from "@jobinsjp/vue3-datatable"

export default {
    name:"Rewards",
    components: {
        DataTable
    },
    data(){
        return {
            block_rewards:[], 
            block_rewards_model:[],
            block_rewards_aggregate:1000,
            pagination:{},
            limit_vl:10,
            offset_vl:0,
            query_page:0,
            isLoading:true,     
        };
    },
    mounted(){
        /*const privateTodosQuery = useQuery(BLOCK_REWARDS)
        const privateTodos = useResult(privateTodosQuery.result, [], (data) => data)
        this.contracts_rewards = privateTodos.value.block_rewards
        console.log(this.contracts_rewards)*/
    },
    apollo: {
    // Apollo specific options
    //block_rewards: BLOCK_REWARDS,
        block_rewards:{
            query: BLOCK_REWARDS,
            variables(){
                return{
                    limit_vl:this.limit_vl,
                    offset_vl:this.offset_vl
                }
            },
            result(result) {
                this.block_rewards_aggregate = result.data.block_rewards_aggregate.aggregate.count
                this.isLoading = false
            }
        }
    },
    methods:{
        load_data(query){
            //console.log(this.pagination)
            //query.per_page
            this.query_page = query.page
            this.isLoading = true
            this.limit_vl = parseInt(query.per_page)
            this.offset_vl = (this.limit_vl*parseInt(query.page))-this.limit_vl 
            this.pagination = { per_page:parseInt(query.per_page), page:parseInt(query.page), total: this.block_rewards_aggregate }
            this.$apollo.queries.block_rewards.refetch()
        }
    },
    watch: {
        block_rewards: {
            handler(now_block_rewards) {
                //now_block
                this.isLoading = false
                var block_rewards_list = []
                now_block_rewards.forEach(element => {
                    var table_block_rewards={
                        //CONTRACT:element.join_block_reawards[0].contract,
                        Contract:element.contract,
                        Rewards:element.rewards/1000000,
                        inflation:element.inflation/1000000,
                        height:element.height,
                        'GAS CONSUMED':element.gas_consumed,
                    }
                    block_rewards_list.push(table_block_rewards)
                });
                this.block_rewards_model = block_rewards_list
                this.pagination = { per_page:this.limit_vl, page: this.query_page, total: this.block_rewards_aggregate }
            }
        }
    },
}
</script>          