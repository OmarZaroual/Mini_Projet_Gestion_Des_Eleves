import React from 'react';


function BarreRecherche(props) {
  return (
    
    <input
      type="text"
      placeholder="Rechercher"
      value={props.termeRecherche} // La valeur du champ est contrôlée par le prop termeRecherche
      onChange={props.onRechercheChange} // Appelle la fonction de changement lorsqu'une entrée est saisie
    />
  );
}

export default BarreRecherche;
