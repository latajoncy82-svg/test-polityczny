# ⚖️ Polski Test Polityczny (Kompas Poglądów)

Nowoczesna, w pełni responsywna i interaktywna aplikacja webowa do badania poglądów politycznych, dostosowana do polskich realiów polityczno-społecznych.

---

## 🎯 Główne funkcje

- **Model Dwuosiowy (2D Political Compass):**
  - **Oś Gospodarcza (X):** Lewica socjalna / państwo opiekuńcze ⟷ Prawica wolnorynkowa / kapitalizm
  - **Oś Światopoglądowa (Y):** Konserwatyzm tradycyjny / porządek ⟷ Progresywizm / swobody jednostki
- **20 dopracowanych pytań** poruszających aktualne polskie tematy (służba zdrowia, podatki, programy socjalne, związki partnerskie, edukacja, rola Kościoła, UE, praworządność).
- **Interaktywny Wykres Canvas HTML5:**
  - Dynamicznie generowany kompas polityczny z 4 ćwiartkami: *Socjalliberalizm*, *Libertarianizm*, *Lewica tradycyjna/solidaryzm*, *Konserwatywny liberalizm*.
  - Animowane wyznaczanie pozycji użytkownika z dokładnymi koordynatami `(X, Y)`.
- **Wyczerpujący profil ideowy:**
  - Nazwa nurtu politycznego i szczegółowy opis przekonań.
  - Orientacyjne dopasowanie do partii i nurtów obecnych na polskiej scenie politycznej.
  - Procentowe wskaźniki na obu osiach.
- **Dodatkowe narzędzia:**
  - 📥 **Pobieranie wykresu jako plik PNG** (jednym kliknięciem).
  - 📋 **Kopiowanie wyniku** do schowka z gotowym podsumowaniem.
  - 📝 **Podgląd udzielonych odpowiedzi** na wszystkie pytania.
  - 🌓 **Tryb ciemny (Dark Mode)** oraz **jasny (Light Mode)** z automatycznym zapisem preferencji.
  - 📱 W pełni responsywny design (działa płynnie na telefonach, tabletach i komputerach).

---

## 🚀 Jak uruchomić?

Aplikacja jest w pełni niezależna i nie wymaga instalacji żadnych serwerów ani bibliotek Node.js.

1. Wystarczy otworzyć plik **`index.html`** w dowolnej przeglądarce internetowej (np. Chrome, Edge, Firefox, Brave):
   - Kliknij dwukrotnie na `index.html`, lub
   - Przeciągnij plik do okna przeglądarki.

---

## 📁 Struktura plików

- **`index.html`** – Główny interfejs aplikacji (ekran powitalny, pytania, ekran wyników).
- **`style.css`** – Nowoczesne style CSS (paleta kolorów, glassmorphism, responsywność).
- **`questions.js`** – Baza 20 pytań podzielonych na kategorie gospodarcze i światopoglądowe.
- **`script.js`** – Logika aplikacji, silnik kalkulacji wyników, rysowanie kompasu w Canvas, obsługa motywów.
