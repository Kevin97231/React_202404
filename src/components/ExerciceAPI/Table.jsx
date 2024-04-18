/* eslint-disable react/prop-types */
export const Table = ({data = [], remove}) => {
  
    // Attention, il faut que le composant parent ai une propriété id sinon la clé 
    // fournise dans la .map du body du tableau ne pourra pas être attribuée

    let cles = [];
    if(data.length > 0){
        cles = Object.keys(data[0]);
    }
  
    return (
    <div className="overflow-x-auto">
        <table className="table table-zebra w-4/6">
            <thead>
                <tr>
                    {
                        cles.map(cle => 
                            <th key={cle}>{cle}</th>
                        )
                    }
                    <th>Modifier / Supprimer</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(product => 
                        <tr key={product.id}>
                            {
                                cles.map(cle => 
                                    <td key={cle}>{product[cle]}</td>
                                )
                            }
                            <td>
                                <button
                                    className="mr-5 btn btn-warning"
                                    onClick={() => remove(product)}
                                >Supprimer</button>
                            </td>
                        </tr>
                    )
                }
               
            </tbody>
        </table>
    </div>
  );
}