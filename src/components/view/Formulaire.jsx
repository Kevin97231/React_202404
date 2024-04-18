/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";

/* eslint-disable react/no-unescaped-entities */
export const Formulaire = () => {
  const [name, setName] = useState("entrez quelque chose !!");

  const handleNameChange = (e) => {
    // 'e.target.value' est la valeur présente dans l'input
    setName(e.target.value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(new FormData(e.target))
  }

// _______________Formulaire avec vérif_______________


  const { register, handleSubmit, formState: {errors} } = useForm();

  const submitWithVerif = (data) => {
    // console.log('REGISTER -> ',register("password", {
    //   required: "mot de passe requis",
    //   pattern: {
    //     value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/:;,.]).{8,}$/,
    //     message: "Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiifre et un caractère spécial"
    // }
    // }))

    console.log("Formulaire envoyé !", data)
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
      <form onSubmit={handleSubmit2}>
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

      <h2>FOrmulaire avec Vérif (utilisation de react-hook-form)</h2>
      <form onSubmit={handleSubmit(submitWithVerif)}>

        <input 
          type = "email"
          className="input m-2 input-bordered"
          {
            ...register("login", {
              // required: true
              required: "login requis",
              // pattern: {
              //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              //   message: "Adresse mail invalide"
              // }
            })
          }
        />
        { errors.login && <p className="text-red-500 text-sm">{errors.login.message}</p> }

        <input
          type="password"
          className="input m-2 input-bordered"
          {
            ...register("password", {
              required: "mot de passe requis",
              pattern: {
                value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/:;,.]).{8,}$/,
                message: "Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiifre et un caractère spécial"
            }
            })
          }
        />
        { errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p> }

        <button type="submit" className="btn">Se connecter</button>
      </form>


    </>
  );
};
