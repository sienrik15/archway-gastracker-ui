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
                    <table class="table align-items-center mb-0">
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
                                        <!--<p class="text-xs text-secondary mb-0">
                                        laurent@creative-tim.com
                                        </p>-->
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
                                <!--<td class="align-middle">
                                    <a
                                    href="javascript:;"
                                    class="text-secondary font-weight-bold text-xs"
                                    data-toggle="tooltip"
                                    data-original-title="Edit user"
                                    >Copy</a
                                    >
                                </td>-->
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
import { BLOCK_REWARDS } from "../graphql-operations/block_rewards"
export default {
    name:"Rewards",
    data(){
        return {
            block_rewards:[],      
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
    block_rewards: BLOCK_REWARDS
  },
}
</script>          