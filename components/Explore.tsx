import React from "react";

function Explore() {
  return (
    <div id="explore" className="w-full mb-96 h-auto text-center">
      <main className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-start items-center flex-col">
        <h1 className="py-16 uppercase tracking-widest text-gray-700 sm:max-w-[70%]">
          Vilka universitet kan man studera på?
        </h1>

        <div className="grid grid-cols-3 items-center justify-items-center gap-10 sm:grid-cols-5">
          <a
            href="https://www.kth.se"
            title="Kungliga Tekniska Högskolan"
            target="_blank"
          >
            <img
              className="logo"
              src="/KTH.png"
              alt="Kungliga Tekniska Högskolan"
              sizes="50"
            />
          </a>
          <a
            href="https://www.chalmers.se/"
            title="Chalmers Tekniska Högskola"
            target="_blank"
          >
            <img
              className="logo"
              src="/CTH.png"
              alt="Chalmers Tekniska Högskola"
              sizes="50"
            />
          </a>
          <a
            href="https://www.lth.se"
            title="Lunds Tekniska Högskola"
            target="_blank"
          >
            <img
              className="logo"
              src="/LTH.png"
              alt="Lunds Tekniska Högskola"
              sizes="50"
            />
          </a>
          <a
            href="https://www.liu.se"
            title="Linköpings Universitet"
            target="_blank"
          >
            <img
              className="logo"
              src="/LiTH.png"
              alt="Linköpings Universitet"
              sizes="50"
            />
          </a>
          <a
            href="https://www.uu.se"
            title="Uppsala Universitet"
            target="_blank"
          >
            <img
              className="logo"
              src="/UU.png"
              alt="Uppsala Universitet"
              sizes="50"
            />
          </a>
          <a
            href="https://www.ltu.se"
            title="Luleå Tekniska Universitet"
            target="_blank"
          >
            <img
              className="logo"
              src="/LTU.png"
              alt="Luleå Tekniska Universitet"
              sizes="50"
            />
          </a>
          <a href="https://www.umu.se" title="Umeå Universitet" target="_blank">
            <img
              className="logo"
              src="/UMU.png"
              alt="Umeå Universitet"
              sizes="50"
            />
          </a>
          <a
            href="https://www.miun.se"
            title="Mittuniversitetet"
            target="_blank"
          >
            <img
              className="logo"
              src="/MIUN.png"
              alt="Mittuniversitetet"
              sizes="50"
            />
          </a>
          <a
            href="https://www.mdu.se"
            title="Mälardalens Universitet"
            target="_blank"
          >
            <img
              className="logo"
              src="/MDU.png"
              alt="Mälardalens Universitet"
              sizes="50"
            />
          </a>
          <a
            href="https://www.bth.se"
            title="Blekinge Tekniska Högskskola"
            target="_blank"
          >
            <img
              className="logo"
              src="/BTH.png"
              alt="Blekinge Tekniska Högskola"
              sizes="50"
            />
          </a>
          <a
            href="https://www.lnu.se"
            title="Linnéuniversitetet"
            target="_blank"
          >
            <img
              className="logo"
              src="/Linne.png"
              alt="Linneuniversitetet"
              sizes="50"
            />
          </a>
          <a
            href="https://www.hig.se"
            title="Högskolan i Gävle"
            target="_blank"
          >
            <img
              className="logo"
              src="/HG.png"
              alt="Högskolan i Gävle"
              sizes="50"
            />
          </a>
          <a
            href="https://www.hh.se"
            title="Högskolan i Halmstad"
            target="_blank"
          >
            <img
              className="logo"
              src="/HH.png"
              alt="Högskolan i Halmstad"
              sizes="50"
            />
          </a>
          <a
            href="https://www.ju.se"
            title="Jönköpings Universitet"
            target="_blank"
          >
            <img
              className="logo"
              src="/JU.png"
              alt="Jönköpings Universitet"
              sizes="50"
            />
          </a>
          <a
            href="https://www.kau.se"
            title="Karlstads Universitet"
            target="blank"
          >
            <img
              className="logo"
              src="/KU.png"
              alt="Karlstads Universitet"
              sizes="50"
            />
          </a>
        </div>

        <h1 className="pt-16 uppercase tracking-widest text-gray-700">
          Vilka inriktningar finns?
        </h1>
        <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
          Läroplanerna kan variera på de olika lärosätena. Titta på den
          officiella hemsidan för de olika lärosätena för mer detaljerad
          information.
          <br />
          Endast de vanligaste programmen kommer beskrivas här, för andra
          program sök på universitetets hemsida.
        </p>

        <div className=" flex flex-col w-full items-start gap-2">
          <h2 className="py-8 text-gray-700">Datateknik</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            I denna kategori inkluderas specialiseringar som Mjukvaruutveckling,
            Maskininlärning, Datorsäkerhet och liknande.
            <br />
            Utbildningen ger dig teoretiska kunskaper och praktiska färdigheter
            som gör det möjligt att använda datorer så att de gör nytta. Fokus
            ligger inledningsvis på att ge dig ett gediget kunnande om
            algoritmer och programutveckling. Därefter har du möjlighet att
            fördjupa dig inom det mesta som har med datorers användning att
            göra, som till exempel AI, datasäkerhet, dataanalys och virtuella
            verkligheter. Förutom de tekniska färdigheterna är det centralt i
            utbildningen att utveckla dina empatiska och kommunikativa förmågor.
            Du studerar en blandning av teknikfokuserade kurser i programmering
            och matematik tillsammans med ”mjukare” ämnen som teknisk
            kommunikation, företagsorganisation och ledarskap.
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.https://www.kth.se/utbildning/civilingenjor/datateknik/datateknik-civilingenjor-300-hp-1.4116"
              target={"_blank"}
            >
              KTH
            </a>
          </p>

          <h2 className="py-8 text-gray-700">Industriell Ekonomi</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            Förståelse för hur teknik och ekonomi samverkar är centralt för att
            utveckla samhället i en hållbar riktning. Nya affärsidéer, produkter
            och tekniska lösningar har potential att driva utvecklingen framåt,
            men det behövs också förutsättningar för kreativitet, utveckling och
            långsiktig effektivitet.
            <br />
            Industriell ekonomi ger dig förståelse för samspelet mellan teknik,
            människa och marknad. Du läser kurser inom industriell ekonomi och
            teknik parallellt och får därigenom djup förståelse för
            kommunikation och samarbeten över områdesgränserna.
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.kth.se/utbildning/civilingenjor/industriell-ekonomi?code=CINEK"
              target={"_blank"}
            >
              KTH
            </a>
          </p>

          <h2 className="py-8 text-gray-700">Teknisk Fysik</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            Teknisk fysik ligger till grund för mycket av den spännande
            utveckling som sker på områden som exempelvis IT, AI, kvantteknologi
            och biofysik. Samtidigt möjliggör kunskaper inom teknisk fysik
            enorma framsteg inom beräkningstekniken för tillämpningar inom många
            olika områden. Som teknisk fysiker har du möjlighet att bidra till
            utforskandet av mikro- och makrokosmos, och kan exempelvis styra
            formgivningen av helt nya produkter, material och system på mikro-
            och nanonivå. En viktig aspekt är att se till att ny avancerad
            teknologi utformas och används på ett hållbart sätt, är tillgänglig
            och kommer alla människor till gagn.
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.kth.se/utbildning/civilingenjor/teknisk-fysik?code=CTFYS"
              target={"_blank"}
            >
              KTH
            </a>
          </p>

          <h2 className="py-8 text-gray-700">Maskinteknik</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            På civilingenjörsutbildningen i maskinteknik förenas klassiska
            ingenjörsämnen med bland annat teknisk design, ekonomi och miljö. De
            olika ämnena följer och kompletterar varandra och du får en
            efterfrågad kompetens inom en mängd branscher. Som civilingenjör i
            Maskinteknik kan du bli både specialist och problemlösare och kan
            därmed påverka hur vårt framtida samhälle kommer att se ut.
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.lth.se/utbildning/maskinteknik/"
              target={"_blank"}
            >
              LTH
            </a>
          </p>

          <h2 className="py-8 text-gray-700">Elektroteknik</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            Elektroteknik bygger på elektricitet och magnetism och innefattar så
            gott som all den teknik som använder elektricitet. Utvecklingen inom
            området ligger till grund för mycket av den nya teknik vi ser i
            samhället i dag, som exempelvis mobiltelefoner, robotar och
            solceller. Dagens samhälle är väldigt beroende av elektroteknik som
            finns i allt från våra trafiksystem till våra sjukhus. Också
            framtidens hållbara samhälle bygger på att vi lyckas utveckla
            hållbara lösningar inom elektroteknik. Exempelvis behövs
            elektroteknik för klimatsmarta transporter, förnybar energi, e-hälsa
            och att hantera den ständigt ökande datatrafiken.
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.kth.se/utbildning/civilingenjor/elektroteknik?code=CELTE"
              target={"_blank"}
            >
              KTH
            </a>
          </p>

          <h2 className="py-8 text-gray-700">Kemi</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            Teknisk kemi är en kombination av kemi och teknik och ligger till
            grund för förståelse av kemiska processer i allt från
            människokroppen till atmosfären. För att en fossilfri ekonomi ska
            vara möjlig behöver vi kunna ersätta plast och använda biobaserade
            material i allt från förpackningar till byggnader, bilar och
            flygplan. För att alla människor ska ha möjlighet till rent vatten
            behöver vi effektiva metoder för vattenrening och för att minska
            klimatpåverkan behöver vi nya typer av bränslen baserade på
            förnybara råvaror. I alla dessa fall är kunskaper i teknisk kemi en
            viktig nyckel för att lösa dagens och framtidens utmaningar.
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.kth.se/utbildning/civilingenjor/teknisk-kemi"
              target={"_blank"}
            >
              KTH
            </a>
          </p>

          <h2 className="py-8 text-gray-700">Bioteknik</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            Bioteknik är ett snabbt växande ämnesområde som kombinerar kunskap
            om organismer med teknik för att använda celler på nya sätt. Det
            används till exempel för forskning om sjukdomar, att skapa nya
            material och utveckla grödor som klarar ett förändrat klimat.
            Utvecklingen av avancerad bioteknik har skapat en värld av
            möjligheter där medicin, kemi, fysik och matematik har integrerats
            och blivit ett eget fält. Med kunskaper i bioteknik har du möjlighet
            att jobba för en hållbar värld inom flera viktiga områden,
            exempelvis att begränsa smittspridning vid sjukdomsutbrott och
            pandemier
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.kth.se/utbildning/civilingenjor/bioteknik"
              target={"_blank"}
            >
              KTH
            </a>
          </p>

          <h2 className="py-8 text-gray-700">Teknisk Matematik</h2>
          <p className="pb-4 text-gray-600 m-auto text-left">
            Matematik är en grundsten som vi byggt vetenskap och samhällen på
            ända sedan det antika Babylonien, Egypten och Grekland. Idag ligger
            matematik bakom allt från algoritmerna som styr våra sociala medier
            till analys av vår klimatpåverkan. Kunskap inom matematik och hur
            den kan tillämpas i kombination med programmering kan bidra med nya
            lösningar och driva utvecklingen inom alla möjliga områden.
            Dataalgoritmer som bygger på matematik kan till exempel användas i
            utvecklingen av nya läkemedel och material, i framtidens säkra
            transporter, för resursplanering, analys av stora datamängder, för
            att förstå klimatförändringar eller för att värdera och göra
            riskbedömningar inom försäkring och finans.
            <br />
            Källa{" "}
            <a
              className="text-blue-500"
              href="https://www.kth.se/utbildning/civilingenjor/teknisk-matematik"
              target={"_blank"}
            >
              KTH
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Explore;
