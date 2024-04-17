/* eslint-disable react/prop-types */
export const ListProducts = ({products, afficherHorsStock, search}) => {
  return (
      <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
            </tr>
        </thead>
        <tbody>
            {
               products
               .filter( product => (
                    afficherHorsStock ? true : product.number > 0)
                    && (product.name.toLowerCase().includes(search.toLowerCase()))
                )
               .map(product => 
                <tr key={product.name}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.number}</td>
                </tr>
                ) 
            }
        </tbody>
      </table>
  );
}