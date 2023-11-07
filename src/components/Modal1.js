import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Modal1() {
  const [show, setShow] = useState(false);
  return (
    <>
      <p className="text-blue-600" onClick={() => setShow(true)}>
        Termes et conditions génerale d'utilisation
      </p>
      <Modal
        size="xl"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Termes et conditions génerale d'utilisation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <p>Offre soumise à conditions</p>
            <p>
              Respect de la vie privée Les informations qui vous concernent sont
              destinées à www.lameilleurebox.com et à ses partenaires, dont
              Bestabo.com, pouvant traiter votre demande de comparatif. Vous
              disposez d'un droit d'accès, de modification, de rectification et
              de suppression des données qui vous concernent (art. 34 de la loi
              "Informatique et Libertés"). Pour l'exercer, contactez-nous via
              notre site.
            </p>
            <p>
              En remplissant et validant ce formulaire j'accepte et reconnais
              avoir pris connaissance des CGU ci-dessous :
            </p>
            <p
              style={{
                textAlign: "center",
                lineHeight: "37.5pt",
                verticalAlign: "baseline",
              }}
            >
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "black",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  Conditions Générales d'Utilisation
                </span>
              </strong>
            </p>
            <ol>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Préambule
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La société{" "}
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  color: "black",
                  background: "white",
                }}
              >
                Centre Européen de Conseil et de Services
              </span>

              <span style={{ fontSize: "11.0pt", color: "black" }}>
                met à disposition un site internet qui a pour objet la
                publication d’informations utiles à la
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  color: "#333333",
                  background: "white",
                }}
              >
                comparaison de produits et services grand public, et, en
                particulier de Services Télécom, comme les accès Internet et la
                téléphonie mobile.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le site lameilleurebox.com&nbsp;met en relation des
                professionnels qui offrent des biens ou services avec des
                consommateurs ou professionnels qui sont à la recherche de biens
                ou services.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={2}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Définitions
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                « CGU » désigne les présentes Conditions Générales
                d’Utilisation.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le « Site » désigne le site lameilleurebox.com
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La « Société » désigne
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  color: "black",
                  background: "white",
                }}
              >
                Centre Européen de Conseil et de Services
              </span>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                , créateur et propriétaire du Site.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Est un « Client » toute personne physique ou morale qui cherche
                à entrer en contact avec un Professionnel pour l’achat d’un bien
                ou d’une prestation de services.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Est un « Professionnel » toute personne physique ou morale,
                publique ou privée, qui agit à des fins entrant dans le cadre de
                son activité commerciale, industrielle, artisanale, libérale ou
                agricole et fait appel à la Société aux fins de la création ou
                de l’utilisation d’un Site de mise en relation avec des Clients
                créé par la Société.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={3}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Objet
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Les présentes CGU ont pour objet de régir les relations entre la
                Société, d’une part, et les Clients qui ont recours au Site,
                d’autre part. En conséquence, le fait d’utiliser le Site emporte
                le consentement entier et sans réserves du Client aux présentes
                CGU. A cet effet, la Société invite le Client à lire
                attentivement les CGU. Le Client déclare et garantit avoir lues
                et comprises les CGU.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={4}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Prestation de la Société
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société met en relation le Client avec le Professionnel. Pour
                être mis en relation avec un Professionnel le Client devra
                remplir l’interface prévue à cet effet et remplir tous les
                champs indiqués avec un astérisque (*).
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société donne au Client la possibilité de télécharger des
                guides. Pour ce faire, le Client devra remplir l’interface
                prévue à cet effet et remplir tous les champs indiqués avec un
                astérisque (*).
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société donne au Client la possibilité de faire une
                simulation pour les biens et services dont il a besoin. Pour ce
                faire, le Client devra remplir l’interface prévue à cet effet et
                remplir tous les champs indiqués avec un astérisque (*).
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Client qui est un consommateur au sens de l’article liminaire
                du code de la consommation, renonce expressément à son droit de
                rétractation et demande l’exécution immédiate du contrat de mise
                en relation avec un Professionnel, de téléchargement d’un guide
                ou encore de simulation au sens de l’article L. 221-25 du code
                de la consommation en remplissant les champs prévus à cet effet
                et en cliquant sur le bouton « envoyer ».
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={5}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Prix
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Les services offerts au Client sont gratuits. Le Client accepte
                de recevoir périodiquement des offres promotionnelles de la
                Société.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={6}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Accessibilité du Site
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société fera tout son possible pour maintenir le Site
                accessible et performant sans retard ou difficultés excessifs.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Toutefois, la Société ne peut pas garantir un fonctionnement
                sans interruptions ni dérangements de l’accès au Site. En
                particulier, la Société peut être amenée à réaliser des travaux
                d’entretien et des mises à jour de son Site pour adapter son
                contenu et/ou intégrer les évolutions des services et des
                fonctionnalités qui y sont proposés, susceptibles d’interrompre
                temporairement son accès, sans que ses interruptions ne soient
                considérées comme un manquement de la Société à ses obligations.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={7}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Edition et hébergement du Site
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Site est édité et exploité par la société
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  color: "black",
                  background: "white",
                }}
              >
                Centre Européen de Conseil et de Services
              </span>
              <span style={{ fontSize: "11.0pt", color: "black" }}>, </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  color: "#4e4e4e",
                  background: "white",
                }}
              >
                domiciliée 78, avenue Henri Martin, 75116 Paris, immatriculée au
                Registre du Commerce et des Sociétés de Paris sous le n°499 388
                684, TVA intracommunautaire fr94 499 388 684, capital 8.000€
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Directeur de la publication est Monsieur Gilles DEVEAU,
                gérant du
              </span>
              <span
                style={{
                  fontSize: "11.0pt",
                  color: "black",
                  background: "white",
                }}
              >
                Centre Européen de Conseil et de Services
              </span>
              <span style={{ fontSize: "11.0pt", color: "black" }}>.</span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Site est hébergé par la société SAS OVH, dont le siège social
                est situé
              </span>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                2 rue Kellermann
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                BP 80157
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                59100 Roubaix
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={8}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Responsabilité
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                En cas de dommage causé au Client ou à la Société, chaque partie
                a l’obligation de minimiser son dommage.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <u>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      color: "black",
                      border: "none windowtext 1.0pt",
                      padding: "0cm",
                    }}
                  >
                    8.1. Responsabilité de la Société
                  </span>
                </u>
              </strong>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société s’engage à exécuter ses obligations de moyens de
                bonne foi. Toutefois, elle ne pourra être tenue pour responsable
                si l’inexécution de ses obligations résulte de la faute d’un
                tiers, de la faute du Client ou du Professionnel ou d’un cas de
                force majeure.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société est l’éditeur du Site. A ce titre, elle veille à ce
                que le contenu du Site respecte les lois et règlements en
                vigueur.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société propose sur le Site des liens vers d’autres sites
                affiliés ou non. La Société n’édite pas et ne contrôle pas ces
                sites qui sont indépendants. Dès lors, la Société ne saurait
                être responsable de leurs contenus, produits, publicités ou tout
                autre élément ou service que ces sites présentent.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <u>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      color: "black",
                      border: "none windowtext 1.0pt",
                      padding: "0cm",
                    }}
                  >
                    8.2. Responsabilité du Client et du Professionnel
                  </span>
                </u>
              </strong>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Client s’engage à ne pas utiliser le Site en violation des
                lois ou règlements en vigueur.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Client est responsable des dommages, directs et indirects,
                causés par lui à des tiers ou à la Société.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Client reconnait que :
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                - La Société n’est tenue que d’une obligation de moyens pour
                l’ensemble des services qu’elle propose ;
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                - La Société n’intervient pas dans les échanges entre le
                Professionnel et le Client et ne perçoit pas de commission sur
                les éventuelles transactions entre ces deux parties ;
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                - La Société décline toute responsabilité pour tout litige
                intervenant entre le Professionnel et le Client, quelle qu’en
                soit la cause.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={9}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Propriété intellectuelle
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Site dans son ensemble et chacun des éléments visuels ou
                sonores qui le composent (à savoir notamment les marques, les
                logos, les dessins et modèles, les illustrations, les
                photographies, les textes, les animations, les vidéogrammes, les
                phonogrammes, les logiciels, codes sources et les bases de
                données) sont la propriété exclusive de la Société ou des
                titulaires des droits de propriété intellectuelle concernés.
                Tous ces éléments sont protégés par le droit d’auteur, le droit
                des marques, le droit des dessins et modèles, le droit des
                brevets ainsi que des droits sui generis.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                En conséquence, toute reproduction, communication,
                téléchargement, modification ou utilisation totale ou partielle
                de l’un de ces éléments appartenant à la Société ou à un tiers,
                pour quelque motif et pour quelque support que ce soit,
                nécessite l’autorisation écrite et préalable de la Société ou de
                leurs titulaires, sauf lorsque la loi l’autorise. Le Client
                déclare et garantit être informé qu’en cas de manquement à l’une
                quelconque de ces obligations, il s’expose à des poursuites
                judiciaires devant les juridictions civiles et/ou pénales.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={10}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Données personnelles et témoins de connexion
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <u>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      color: "black",
                      border: "none windowtext 1.0pt",
                      padding: "0cm",
                    }}
                  >
                    10.1. Cookies
                  </span>
                </u>
              </strong>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société utilise des témoins de connexion (« cookie »),
                définis comme des fichiers informatiques stockés dans
                l’équipement terminal du Client lorsqu’il se rend sur le Site
                via son navigateur internet. Ce type de fichier, qui permet en
                particulier d’enregistrer le parcours du Client, a pour finalité
                de faciliter la communication par voie électronique, d’améliorer
                et personnaliser la qualité de service du Site et d’établir des
                statistiques mesurant l’audience des pages et des différentes
                fonctionnalités du site.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La durée de conservation de ces informations dans l’ordinateur
                du Client est de 6 mois. Le Client peut s’opposer à
                l’enregistrement de témoins de connexion en configurant son
                navigateur internet.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <u>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      color: "black",
                      border: "none windowtext 1.0pt",
                      padding: "0cm",
                    }}
                  >
                    10.2. Type de données collectées
                  </span>
                </u>
              </strong>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société collecte et traite des données à caractère personnel
                que les Clients lui fournissent en utilisant ses services.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La collecte des données à caractère personnel sur le Site
                intervient au moment du téléchargement d’un guide, d’une demande
                de simulation ou d’une demande de mise en relation avec un
                Professionnel.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Pour ces services, le Client devra remplir un formulaire en
                ligne. Les champs indiqués par un astérisque (*), à savoir le
                nom et le prénom ou la raison sociale, l’adresse électronique et
                un numéro de téléphone, devront obligatoirement être remplis. Le
                Client devra aussi obligatoirement remplir le champ : service
                recherché. Le Client peut remplir les champs facultatifs.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <u>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      color: "black",
                      border: "none windowtext 1.0pt",
                      padding: "0cm",
                    }}
                  >
                    10.3. Finalité de la collecte
                  </span>
                </u>
              </strong>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Les données personnelles collectées par la Société sont
                utilisées pour les finalités suivantes :
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "black",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  (i)
                </span>
              </strong>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                &nbsp;offrir aux Clients un site internet fonctionnel, fluide et
                facile d’emploi ;
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "black",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  (ii)
                </span>
              </strong>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                &nbsp;proposer aux Clients des services qui correspondent à
                leurs attentes ;
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "black",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  (iii)
                </span>
              </strong>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                &nbsp;mettre les Clients en relation avec les Professionnels ;
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "black",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  (iv)
                </span>
              </strong>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                &nbsp;exécuter ses obligations légales et contractuelles, et en
                particulier l’émission de facture et la comptabilité.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <u>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      color: "black",
                      border: "none windowtext 1.0pt",
                      padding: "0cm",
                    }}
                  >
                    10.4. Durée de conservation
                  </span>
                </u>
              </strong>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Les données personnelles collectées sont conservées pour la
                durée nécessaire à leur traitement, en fonction de leurs
                finalités, et en principe pour une période de trois 3 ans
                suivant le dernier contact avec le Client, à des fins de gestion
                commerciale et de prospection, sauf exceptions légales. A
                l’expiration de ce délai, ces données seront soit effacées, soit
                rendues anonymes, sauf accord exprès du Client, renouvelable
                pour la même durée. Faute d’accord explicite, la Société
                supprimera les données du Client.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Toutefois, les données personnelles collectées en vue de
                l’exécution d’une prestation de services pourront être
                conservées, sous la forme d’archives, pour une durée de dix (10)
                ans au plus, conformément aux dispositions du Code de commerce
                relatives à la durée de conservation des livres et documents
                créés à l’occasion d’activités commerciales, aux dispositions du
                Code de la consommation relatives à la conservation des contrats
                conclus par voie électronique, ainsi qu’aux délais de
                prescriptions déterminés par le Code civil.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <u>
                  <span
                    style={{
                      fontSize: "11.0pt",
                      color: "black",
                      border: "none windowtext 1.0pt",
                      padding: "0cm",
                    }}
                  >
                    10.5. Droits du Client et du Professionnel
                  </span>
                </u>
              </strong>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Client dispose notamment, à tout moment, du droit d’accès, de
                modification, de rectification et de suppression des données les
                concernant. En conséquence, ils peuvent, sans frais à leur
                charge :
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "black",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  (i)
                </span>
              </strong>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                &nbsp;interroger la Société pour obtenir toute information sur
                le traitement de leurs données personnelles.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "black",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  (ii)
                </span>
              </strong>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                &nbsp;solliciter de la Société de rectifier, compléter, mettre à
                jour, verrouiller ou effacer les données à caractère personnel
                les concernant, qui sont inexactes, incomplètes, équivoques,
                périmées, ou dont la collecte, l’utilisation, la communication
                ou la conservation est interdite.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le Client dispose du droit de s’opposer, à tout moment, au
                traitement des données les concernant, et ce sans motif
                légitime. Pour ce faire ils peuvent écrire à la Société à
                l’adresse suivante reclamation@lameilleurebox.com.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Pour l’exercice par le Client de ses droits, la Société peut
                être amenée à demander au Client qu’il justifie au préalable de
                son identité.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={11}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Modifications et mises à jour
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                La Société se réserve le droit de modifier ses CGU à tout
                moment, notamment en cas de changement de la réglementation. Les
                nouvelles dispositions régiront pour l’avenir l’ensemble des
                relations des Clients avec la Société et seule la nouvelle
                version fera foi. Les nouvelles CGU ne seront opposables aux
                Clients qu’à partir de leur mise en ligne. Toute modification
                sera préalablement portée à la connaissance des Clients. Tout
                usage des services proposés sur le Site après l’entrée en
                vigueur des modifications vaudra acceptation des Conditions
                Générales ainsi modifiées.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={12}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Divers
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Dans l’hypothèse où l’une des dispositions des présentes
                Conditions Générales d’Utilisation serait considérée comme nulle
                en vertu d’une disposition légale et réglementaire ou d’une
                décision de justice revêtue de l’autorité de la chose jugée, les
                autres dispositions resteront bien en vigueur.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Le fait de ne pas se prévaloir de l'une quelconque des
                dispositions des présentes, ne pourra être interprété comme
                valant renonciation à se prévaloir ultérieurement de ladite
                disposition.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <ol start={13}>
              <li style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
                <strong>
                  <u>
                    <span
                      style={{
                        fontSize: "11.0pt",
                        color: "black",
                        border: "none windowtext 1.0pt",
                        padding: "0cm",
                      }}
                    >
                      Droit applicable et compétence juridictionnelle
                    </span>
                  </u>
                </strong>
              </li>
            </ol>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Les présentes Conditions Générales sont régies par le droit
                français.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                En cas de litige, le Client et la Société conviennent de
                rechercher une solution amiable avant de saisir la juridiction
                compétente.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>
                Les tribunaux de Paris seront seuls compétents pour traiter tout
                litige survenu entre les parties et relatif à l’utilisation du
                Site, à leur relation et plus généralement à l’interprétation, à
                la validité ou à l’exécution des présentes Conditions Générales.
              </span>
            </p>
            <p style={{ lineHeight: "16.5pt", verticalAlign: "baseline" }}>
              <span style={{ fontSize: "11.0pt", color: "black" }}>&nbsp;</span>
            </p>
            <p
              style={{
                textAlign: "center",
                lineHeight: "16.5pt",
                verticalAlign: "baseline",
              }}
            >
              <strong>
                <span
                  style={{
                    fontSize: "11.0pt",
                    color: "#737373",
                    border: "none windowtext 1.0pt",
                    padding: "0cm",
                  }}
                >
                  lameilleurebox.com&nbsp;
                </span>
              </strong>
              <span
                style={{
                  fontSize: "11.0pt",
                  color: "#737373",
                  border: "none windowtext 1.0pt",
                  padding: "0cm",
                }}
              >
                – 01/01/2018
              </span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt" }}>&nbsp;</span>
            </p>
            <p>
              <span style={{ fontSize: "11.0pt" }}>&nbsp;</span>
            </p>
            <p>Contact</p>
            <p>
              Vous êtes un professionnel et souhaitez recevoir nos demandes de
              devis ainsi que des informations, entrez en relation avec notre
              service commercial et marketing : Contactez nous directement par
              mail info@lameilleurebox.com
            </p>
          </>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modal1;
