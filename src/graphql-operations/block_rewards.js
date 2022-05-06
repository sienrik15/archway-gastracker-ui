import { gql } from "graphql-tag"

export const BLOCK_REWARDS = gql`
    query {
      block_rewards(limit: 30, order_by: {height: desc}) {
        height
        rewards
        contract
        gas_consumed
        id
        inflation
      }
    }
`