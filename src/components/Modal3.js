import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Modal1() {
  const [show, setShow] = useState(false);
  return (
    <>
      <p className="text-blue-600 cursor-pointer	" onClick={() => setShow(true)}>
        Mentions légales
      </p>
      <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Mentions légales
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>Mentions légales</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Le présent document constitue les mentions légales du site
              Internet https://StrictAssur.com. Veuillez lire attentivement les
              informations suivantes qui régissent votre utilisation du Site.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>1. Éditeur du Site et Hébergement du Site</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Le Site est édité et exploité par la société Strictassur,
              domiciliée 78, avenue Henri Martin, 75116 Paris, inscrite au
              registre unique de la Banque et Assurance ORIAS N°16000253 et au
              registre du Commerce et des Sociétés de Paris SIRET
              81495778300016; TVA INTRACOM: FR 01 814957783; APE 6622Z Activité
              des Courtiers et Agents d’Assurances.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              StrictAssur
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              78, avenue Henri Martin, 75116 Paris,
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <p>+33 1 77 93 19 92</p>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <span>contact@strictassur.com</span>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Le Directeur de la publication est Monsieur Gilles DEVEAU, gérant
              de StrictAssur
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Le Site est hébergé par la société S.A.R.L LWS, dont le siège
              social est situé à 4 rue galvani 75017 PARIS
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>2. Propriété intellectuelle</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Le Site et son contenu, y compris mais sans s'y limiter, les
              textes, graphiques, images, logos, icônes, vidéos, fichiers audio
              et logiciels, sont la propriété exclusive de StrictAssur ou de ses
              concédant de licence, et sont protégés par les lois françaises et
              internationales relatives à la propriété intellectuelle.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Toute reproduction, représentation, modification, publication,
              transmission, distribution ou exploitation totale ou partielle du
              Site ou de son contenu, sans l'autorisation écrite préalable de
              StrictAssur, est strictement interdite.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>3. Données personnelles</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Voir la rubrique&nbsp;
              <p data-toggle="modal" data-target="#pdp-txt">
                Protection des Données Personnelles
              </p>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>4. Cookies</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              La Société utilise des témoins de connexion (« cookie »), définis
              comme des fichiers informatiques stockés dans l’équipement
              terminal du Client lorsqu’il se rend sur le Site via son
              navigateur internet. Ce type de fichier, qui permet en particulier
              d’enregistrer le parcours du Client, a pour finalité de faciliter
              la communication par voie électronique, d’améliorer et
              personnaliser la qualité de service du Site et d’établir des
              statistiques mesurant l’audience des pages et des différentes
              fonctionnalités du site.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              La durée de conservation de ces informations dans l’ordinateur du
              Client est de 6 mois. Le Client peut s’opposer à l’enregistrement
              de témoins de connexion en configurant son navigateur internet.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>5. Liens externes</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Le Site peut contenir des liens vers des sites Internet tiers. Ces
              liens sont fournis uniquement pour votre commodité. Nous n'avons
              aucun contrôle sur le contenu de ces sites tiers et déclinons
              toute responsabilité quant à leur contenu, leur exactitude ou leur
              fonctionnement. L'inclusion de liens vers ces sites tiers
              n'implique aucune association, approbation ou recommandation de
              notre part.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>6. Limitation de responsabilité</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Les informations contenues sur ce site sont aussi précises que
              possibles et le site est périodiquement remis à jour, mais peut
              toutefois contenir des inexactitudes, des omissions ou des
              lacunes.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Si vous constatez une lacune, erreur ou ce qui parait être un
              dysfonctionnement, merci de bien vouloir le signaler par mail :
              <span>contact@strictassur.com</span> en décrivant le problème de
              la manière la plus précise possible (page posant problème, action
              déclenchante, type d’ordinateur et de navigateur utilisé, …).
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Les photos sont non contractuelles.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
              <strong>7. Droit applicable et juridiction compétente</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Les présentes mentions légales sont régies et interprétées
              conformément au droit français. Tout litige relatif au Site sera
              soumis à la juridiction exclusive des tribunaux
              compétents&nbsp;dont dépend le siège social de la société
              StrictAssur.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>8. Modifications des mentions légales</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Nous nous réservons le droit de modifier les présentes mentions
              légales à tout moment. Les modifications prendront effet dès leur
              publication sur le Site. Il est de votre responsabilité de
              consulter régulièrement les mentions légales afin de prendre
              connaissance des éventuelles modifications.
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <strong>9. Contact</strong>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              Pour toute question ou demande concernant les présentes mentions
              légales, vous pouvez nous contacter à l'adresse suivante :
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              StrictAssur
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              78, avenue Henri Martin, 75116 Paris,
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <p>+33 1 77 93 19 92</p>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              <span>contact@strictassur.com</span>
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
            <p
              style={{
                marginRight: "0cm",
                marginLeft: "0cm",
                fontSize: 16,
                fontFamily: '"Times New Roman",serif',
                margin: "0cm",
                marginBottom: ".0001pt",
              }}
            >
              &nbsp;
            </p>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal1;
