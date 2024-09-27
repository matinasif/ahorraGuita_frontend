import React, { useState } from 'react'

const ListPreciosComponent = () => {

    const [precios,setPrecios] = useState([]);

  return (
    <div className='container'>
        <h2 className='text-center'>Lista de precios</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>Producto</th>
                <th>importe</th>
                <th>sucursal</th>
               
            </thead>
            <tbody>
                {
                    precios.map(precio =>
                        <tr key={precio.id}>
                            <td>{precio.producto}</td>
                            <td>{precio.importe}</td>
                            <td>{precio.Sucursal}</td>
                        </tr>
                        
                    )
                }
            </tbody>

        </table>
      
    </div>
  )
}

export default ListPreciosComponent
