import { useEffect, useState } from "react";
import { useAxios } from "../../hook/useAxios";
import { Consigne } from "../ExerciceAPI/Consigne";
import { Table } from "../ExerciceAPI/Table";

export const ExerciceRequestWithCustomHook = () => {
  
  const { get, remove } = useAxios();
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

    return (
    <>
     <Consigne/>
     <Table data={products} remove={handleRemoveProduct}/>
    </>
  );
}