import { useEffect, useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const HookUseEffect = () => {
  
    const [count, setCount] = useState(0)
  
    useEffect( () => {
        console.log('Effet secondaire déclenché');
        document.title = `Count: ${count}`
    }, [count])

    return (
    <div>
      <h1>Le hook useEffect</h1>
      <ul>
        Le hook useEffect est utilisé (entre autres): 
        <li>
            Pour gérer des effets secondaires
        </li>
        <li>
            pour effecter des opérations après le rendu du composant (comme des appels API, la manipulation du DOM, la gestion d'abonnements etc ..)
        </li>
      </ul>
      <p>useEffect() est très souvent utilisé en conjonction avec un useState() pour gérer des effets secondaires à un changement d'état</p>

        <h2 className="border-t mt-5">Exemple: </h2>
        <div className="flex">
            <p className="pt-3 pr-2">Count = {count}</p>
            <button className="btn" onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
        <h4>Regardez le titre du document (nom de l'onglet)</h4>
    </div>
  );
}