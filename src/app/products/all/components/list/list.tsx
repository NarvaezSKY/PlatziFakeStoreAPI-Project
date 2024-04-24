import { Card } from './components'

export const List = () => {
  return (
    <div>
      {[1, 2, 3].map((item) => {
        return <Card key={item} />
      })}
    </div>
  )
}
