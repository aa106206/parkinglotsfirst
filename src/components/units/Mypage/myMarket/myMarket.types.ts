import { gql } from "@apollo/client";

export const FETCH_USEDITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      price
      createdAt
    }
  }
`;

export const FETCH_USED_ITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      price
      createdAt
    }
  }
`;

export const FETCH_USEDITEMS_COUNT_I_SOLD = gql`
  query {
    fetchUseditemsCountISold
  }
`;

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;
