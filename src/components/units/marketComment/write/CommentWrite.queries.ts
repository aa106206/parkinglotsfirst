import { gql } from "@apollo/client";

// export const CREATE_COMMENT = gql`
//   mutation createBoardComment(
//     $createBoardCommentInput: CreateBoardCommentInput!
//     $boardId: ID!
//   ) {
//     createBoardComment(
//       createBoardCommentInput: $createBoardCommentInput
//       boardId: $boardId
//     ) {
//       _id
//       writer
//       contents
//       createdAt
//     }
//   }
// `;

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      contents
      user {
        name
        _id
      }
      createdAt
    }
  }
`;

export const UPDATE_USED_ITEM_QUESTION = gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
        _id
      }
      updatedAt
    }
  }
`;

// export const UPDATE_COMMENT = gql`
//   mutation updateBoardComment(
//     $updateBoardCommentInput: UpdateBoardCommentInput!
//     $password: String
//     $boardCommentId: ID!
//   ) {
//     updateBoardComment(
//       updateBoardCommentInput: $updateBoardCommentInput
//       password: $password
//       boardCommentId: $boardCommentId
//     ) {
//       _id
//       writer
//     }
//   }
// `;
