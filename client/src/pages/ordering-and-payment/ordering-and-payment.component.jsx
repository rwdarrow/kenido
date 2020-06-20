import React, { useContext } from "react";

import { LanguageContext } from "../../containers/language";

import WithTextContainer from "../../components/with-text-container/with-text-container.component";

const OrderingAndPaymentPage = () => {
  const languageContext = useContext(LanguageContext);
  const language = languageContext.language.id;

  return language === "de" ? (
    <>
      <h1>LIEFER- UND ZAHLUNGSBEDINGUNGEN</h1>
      <h2>ALLGEMEINE INFORMATIONEN ZUM VERSAND:</h2>
      <p>Versand läuft in Normalfall über DHL.</p>
      <p>
        Die Standardversandkosten gelten für den Kauf von einzelne Artikel,
        falls grössere Menge erwünscht sind, bitte setzen Sie sich mit uns in
        Kontakt.
      </p>
      <p>
        In den angegebenen Produktpreisen ist die gesetzliche Mehrwertsteuer
        enthalten. Es gelten die Preise zum Zeitpunkt der Bestellung.
      </p>
      <p>
        Für Lieferungen innerhalb Deutschlands gelten die angezeigte
        Liferkosten. Für Lieferungen in andere EU-Länder berechnen wir extra
        Kosten.
      </p>
      <h2>SPEZIELLE HINWEISE ZUM VERSAND INS AUSLAND:</h2>
      <p>
        Bei Lieferungen in das Ausland können Zölle, Steuern und Gebühren
        anfallen, die im angezeigten Gesamtpreis nicht enthalten sind.
      </p>
      <h2>VERSANDKOSTEN:</h2>
      <table style={{ width: "50%", marginBottom: "40px" }}>
        <tr>
          <th>Land</th>
          <th>Standardversandkosten</th>
        </tr>
        <tr>
          <td>Deutschland</td>
          <td> 5,90 €</td>
        </tr>
        <tr>
          <td>Alle anderen Länder</td>
          <td> 25,00 €</td>
        </tr>
      </table>
      <h2>LÄNDER, IN DIE VERSENDET WIRD:</h2>
      <ul style={{ columnCount: 3 }}>
        <li>Deutschland</li>
        <li>Albanien</li>
        <li>Andorra</li>
        <li>Belarus</li>
        <li>Belgien</li>
        <li>Bosnien und Herzegowina</li>
        <li>Bulgarien</li>
        <li>Dänemark</li>
        <li>Estland</li>
        <li>Färöer</li>
        <li>Finnland</li>
        <li>Frankreich</li>
        <li>Georgien</li>
        <li>Gibraltar</li>
        <li>Griechenland</li>
        <li>Irland</li>
        <li>Island</li>
        <li>Italien</li>
        <li>Kroatien</li>
        <li>Lettland</li>
        <li>Liechtenstein</li>
        <li>Litauen</li>
        <li>Luxemburg</li>
        <li>Malta</li>
        <li>Mazedonien</li>
        <li>Monaco</li>
        <li>Montenegro</li>
        <li>Montserrat</li>
        <li>Niederlande</li>
        <li>Norwegen</li>
        <li>Österreich</li>
        <li>Polen</li>
        <li>Portugal</li>
        <li>Republik Moldau</li>
        <li>Rumänien</li>
        <li>Russische Föderation</li>
        <li>San Marino</li>
        <li>Schweden</li>
        <li>Schweiz</li>
        <li>Serbien und Montenegro</li>
        <li>Slowakei</li>
        <li>Slowenien</li>
        <li>Spanien</li>
        <li>Svalbard und Jan Mayen</li>
        <li>Tschechische Republik</li>
        <li>Türkei</li>
        <li>Ukraine</li>
        <li>Ungarn</li>
        <li>Vatikanstadt</li>
        <li>Vereinigtes Königreich</li>
        <li>Zypern</li>
      </ul>
      <h2>BEZAHLMETHODEN:</h2>
      <ul>
        <li>
          Kreditkarte. Ihre Kredikartenzahlung wird durch Stripe durchgeführt.
          Sie werden von Stripe auf die prozess schritte hingewiesen.
        </li>
        <li>
          PayPal (Kreditkarte, Lastschrift, Überweisung). Bei Auswahl dieser
          Zahlungsart erfolgt im nächsten Schritt die Weiterleitung zu PayPal.
          Wenn dort die erforderlichen Daten eingetragen worden sind, geht es
          automatisch zurück in diesen Shop, um die Bestellung abzuschließen.
        </li>
        <li>
          Per Rechnung. In den angegebenen Produktpreisen ist die gesetzliche
          Mehrwertsteuer enthalten. Es gelten die Preise zum Zeitpunkt der
          Bestellung.
        </li>
        <li>Gegen Vorkasse</li>
        <li>
          Bei Lieferung. In den angegebenen Produktpreisen ist die gesetzliche
          Mehrwertsteuer enthalten. Es gelten die Preise zum Zeitpunkt der
          Bestellung.
        </li>
        <li>
          Bei Abholung. In den angegebenen Produktpreisen ist die gesetzliche
          Mehrwertsteuer enthalten. Es gelten die Preise zum Zeitpunkt der
          Bestellung.
        </li>
      </ul>
    </>
  ) : (
    <>
      <h1>ORDERING AND PAYMENT</h1>
      <h2>DELIVERY INFORMATION:</h2>
      <p>Most deliveries are fulfilled using DHL.</p>
      <p>
        The standard shipping costs apply to the purchase of individual items.
        If larger quantities are desired, please contact us.
      </p>
      <p>
        Value-added tax is included in the listed product price. The listed
        price applies at the time of order.
      </p>
      <p>
        The listed delivery costs apply for deliveries within Germany. An extra
        fee applies to deliveries to other EU countries.
      </p>
      <h2>SPECIAL NOTICE RELATED TO SHIPPING ABROAD:</h2>
      <p>
        Deliveries abroad may incur duties, taxes, and fees not included in the
        total price shown.
      </p>
      <h2>SHIPPING COSTS:</h2>
      <table style={{ width: "50%", marginBottom: "40px" }}>
        <tr>
          <th>Country</th>
          <th>Standard shipping rate</th>
        </tr>
        <tr>
          <td>Germany</td>
          <td>€5.90</td>
        </tr>
        <tr>
          <td>All other countries</td>
          <td>€25.00</td>
        </tr>
      </table>
      <h2>COUNTRIES WE DELIVER TO:</h2>
      <ul style={{ columnCount: 3 }}>
        <li>Germany</li>
        <li>Albania</li>
        <li>Andorra</li>
        <li>Belarus</li>
        <li>Belgium</li>
        <li>Bosnia and Herzegovina</li>
        <li>Bulgaria</li>
        <li>Denmark</li>
        <li>Estonia</li>
        <li>Faroe Islands</li>
        <li>Finland</li>
        <li>France</li>
        <li>Georgia</li>
        <li>Gibraltar</li>
        <li>Greece</li>
        <li>Ireland</li>
        <li>Iceland</li>
        <li>Italy</li>
        <li>Croatia</li>
        <li>Latvia</li>
        <li>Liechtenstein</li>
        <li>Lithuania</li>
        <li>Luxembourg</li>
        <li>Malta</li>
        <li>Macedonia</li>
        <li>Monaco</li>
        <li>Montenegro</li>
        <li>Montserrat</li>
        <li>Netherlands</li>
        <li>Norway</li>
        <li>Austria</li>
        <li>Poland</li>
        <li>Portugal</li>
        <li>Republic of Moldova</li>
        <li>Romania</li>
        <li>Russia</li>
        <li>San Marino</li>
        <li>Sweden</li>
        <li>Switzerland</li>
        <li>Serbia and Montenegro</li>
        <li>Slovakia</li>
        <li>Slovenia</li>
        <li>Spain</li>
        <li>Svalbard and Jan Mayen</li>
        <li>Czech Republic</li>
        <li>Turkey</li>
        <li>Ukraine</li>
        <li>Hungary</li>
        <li>Vatican City</li>
        <li>United Kingdom</li>
        <li>Cyprus</li>
      </ul>
      <h2>PAYMENT METHODS:</h2>
      <ul>
        <li>
          Credit card. Payment will be processed using Stripe. Stripe will guide
          you through the payment process.
        </li>
        <li>
          PayPal (credit card, debit, wire transfer). Using this mode of payment
          will redirect you to PayPal's site. Payment data will automatically be
          sent back to KENIDO to complete the order.
        </li>
        <li>
          By check. Value-added tax is included in the listed product price. The
          listed price applies at the time of order.
        </li>
        <li>Gegen Vorkasse</li>
        <li>
          Upon delivery. Value-added tax is included in the listed product
          price. The listed price applies at the time of order.
        </li>
        <li>
          Upon pickup. Value-added tax is included in the listed product price.
          The listed price applies at the time of order.
        </li>
      </ul>
    </>
  );
};

export default WithTextContainer(OrderingAndPaymentPage);
