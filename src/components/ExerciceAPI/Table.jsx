/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FormProduct } from "./FormProduct";
import { Modal } from "./Modal";

/* eslint-disable react/prop-types */
export const Table = ({data = [], remove, update}) => {
  
    // Attention, il faut que le composant parent ai une propriété id sinon la clé 
    // fournise dans la .map du body du tableau ne pourra pas être attribuée

    const [productToModify, setProductsToModify] = useState({})

    let cles = [];
    if(data.length > 0){
        cles = Object.keys(data[0]);
    }
  
    const handleUpdate = (product) => {
        setProductsToModify(product)
        document.getElementById("my_modal").showModal()
    }

    const closeModal = () => {
        document.getElementById("my_modal").close()
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
                                <button
                                    className="mr-5 btn btn-warning"
                                    onClick={() => handleUpdate(product)}
                                >Modifier</button>
                            </td>
                        </tr>
                    )
                }
               
            </tbody>
        </table>
        <Modal content={<FormProduct productToModify={productToModify} submitMethod={update} closeModal={closeModal}/>}/>
    </div>
  );
}