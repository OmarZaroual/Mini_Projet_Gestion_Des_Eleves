import React, { useState } from 'react';
import BarreRecherche from './BarreRecherche';
import './style.css';


const eleves = [
  'Omar',
  'Jamal',
  'Safaa',
  'Younes',
  'Zakaria',
  'Hayat',
  'Ouafae',
  'Khadija'
];


function ListeEleves() {
  const [termeRecherche, setTermeRecherche] = useState('');

  // Fonction pour gérer les changements dans la barre de recherche
  function handleRechercheChange(event) {
    setTermeRecherche(event.target.value);
  }

  // Filtre la liste des élèves en fonction du terme de recherche
  // Convertit le nom de l'élève et le terme de recherche en minuscules
  // et vérifie si le terme de recherche est contenu dans le nom de l'élève
  const elevesFiltres = eleves.filter(eleve => 
    eleve.toLowerCase().includes(termeRecherche.toLowerCase())
  );

  return (
    <div>

      <BarreRecherche termeRecherche={termeRecherche} onRechercheChange={handleRechercheChange} />
      <ul>
        {elevesFiltres.map((eleve, index) => (
          <li key={index} style={{ backgroundColor: index % 2 === 0 ? 'lightgray' : 'white' }}>
            {eleve}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeEleves;
