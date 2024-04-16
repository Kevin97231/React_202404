import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const Formulaire = () => {
  const [name, setName] = useState("entrez quelque chose !!");

  const handleNameChange = (e) => {
    // 'e.target.value' est la valeur présente dans l'input
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target))
  }

  return (
    <>
      <h1>Les formulaires</h1>

      <h2>Les champs contrôlés</h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler les champs
        contrôlés En utilisant le <strong>onChange()</strong> d'une input et le
        hook useState() Ainsi, nous pouvons mettre à jour une variable lié à
        l'input à chaque changement (donc à chaque fois qu'un caractère est
        ajouté ou supprimé)
      </p>

      <div>
        <p>{name}</p>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <h2>Les formulaires 'classiques'</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="login"
          type="text"
          defaultValue='login'
        />
          <input
          name="password"
          type="text"
          defaultValue='password'
        />

        <button className="btn">Envoyer</button>

      </form>
    </>
  );
};
