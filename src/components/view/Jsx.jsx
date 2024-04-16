/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
function Jsx() {
  const title =
    "Bonjour <strong> tout le monde, </strong>bienvenue sur notre appli. react !! ";

  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  // const user = undefined;

  const fruits = ["banane", "abricot", "pomme"];

  const formatName = (user) => `${user.firstName} ${user.lastName}`;
  // const formatName2 = (user) => <h1>{user.firstName} {user.lastName}</h1>

  const img = "../src/assets/react.svg";

  const style = { color: "blue", backgroundColor: "gray" };

  const handleClick = (e) => {
    console.log(e);
    alert("j'ai cliqué !");
  };

  return (
    <>
      {title}

      {/* Attention, à éviter (sauf cas particulier) */}
      <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>

      <h1 id="title" className="titleClass">
        Mon titre en rouge !
      </h1>
      {/* 
    <p>Prénom : {user.firstName}</p>
    <p>Nom : {user.lastName}</p>

    <p>{formatName(user)}</p>
    {formatName2(user)} */}

      <div>
        <img src={img}></img>
      </div>

      {/* Affichage conditionnel */}

      {user ? <h1>Bonjour {formatName(user)}</h1> : <h1>Bonjour inconnu</h1>}

      {user && <h1>Bonjour {formatName(user)}</h1>}

      <h1 style={style}> Texte en bleu</h1>

      <button onClick={handleClick}>Cliquez !</button>

      <button onClick={() => alert("j'ai encore cliqué !!")}>Cliquez !</button>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <Children color="blue" text="Voici ton texte !" />
      <Children color="blue" text="Voici ton texte !">
        Ici, la prop. 'children' de mon enfant
      </Children>

      <Children2 id="myId" className="myClassName">
        Tiens, enfant2 voici ton texte !
      </Children2>
    </>
  );
}

export default Jsx;


const Children = ({color, text, children = "Passe moi un texte sur la prop 'children' !"}) => {

    console.log(color)
  
    return(
      <>
        { text ? <p>{text}</p> : <p>Tu ne m'as pas envoyé de texte !</p> }
        {children}
      </>
    )
  }
  
  // const Children2 = ({children }) => {
  
  //   const props = {
  //     id: 'myId',
  //     className: 'myClassName'
  //   }
  
  //   return(
  //       <h1 style={{color: 'blue'}} {...props}>
  //         {children}
  //       </h1>
  //   )
  
  // }
  
  const Children2 = ({children, ...props }) => {
  
    return(
        <h1 style={{color: 'blue'}} {...props}>
          {children}
        </h1>
    )
  }



