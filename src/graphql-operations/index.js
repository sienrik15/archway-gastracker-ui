import { gql } from "graphql-tag"

export const SELECT_TODOS = gql`
    query {
      total_rewads(limit: 10) {
        contract
        rewards
      }
      block_rewards(limit: 10) {
        height
        rewards
        contract
        gas_consumed
        id
        inflation
      }
    }
`