import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      contents
      images
      remarks
      tags
      seller {
        picture
        name
      }
      pickedCount
      price
      buyer {
        _id
        name
      }
      seller {
        _id
        name
      }
      soldAt
    }
  }
`;

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        zipcode
        address
        addressDetail
        lat
        lng
        createdAt
        updatedAt
        deletedAt
      }
      buyer {
        _id
        name
      }
      seller {
        _id
        name
      }
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const FETCH_USED_ITEM_OF_THE_BEST = gql`
  query {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      pickedCount
      images
    }
  }
`;
