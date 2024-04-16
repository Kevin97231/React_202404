/* eslint-disable react/prop-types */

import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const Flux = () => {
  const data = [
    { nom: "Produit 1", prix: 20.99, quantite: 5 },
    { nom: "Produit 2", prix: 15.45, quantite: 10 },
    { nom: "Produit 3", prix: 75.32, quantite: 58 },
    { nom: "Produit 4", prix: 30.0, quantite: 25 },
    { nom: "Produit 5", prix: 26.0, quantite: 16 },
  ];

  const [checked, setChecked] = useState(true)

  return (
    <>
      <h1>Les flux de données</h1>
      <h2>De parent vers enfant: </h2>

      <p>
        Pour faire passer des données d'un composant parent vers un composant
        enfant, nous devons utiliser les props
      </p>

      <ComposantEnfant text="Tiens, voici des données, mon enfant" data={data}/>

      <CheckBox checked={checked} onCheck={setChecked}/>

        <br/>
        { checked ? 'case cochée' : 'case non cochée'}

    </>
  );
};

const ComposantEnfant = ({ text = "Passe tes données !", data = [] }) => {
  return (
    <>
      {text}

      <p>Voici les objets passés par mon parent: </p>

      <div className="m-2 p-2">
        { data.length > 0 ?
            ( data.map((product) => (
                <div key={product.nom} className="border-b">
                    <p>Nom: {product.nom}</p>
                    <p>Prix: {product.prix}</p>
                    <p>Quantité: {product.quantite}</p>
                </div>
            )))
            :
            (<></>)
        }
      </div>
    </>
  );
};

export const CheckBox = ({ checked, onCheck}) => {
  return (
    <>
      <label>
        <input
            type="checkbox" 
            checked = {checked}
            onChange={ (e) => onCheck(e.target.checked) }
        />
      </label>
    </>
  );
}