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

export function REWARDS_DATE_FILTER() {
    return gql`
    query {
        block(where: {join_block_reawards: {contract: {_eq: "archway1lat58md32hx95884xsv0nn6c4fl49z8w7uajcwmgvs67v03q8fssp4lswf"}}, timestamp: {_gte: "2022-04-25T00:00", _lte: "2022-04-27T00:00"}}, order_by: {timestamp: asc}) {
          hash
          height
          num_txs
          proposer_address
          timestamp
          total_gas
          join_block_reawards {
            contract
            gas_consumed
            height
            id
            inflation
            rewards
          }
        }
      }`
      
}