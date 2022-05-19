import { gql } from "graphql-tag"

export const BLOCK_REWARDS = gql`
    query block_rewards($limit_vl:Int,$offset_vl:Int){
      block_rewards(limit: $limit_vl,offset: $offset_vl, order_by: {height: desc}) {
        height
        rewards
        contract
        gas_consumed
        id
        inflation
      }
      block_rewards_aggregate{
        aggregate {
          count
        }
      }
    }
`