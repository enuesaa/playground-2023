
// 実際どこで使うのか
type Props = {
  name: string;
}
export const Chart = ({ name }: Props) => {
  return (
    <section>
      {name}
    </section>
  )
}
