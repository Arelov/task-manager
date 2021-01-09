interface TaskParam {
  children: String
}
interface ColumnParam {
  name: String
  children: String[]
}
function Task(prop: TaskParam) {
  return <div>{prop.children}</div>
}
function Column(prop: ColumnParam) {
  return (
    <div>
      <div>{prop.name}</div>
      {prop.children.map((e, i) => (
        <Task key={i}>{e}</Task>
      ))}
    </div>
  )
}

 export function Board() {
  let columns = ["b", "a"]
  return (
    <Column name="a">{["sd", "sd"]}</Column>
  )
}
