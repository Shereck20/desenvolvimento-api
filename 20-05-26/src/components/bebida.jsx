export default function Bebida({ bebida }) {
  return (
    <div>
      <ul>
        {bebida.map((bebida) => (
          <li key={bebida.id}>
            <p>{bebida.nome}</p>
            <p>{bebida.quantidade}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}