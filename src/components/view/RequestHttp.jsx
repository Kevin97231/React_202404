/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

export const RequestHttp = () => {
  const url = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  // J'utilise un useEffect() qui me permettra de charger les données au montage du composant
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          setProducts(response.data);
        })
        .catch((err) => console.log(err.message))
        .finally(() => console.log("requette terminée !"));
    };
    fetchData();
  }, []);

  const addProduct = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target)

    const newProduct = {
      category: formData.get('category'),
      name: formData.get('name'),
      number: formData.get('number'),
      price: formData.get('price')
    }

    console.log('formdata', formData)
    console.log('nouveau produit ', newProduct)

    axios.post(url, newProduct)
      .then(response => {
        console.log('response du post',response)
        setProducts( prevProduct => [...prevProduct, response.data])
      .catch(err => console.log("une erreur s'est produite", err.message))  
      })
  }

  return (
    <>
      <h1>Les requête HTTP</h1>
      <ul>
        <li>
          <strong>GET</strong> http://localhost:3001/products
        </li>
        <li>
          <strong>POST</strong> http://localhost:3001/products
        </li>
        <li>
          <strong>PUT</strong> http://localhost:3001/products/id
        </li>
        <li>
          <strong>DELETE</strong> http://localhost:3001/products/id
        </li>
      </ul>
      <div className="border m-2 p-5 w-fit">
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>QUantité</th>
              <th>Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.number}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="border m-2 p-5 w-fit">
        <form onSubmit={addProduct}>
          <div className="grid grid-cols-4 gap-4 mb-5">
            <input
              name="name"
              placeholder="Nom du produit: "
              type="text"
              className="flex input input-bordered"
            />
            <input
              name="number"
              placeholder="Quantité"
              type="number"
              className="flex input input-bordered"
            />
            <input
              name="price"
              placeholder="Prix"
              type="number"
              className="flex input input-bordered"
            />
            <input
              name="category"
              placeholder="categorie"
              type="text"
              className="flex input input-bordered"
            />
          </div>
          <button type='submit' className="btn">Ajouter le produit</button>
        </form>
      </div>
    </>
  );
};
