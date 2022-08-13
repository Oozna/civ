import React from "react";

function FrontPage() {
  return (
    <div id="front" className="w-full mb-96 h-auto text-center">
      <main className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center flex-col">
        <h1 className="py-16 uppercase tracking-widest text-gray-700">
          Så du funderar på att studera till Civiligenjör?
        </h1>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto'">
          Då har du hamnat helt rätt. På denna hemsida kan du hitta information
          om tidigare antagningspoäng, hur många som börjar jämfört med hur
          många som avslutar sin utbildning och du kan hitta länkar till olika
          utbildningar på olika skolor. Dessutom kommer jag berätta om
          personliga erfarenheter samt svara på några vanliga frågor
        </p>

        <h2 className="py-8 tracking-wider text-gray-600">
          Vad gör en ingenjör egentligen?
        </h2>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto'">
          I dagens samhälle kan en civilingenjör jobba som nästan vad som helst
          (givetvis inte skyddade arbeten som läkare, sjuksjöterska, jurist osv)
          vilket gör det svårt att peka på just ett specifikt yrke eller
          arbetsuppgifter. Det alla ingenjörer har gemensamt är att utbildningen
          lär dem att lösa problem, oavsett om det är att räkna ut hur mycket
          bränsle som behövs på en raket, en dataserver som har crashat eller
          hur man ska organisera och leda sina medarbetare.
          <br />
          Kort och gott så är en ingenjör en problemlösare specialiserad på det
          området dess inriktning inefattar
        </p>

        <h2 className="py-8 tracking-wider text-gray-600">
          Måste man vara bra på matte?
        </h2>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto'">
          Nej, man måste inte vara bra på matte. Det är olika mycket matematik
          på de olika programmen. Vissa som exempelvis Teknisk Matematik och
          Teknisk Fysik har ganska mycket matte medan andra har mindre. Däremot
          har till min vetskap alla utbildningar en del matte, främst under de
          första åren av utbildningen. Då är det ganska många som tycker att det
          är svårt och om man hade problem med matematiken i gymnasiet kan det
          bli en jobbig period med mycket plugg
        </p>

        <h2 className="py-8 tracking-wider text-gray-600">
          Tjänar man mycket?
        </h2>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto'">
          Enligt{" "}
          <a
            className="text-blue-500"
            href="https://www.saco.se/studieval/yrken-a-o/civilingenjor/#:~:text=F%C3%B6r%20nyexaminerade%20civilingenj%C3%B6rer,avser%20privat%20sektor."
            target={"_blank"}
          >
            SACO
          </a>{" "}
          tjänade en nyexaminerad civilingenjör mellan 31 000-39 000 kr i
          månaden 2020. Detta steg till cirka 47 000 kr efter 10 års erfarenhet
        </p>
        <h2 className="py-8 tracking-wider text-gray-600">
          Är det lätt att få jobb?
        </h2>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto'">
          Precis som i alla andra yrken så är det tuff konkurrens om de mest
          populära jobben och det kan vara svårt att få just de jobben. Däremot
          överlag är det bra balans på arbetsmarknaden enligt{" "}
          <a
            className="text-blue-500"
            href="https://www.ingenjoren.se/2021/10/22/fortsatt-bra-arbetsmarknad-for-ingenjorer/"
            target={"_blank"}
          >
            Sveriges Ingenjörer
          </a>
          . Däremot framser de att vissa inrikningar som elektroteknik,
          datateknik och teknisk fysik kommer vara mer efterfrågade i framtiden
        </p>
        <h2 className="py-8 tracking-wider text-gray-600">
          Hur vet jag om jag kommer in på det program jag sökt?
        </h2>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto'">
          Det är omöjligt att med säkerhet veta om man kommer in på ett program
          innan man får sitt svarsbrev. Däremot kan man jämföra sina
          betyg/högskoleprov med tidigare år för att få en uppfattning på hur
          det på ett ungefär kommer att se ut. Det kan du göra på denna hemsida
          men om du vill vara säker på att informationen är 100% korrekt så ska
          du söka efter programmet på{" "}
          <a
            className="text-blue-400"
            href="https://www.uhr.se/statistik"
            target={"_blank"}
          >
            UHR
          </a>
        </p>
        <h2 className="py-8 tracking-wider text-gray-600">Är det svårt?</h2>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto'">
          Givetvis är detta en väldigt subjektiv fråga men nästan alla kan hålla
          med om att hela utbildningen inte kommer gå som en dans på rosor.
          Kursupplägget är utformat för att man ska studera 40 timmar i veckan,
          alltså som en vanlig arbetsvecka. Vissa behöver betydligt mindre och
          vissa betydlig mer. Vissa perioder har man kurser man har fallenhet
          för och ibland förstår man ingenting
        </p>
      </main>
    </div>
  );
}

export default FrontPage;
