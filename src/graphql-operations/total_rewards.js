import { gql } from "graphql-tag"

export const TOTAL_REWARDS = gql`
    query {
        total_rewads(limit: 20, order_by: {rewards: desc}) {
        contract
        rewards
        }
    }
`

export const TOTAL_REWARDS_FILTER = gql`
    query total_rewads($contract_id: String){
        total_rewads(where: {contract: {_eq:$contract_id}}) {
        contract
        rewards
        }
    }`

export const REWARDS_DATE_FILTER = gql`
    query block($contract_id: String!,$start_date:timestamp,$finish_date:timestamp){
          block(limit: 15, where: {join_block_reawards: {contract: {_eq: $contract_id}}, timestamp: {_gte: $start_date, _lte: $finish_date}},order_by: {timestamp: desc}) {
          hash
          height
          num_txs
          proposer_address
          timestamp
          total_gas
          join_block_reawards(where: {contract: {_eq: $contract_id}}) {
            contract
            gas_consumed
            height
            id
            inflation
            rewards
          }
        }
      }`