// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo(
  $id: ID
  $name: String
  $description: String
  $priority: Int
) {
  onCreateTodo(
    id: $id
    name: $name
    description: $description
    priority: $priority
  ) {
    id
    name
    description
    priority
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo(
  $id: ID
  $name: String
  $description: String
  $priority: Int
) {
  onUpdateTodo(
    id: $id
    name: $name
    description: $description
    priority: $priority
  ) {
    id
    name
    description
    priority
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo(
  $id: ID
  $name: String
  $description: String
  $priority: Int
) {
  onDeleteTodo(
    id: $id
    name: $name
    description: $description
    priority: $priority
  ) {
    id
    name
    description
    priority
  }
}
`;
