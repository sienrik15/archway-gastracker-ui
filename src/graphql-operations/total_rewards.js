import { gql } from "graphql-tag"

export const TOTAL_REWARDS = gql`
    query {
        total_rewads(limit: 20, order_by: {rewards: desc}) {
        contract
        rewards
        }
    }
`