import { useEffect, useState } from "react";
import { useAxios } from "../../hook/useAxios";
import { Consigne } from "../ExerciceAPI/Consigne";
import { Table } from "../ExerciceAPI/Table";

export const ExerciceRequestWithCustomHook = () => {
  
  const { get, remove, put } = useAxios();
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log('Requête en cours')
    get()
        .then(result => {
            console.log(result)
            setProducts(result)
        })
  },[])

  const handleRemoveProduct = (product) => {
    console.log('PRODUCT A SUPPRIMER: ', product);
    remove(product.id)
      .then(() => {
        setProducts(prevProducts => prevProducts.filter(productFilter => product.id !== productFilter.id));
      })
      .catch(error => console.error("Error removing product:", error));
  };

  const updateProduct = (id, data) => { 
    put(id, data)
      .then( (response) => {
        setProducts(prevProducts => 
          prevProducts.map(productMap => 
            productMap.id === response.id ? {...response} : productMap
          )
        )
      })
  }

    return (
    <>
     <Consigne/>
     <Table data={products} remove={handleRemoveProduct} update={updateProduct}/>
    </>
  );
}