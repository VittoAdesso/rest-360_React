import React from 'react'

const DetalleTicketsArticulos = (props) => {

    let datosArticles = props.articles;

  return (
    <>
    {datosArticles.map((item) => (
        <tr key={item.id}>
          <td data-th="Ticket:" className="div__table__center"><span>{item.id}</span></td>
          <td data-th="Mesa:" className="div__table__center"><span>{item.name}</span></td>
          <td data-th="Importe:" className="div__table__right"><span>{item.costNeto}</span></td>
          <td data-th="IVA:" className="div__table__right"><span>{item.iva}</span></td>
          <td data-th="P.V.P.:" className="div__table__right"><span>{item.pvp}</span></td>
        </tr>
      ))}
      </>
  )
}

export default DetalleTicketsArticulos

