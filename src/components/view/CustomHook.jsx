/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useIncrement } from "../../hook/useIncrement";
import { useToggle } from "../../hook/useToggle";

export const CustomHook = () => {

  const [checked, toggleChecked] = useToggle()

  const { count, increment, decrement} = useIncrement({
    initialValue: 5,
    min: 0
  })

  return (
    <>
      <h1>Les hooks personnalisés</h1>
      
      <p className="pb-2">
        <strong>
            <a href="https://usehooks.com/"></a>
        </strong>
      </p>
      <h2>Cas de figure n°1</h2>
      <p>
        Dans une appli react on peut souvent avoir besoin de faire varier une valeur 
        entre vrai et faux (par exemple: afficher/masquer en fonction de la valeur d'une case à cocher)
        Pour cela, on peut mettre en place un hook personnalisé
      </p>

      <div className="p-5">
        <input type="checkbox"
            checked={checked}
            onChange={toggleChecked}
        />
        <p>{ checked && 'je suis coché'}</p>
      </div>

      <h2>Cas de figure n°1</h2>
        <p>
            Je veux utiliser un hook personnalisé pour incrémenter / décrémenter
            une valeur
        </p>
        {count}
        <button className="btn" onClick={increment}>Incrémenter</button>
        <button className="btn" onClick={decrement}>Décrémenter</button>
    </>
  );
}