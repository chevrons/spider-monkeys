# Spider monkeys
Arbetsprov

## Om utvecklaren
Webbutvecklare som brinner för tillgänglighet.

## Requirements

### Must-have
* HTML5 solution according to given designs &check;
* Hard coded news data &check;
* Reusable modules/elements using DRY &check;
* Semantic HTML(5) & CSS(3)  &check;
* Responsive:
* * when minimizing the browser window, there's a moment where the width of the browser is under the breakpoint for x-small devices but the image is not large enough to fill out the width, so there's a white pane to the right of the image.
* Crossbrowser support:
* * Chrome: v. 64.0.3282.186 (Official Build) (64-bit) &check;
* * Internet Explorer, v. 11 &check;

### Nice-to-have
* Loading data from json-file  &check;
* Possibility to have 0-N headlines and articles &check;
* Making the site independent of the json structure (new elements or removing some) &cross;
  * No error handling of corrupt image sources

### Rules
* Make smart decisions about the json objects and UI elements
* Use any javascript library
* Experiment by changing the json file
* Redesign the UI if you need
* Use automation if you want to
* Motivate your choices

## Kommentarer
Jag valde att inte använda SASS/LESS, som inte tillför så mycket när man jobbar med mindre projekt (som ett arbetsprov).

Jag ville inte lägga tid på att installera t.ex. React, så jag bestämde mig för att köra vanilla javascript, men hade föredragit att ha HTML i dokumentet för att få bättre översikt över HTML-strukturen samt kunna köra automattester att de komponenter som renderas är tillgängliga. En snabb genomkörning med NVDA fungerade dock bra och Chrome audit gav 100% på tillgänglighet så jag får nöja mig med det.

Jag valde att sätta grundstorleken på text till 1em för att användare med synnedsättningar ska kunna nyttja webbläsarens funktion för att öka fontstorleken.

För att få fyrkantiga tumnaglar behöver man göra skalningar och croppningar av bilderna som hämtas. Detta hade jag inte högst upp på min prioritetslista.

För att öka prestandan behöver bilderna skalas om till mindre bilder som går fort att ladda ner.

## Förändringar mot specifikationen

### Användbarhets- och tillgänglighetsanpassningar
#### Alt-texter till bilderna
För att bilder ska kunna läsas upp av skärmläsare är det viktigt att lägga till beskrivning av bilder i alt-attributet på bilder. Jag adderade därför den informationen i json-filen (imageAlt) för samtliga bilder.

#### Olika språk
För att användare med synnedsättning ska kunna få informationen uppläst korrekt med hjälp av skärmläsare lade jag till språk i json-filen, eftersom alla artiklar inte var på engelska. På det sättet kan skärmläsaren detektera vilket språk artikeln ska läsas på.

#### Versaler
Länkarna i toppmenyn är ändrade från versaler till gemener för att öka läsbarheten.

### Övrigt
#### Rubriker saknades
Artiklarna i json-filen saknade rubriker, så jag googlade på texten för att få fram rubriker, som jag lade till i json-datat.

#### Texten "Om oss"
Jag ändrade texten under "About us" i sidfoten för jag tyckte den som fanns i skissen var lite tråkig.

#### Färgkontraster
Jag mörkade rubrikernas samt sidhuvudet och sidfotens färger för att möta upp tillgänglighetskraven på kontraster (WCAG 2.0 AA).

Jag lät brödtexterna i puffarna vara svarta för bättre läsbarhet. Här var jag inte helt säker på att textfärgen ingick i designen eller bara skulle ses som en "mall".

#### Länkar
Gjorde länkarna understrukna för att även färgblinda ska kunna se att det är klickbar text. Speciellt nu när de har samma färg som rubrikerna.

Försökte även skriva tydligare länkar: https://www.w3.org/TR/2008/REC-WCAG20-20081211/#navigation-mechanisms-refs
