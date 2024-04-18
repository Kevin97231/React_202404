/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormProduct = ({productToModify, submitMethod, closeModal}) => {
  
    const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  useEffect(() => {
    Object.keys(productToModify).forEach(key => {
        clearErrors(key)
        setValue(key, productToModify[key])
    })
  },[productToModify, setValue, clearErrors])

  const onSubmit = (product) => {
    submitMethod(productToModify.id, product)
    closeModal()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>
          <span>Nom</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          {...register("name", {
            required: "nom requis",
            // pattern: {
            //     value: /.............../
            //     message: '......'
            // }
          })}
        />
      </label>
          { errors.name && <span>{errors.name.message}</span> }
      <label>
        <div>
          <span>Prix</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          {...register("price", {
            required: "prix requis",
            max: { value: 100, message: "Valeur max -> 100" },
            min: { value: 0, message: "valeur min -> 0" },
          })}
        />
      </label>
      { errors.price && <span>{errors.price.message}</span> }

      <label>
        <div>
          <span>Quantité</span>
        </div>
        <input
          type="number"
          className="input input-bordered w-full max-w-xs"
          {...register("number", {
            required: "quantité requise",
            max: { value: 1000, message: "Valeur max -> 1000" },
            min: { value: 0, message: "valeur min -> 0" },
          })}
        />
      </label>
      { errors.number && <span>{errors.number.message}</span> }

      <label>
        <div>
          <span>Category</span>
        </div>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          {...register("category", {
            required: "catégorie requise",
            maxLength: { value: 10, message: "10 caractères max" },
          })}
        />
      </label>
      { errors.category && <span>{errors.category.message}</span> }

      <button type="submit">Soumetttre</button>
    </form>
  );
};
