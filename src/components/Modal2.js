import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Modal1() {
  const [show, setShow] = useState(false);
  return (
    <>
      <p className="text-blue-600 cursor-pointer	" onClick={() => setShow(true)}>
        Conditions Générales d'Utilisation
      </p>
      <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Conditions Générales d'Utilisation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="row">
              <div
                className="col-md-12"
                style={{ padding: "40px 34px 0px 45px" }}
              >
                <h3>1. Préambule</h3>
                <p>
                  La société StrictAssur met à disposition un site internet
                  strictassur.com qui&nbsp;met en relation des professionnels
                  qui offrent des biens ou services avec des consommateurs ou
                  professionnels qui sont à la recherche de produits
                  d’assurance.
                </p>
                <h3>2. Définitions</h3>
                <p>
                  « CGU » désigne les présentes Conditions Générales
                  d’Utilisation.
                </p>
                <p>Le « Site » désigne le site strcitassur.com</p>
                <p>
                  La « Société » désigne Strictassur, créateur et propriétaire
                  du Site.
                </p>
                <p>
                  Est un « Client » toute personne physique ou morale qui
                  cherche à entrer en contact avec un Professionnel pour l’achat
                  d’un bien ou d’une prestation de services.
                </p>
                <p>
                  Est un « Professionnel » toute personne physique ou morale,
                  publique ou privée, qui agit à des fins entrant dans le cadre
                  de son activité commerciale, industrielle, artisanale,
                  libérale ou agricole et fait appel à la Société aux fins de la
                  création ou de l’utilisation d’un Site de mise en relation
                  avec des Clients créé par la Société.
                </p>
                <h3>3. Objet</h3>
                <p>
                  Les présentes CGU ont pour objet de régir les relations entre
                  la Société, d’une part, et les Clients qui ont recours au
                  Site, d’autre part. En conséquence, le fait d’utiliser le Site
                  emporte le consentement entier et sans réserves du Client aux
                  présentes CGU. A cet effet, la Société invite le Client à lire
                  attentivement les CGU. Le Client déclare et garantit avoir
                  lues et comprises les CGU.
                </p>
                <h3>4. Prestation de la Société</h3>
                <p>
                  La Société met en relation le Client avec le Professionnel.
                  Pour être mis en relation avec un Professionnel le Client
                  devra remplir l’interface prévue à cet effet et remplir tous
                  les champs indiqués avec un astérisque (*).
                </p>
                <p>
                  La Société donne au Client la possibilité de télécharger des
                  guides. Pour ce faire, le Client devra remplir l’interface
                  prévue à cet effet et remplir tous les champs indiqués avec un
                  astérisque (*).
                </p>
                <p>
                  La Société donne au Client la possibilité de faire une
                  simulation pour les biens et services dont il a besoin. Pour
                  ce faire, le Client devra remplir l’interface prévue à cet
                  effet et remplir tous les champs indiqués avec un astérisque
                  (*).
                </p>
                <p>
                  Le Client qui est un consommateur au sens de l’article
                  liminaire du code de la consommation, renonce expressément à
                  son droit de rétractation et demande l’exécution immédiate du
                  contrat de mise en relation avec un Professionnel, de
                  téléchargement d’un guide ou encore de simulation au sens de
                  l’article L. 221-25 du code de la consommation en remplissant
                  les champs prévus à cet effet et en cliquant sur le bouton «
                  envoyer ».
                </p>
                <h3>5. Prix</h3>
                <p>
                  Les services offerts au Client sont gratuits. Le Client
                  accepte de recevoir périodiquement des offres promotionnelles
                  de la Société.
                </p>
                <h3>6. Accessibilité du Site</h3>
                <p>
                  La Société fera tout son possible pour maintenir le Site
                  accessible et performant sans retard ou difficultés excessifs.
                </p>
                <p>
                  Toutefois, la Société ne peut pas garantir un fonctionnement
                  sans interruptions ni dérangements de l’accès au Site. En
                  particulier, la Société peut être amenée à réaliser des
                  travaux d’entretien et des mises à jour de son Site pour
                  adapter son contenu et/ou intégrer les évolutions des services
                  et des fonctionnalités qui y sont proposés, susceptibles
                  d’interrompre temporairement son accès, sans que ses
                  interruptions ne soient considérées comme un manquement de la
                  Société à ses obligations.
                </p>
                <h3>7. Responsabilité</h3>
                <p>
                  En cas de dommage causé au Client ou à la Société, chaque
                  partie a l’obligation de minimiser son dommage.
                </p>
                <h3>7.1. Responsabilité de la Société</h3>
                <p>
                  La Société s’engage à exécuter ses obligations de moyens de
                  bonne foi. Toutefois, elle ne pourra être tenue pour
                  responsable si l’inexécution de ses obligations résulte de la
                  faute d’un tiers, de la faute du Client ou du Professionnel ou
                  d’un cas de force majeure.
                </p>
                <p>
                  La Société est l’éditeur du Site. A ce titre, elle veille à ce
                  que le contenu du Site respecte les lois et règlements en
                  vigueur.
                </p>
                <p>
                  La Société propose sur le Site des liens vers d’autres sites
                  affiliés ou non. La Société n’édite pas et ne contrôle pas ces
                  sites qui sont indépendants. Dès lors, la Société ne saurait
                  être responsable de leurs contenus, produits, publicités ou
                  tout autre élément ou service que ces sites présentent.
                </p>
                <h3>7.2. Responsabilité du Client et du Professionnel</h3>
                <p>
                  Le Client s’engage à ne pas utiliser le Site en violation des
                  lois ou règlements en vigueur.
                </p>
                <p>
                  Le Client est responsable des dommages, directs et indirects,
                  causés par lui à des tiers ou à la Société.
                </p>
                <p>Le Client reconnait que :</p>
                <p>
                  - La Société n’est tenue que d’une obligation de moyens pour
                  l’ensemble des services qu’elle propose ;
                </p>
                <p>
                  - La Société n’intervient pas dans les échanges entre le
                  Professionnel et le Client et ne perçoit pas de commission sur
                  les éventuelles transactions entre ces deux parties ;
                </p>
                <p>
                  - La Société décline toute responsabilité pour tout litige
                  intervenant entre le Professionnel et le Client, quelle qu’en
                  soit la cause./
                </p>
                <p></p>
                <h3>8. Propriété intellectuelle</h3>
                <p>
                  Le Site dans son ensemble et chacun des éléments visuels ou
                  sonores qui le composent (à savoir notamment les marques, les
                  logos, les dessins et modèles, les illustrations, les
                  photographies, les textes, les animations, les vidéogrammes,
                  les phonogrammes, les logiciels, codes sources et les bases de
                  données) sont la propriété exclusive de la Société ou des
                  titulaires des droits de propriété intellectuelle concernés.
                  Tous ces éléments sont protégés par le droit d’auteur, le
                  droit des marques, le droit des dessins et modèles, le droit
                  des brevets ainsi que des droits sui generis.
                </p>
                <p>
                  En conséquence, toute reproduction, communication,
                  téléchargement, modification ou utilisation totale ou
                  partielle de l’un de ces éléments appartenant à la Société ou
                  à un tiers, pour quelque motif et pour quelque support que ce
                  soit, nécessite l’autorisation écrite et préalable de la
                  Société ou de leurs titulaires, sauf lorsque la loi
                  l’autorise. Le Client déclare et garantit être informé qu’en
                  cas de manquement à l’une quelconque de ces obligations, il
                  s’expose à des poursuites judiciaires devant les juridictions
                  civiles et/ou pénales.
                </p>
                <h3>9. Données personnelles et témoins de connexion</h3>
                <h4>9.1. Type de données collectées</h4>
                <p>
                  La Société collecte et traite des données à caractère
                  personnel que les Clients lui fournissent en utilisant ses
                  services.
                </p>
                <p>
                  La collecte des données à caractère personnel sur le Site
                  intervient au moment du téléchargement d’un guide, d’une
                  demande de simulation ou d’une demande de mise en relation
                  avec un Professionnel.
                </p>
                <p>
                  Pour ces services, le Client devra remplir un formulaire en
                  ligne. Les champs indiqués par un astérisque (*), à savoir le
                  nom et le prénom ou la raison sociale, l’adresse électronique
                  et un numéro de téléphone, devront obligatoirement être
                  remplis. Le Client devra aussi obligatoirement remplir le
                  champ : service recherché. Le Client peut remplir les champs
                  facultatifs.
                </p>
                <h4>9.2. Finalité de la collecte</h4>
                Les données personnelles collectées par la Société sont
                utilisées pour les finalités suivantes : (i)&nbsp;offrir aux
                Clients un site internet fonctionnel, fluide et facile d’emploi
                ; (ii)&nbsp;proposer aux Clients des services qui correspondent
                à leurs attentes ; (iii)&nbsp;mettre les Clients en relation
                avec les Professionnels ; (iv)&nbsp;exécuter ses obligations
                légales et contractuelles, et en particulier l’émission de
                facture et la comptabilité.
                <h4>9.3. Durée de conservation</h4>
                Les données personnelles collectées sont conservées pour la
                durée nécessaire à leur traitement, en fonction de leurs
                finalités, et en principe pour une période de trois 3 ans
                suivant le dernier contact avec le Client, à des fins de gestion
                commerciale et de prospection, sauf exceptions légales. A
                l’expiration de ce délai, ces données seront soit effacées, soit
                rendues anonymes, sauf accord exprès du Client, renouvelable
                pour la même durée. Faute d’accord explicite, la Société
                supprimera les données du Client. Toutefois, les données
                personnelles collectées en vue de l’exécution d’une prestation
                de services pourront être conservées, sous la forme d’archives,
                pour une durée de dix (10) ans au plus, conformément aux
                dispositions du Code de commerce relatives à la durée de
                conservation des livres et documents créés à l’occasion
                d’activités commerciales, aux dispositions du Code de la
                consommation relatives à la conservation des contrats conclus
                par voie électronique, ainsi qu’aux délais de prescriptions
                déterminés par le Code civil.
                <h4>9.4. Droits du Client et du Professionnel</h4>
                <p>
                  Le Client dispose notamment, à tout moment, du droit d’accès,
                  de modification, de rectification et de suppression des
                  données les concernant. En conséquence, ils peuvent, sans
                  frais à leur charge :
                </p>
                <p>
                  (i)&nbsp;interroger la Société pour obtenir toute information
                  sur le traitement de leurs données personnelles.
                </p>
                <p>
                  (ii)&nbsp;solliciter de la Société de rectifier, compléter,
                  mettre à jour, verrouiller ou effacer les données à caractère
                  personnel les concernant, qui sont inexactes, incomplètes,
                  équivoques, périmées, ou dont la collecte, l’utilisation, la
                  communication ou la conservation est interdite.
                </p>
                <p>
                  Le Client dispose du droit de s’opposer, à tout moment, au
                  traitement des données les concernant, et ce sans motif
                  légitime.
                </p>
                <p>
                  Pour ce faire ils peuvent écrire à la Société à l’adresse
                  suivante servicereclamation@strictassur.com.
                </p>
                <p>
                  Pour l’exercice par le Client de ses droits, la Société peut
                  être amenée à demander au Client qu’il justifie au préalable
                  de son identité.
                </p>
                <h3>10. Modifications et mises à jour</h3>
                <p />
                La Société se réserve le droit de modifier ses CGU à tout
                moment, notamment en cas de changement de la réglementation. Les
                nouvelles dispositions régiront pour l’avenir l’ensemble des
                relations des Clients avec la Société et seule la nouvelle
                version fera foi.
                <p />
                <p>
                  Les nouvelles CGU ne seront opposables aux Clients qu’à partir
                  de leur mise en ligne. Toute modification sera préalablement
                  portée à la connaissance des Clients.
                </p>
                <p>
                  Tout usage des services proposés sur le Site après l’entrée en
                  vigueur des modifications vaudra acceptation des Conditions
                  Générales ainsi modifiées.
                </p>
                <h3>11. Divers</h3>
                <p>
                  Dans l’hypothèse où l’une des dispositions des présentes
                  Conditions Générales d’Utilisation serait considérée comme
                  nulle en vertu d’une disposition légale et réglementaire ou
                  d’une décision de justice revêtue de l’autorité de la chose
                  jugée, les autres dispositions resteront bien en vigueur.
                </p>
                <p>
                  Le fait de ne pas se prévaloir de l'une quelconque des
                  dispositions des présentes, ne pourra être interprété comme
                  valant renonciation à se prévaloir ultérieurement de ladite
                  disposition.
                </p>
                <h3>12. Droit applicable et compétence juridictionnelle</h3>
                <p>
                  Les présentes Conditions Générales sont régies par le droit
                  français.
                </p>
                <p>
                  En cas de litige, le Client et la Société conviennent de
                  rechercher une solution amiable avant de saisir la juridiction
                  compétente.
                </p>
                <p>
                  Les tribunaux de Paris seront seuls compétents pour traiter
                  tout litige survenu entre les parties et relatif à
                  l’utilisation du Site, à leur relation et plus généralement à
                  l’interprétation, à la validité ou à l’exécution des présentes
                  Conditions Générales.
                </p>
                <center>
                  <h1>
                    <b>Strictassur.com&nbsp;– 01/01/2018</b>
                  </h1>
                </center>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal1;
