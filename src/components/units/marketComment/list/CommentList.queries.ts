import { gql } from "@apollo/client";

// export const FETCH_COMMENTS = gql`
//   query fetchBoardComments($boardId: ID!, $page: Int) {
//     fetchBoardComments(boardId: $boardId, page: $page) {
//       _id
//       writer
//       contents
//       rating
//       createdAt
//     }
//   }
// `;

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export const FETCH_USED_ITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        name
      }
      createdAt
    }
  }
`;

export const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;

//삭제할때 비밀번호는?
// export const DELETE_COMMENT = gql`
//   mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
//     deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
//   }
// `;
