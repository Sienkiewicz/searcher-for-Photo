<h1 align='center'> BUILDING A PHOTOS SEARCH ENGINE (test)</h1>


#### *builded in Next js, wrote on Typescript* <br>

____________________________________________________________________
## Stack
**- React**<br> 
**- React-hooks**<br> 
**- Typescript**<br> 
**- Next js**<br> 
**- SASS**<br> 
**- HTML5**<br> 
____________________________________________________________________

## Opis

Więc co zrobiłem <br>
- Pierwsza strona ma zdjęcie na cały ekran. Zdjęcie wybiera algorytm, odnośnie położenie ekranu - poziom0 czy pionowo, oraz rozdzielczości ekranu.
- Komponent wyszukiwarki jest jeden na wszystkie strony, działa razem ze słowami kluczowymi. Słowa kluczowe wybiera skrypt z listy array-u. Przy naciśnięciu Enter, albo kliknięciu po słowach kluczowych wprowadza się routing
- Druga strona odczytuje routing i ładuje odnośnie zmięnnej wyszukiwanie zdjęć po słowach kluczowych i pokazuje całość array-u zdjęć w galerii. Używałem komponent Image od next - komponent zmniejsza zdjęcie do potrzebnych rozmiarów, dołącza lazy loading oraz regułę rezerwacji miejsca na zdjęcie, więc przy ładowaniu nie mamy przeskakiwań. Do zdjęć dodałem słowa kluczowe, po kliknięciu na które idzie routing i zmiana strony. Po kliknięciu na zdjęcie pojawia się duże zdjęcie z overlay-em. Po kliknięciu na overlay zdjęcie się zamyka. 
- Dodana warstwa na cały app z meta-tagami, tytułem... potrzebnych do SEO
____________________________________________________________________

Dziękuję i czekam na feedback.
