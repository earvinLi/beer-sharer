// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTodos = `query GetTodos {
  getTodos {
    id
    name
    description
    priority
  }
}
`;
export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    priority
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: TableTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      priority
    }
    nextToken
  }
}
`;
