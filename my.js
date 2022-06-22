//                         ==============Примітивні типи==============

//         Number - цілі числа і числа з плаваючою комою(крапкою).

// const age = 20;
// const points = 15.8;


//         String - рядки, послідовність з нуля або більше символів.
//         Рядок починається і закінчується одинарними ', або подвійними лапками ".

// const username = "Mango";
// const description = "JavaSript для початківців";


//         Boolean - логічний тип даних, прапорці стану. Всього два значення: true і false. Наприклад,
//         на запитання чи увімкнено світло в кімнаті, можна відповісти так(true) або ні(false).

// true — так, вірно, істина, 1
// false — ні, невірно, неправда, 0
// Зверніть увагу на імена змінних, що містять буль. Вони ставлять запитання, і відповідь на нього - так або ні.

// const isLoggedIn = true;
// const canMerge = false;
// const hasChildren = true;
// const isModalOpen = false;


//         null - особливе значення, яке по суті означає ніщо. Використовується в тих ситуаціях,
//         коли необхідно явно вказати порожнечу.Наприклад, якщо користувач нічого не вибрав, то можна сказати що значення null.

// let selectedProduct = null;


//         undefined - ще одне спеціальне значення. За замовчуванням, коли змінна оголошується,
//         але не ініціалізується, її значення не визначено, їй присвоюється undefined.

// let username;
// console.log(username); // undefined





//                         ==============Оператор typeof==============
//         Використовується для отримання типу значення змінної. Повертає на місце свого виклику тип значення змінної,
//         вказаного після нього - рядок, в якому вказано тип.

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"





//                         ==============Отримання даних==============
//         Це також методи з інтерфейсу window. Результатом свого виконання вони повертають те, що було введено користувачем,
//         тому результат їх роботи можна записати у змінну для подальшого використання.


// confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel. Натискаючи на Ok,
// результатом будет true, натискаючи на Cancel - повертається false.

// // Просимо клієнта підтвердити бронювання готелю
// // і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);


// prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel. Натискаючи на Ok,
// результатом буде те, що ввів користувач, у випадку Cancel - повертається null.

// // Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// // і зберігаємо результат виклику prompt у змінну.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// Важлива особливість prompt полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок.
// Тобто, якщо користувач ввів 5, то повернеться не число 5, а рядок "5".

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"





//                         ==============Математичні оператори==============
//         Призначення, функціонал і пріоритет (порядок) операцій нічим не відрізняються від шкільного курсу алгебри.
//         Оператори повертають значення у вигляді результату виразу.

// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// // Остача від ділення
// console.log(x % y); // 0

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value += 10;
// console.log(value); // 15





//                         ==============Оператори порівняння==============
//         Використовуються для порівняння двох значень.
//         Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

// a > b і a < b - більше/менше
// a >= b і a <= b - більше/менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - строга рівність
// a !== b - строга нерівність
// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false





//                         ==============Оператори рівності==============
//         «Нестрогі» оператори рівності == і != виконують перетворення типів порівнюваних значень у число,
//         що може призвести до помилок, особливо у початківців.

// // ❌ Погано, виконується приведення типів
// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log(1 == true); // true
// console.log(1 != true); // false


//         Тому для перевірки рівності або нерівності двох значень, використовуються
//         тільки оператори === (строга рівність) і !== (строга нерівність),
//         які не виконують приведення типів операндів.

// // ✅ Добре, приведення типів не виконується
// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true





//                        ==============Метод Number.parseInt()==============
// Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN


//                         ==============Метод Number.parseFloat()==============
// Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN





//                         ==============Math==============
//         Math.floor(num) - повертає найбільше ціле число,
//         менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1
// console.log(Math.floor(2.3)); // 2
// console.log(Math.floor(5.8)); // 5


//         Math.ceil(num) - повертає найменше ціле число,
//         більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2
// console.log(Math.ceil(5.4)); // 6
// console.log(Math.ceil(7.8)); // 8


//         Math.round(num) - повертає значення числа,
//         округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2
// console.log(Math.round(3.2)); // 3
// console.log(Math.round(5.7)); // 6


//         Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50
// console.log(Math.max(20, 10, 50, 40, 70)); // 70
// console.log(Math.max(20, 10, 50, 40, 70, 100)); // 100


//         Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10
// console.log(Math.min(5, 20, 10, 50, 40, 70)); // 5
// console.log(Math.min(20, 10, 50, 40, 3)); // 3


//         Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16
// console.log(Math.pow(4, 7)); // 16384
// console.log(Math.pow(8, 9)); // 134217728


//         Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10





//                         ==============Конкатенація-сшивання рядків==============
//         Послідовність операцій має значення, перетворення типів відбувається тільки в момент операції додавання з рядком,
//         до цього моменту діють звичні правила математики.

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// Подивимось на різний порядок операндів.

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

//         В останньому прикладі відбулася математична операція додавання для перших двох чисел 1 і 2,
//         після чого число 3 було перетворено у рядок "3" і зшито з рядком "4".





//                         ============== Шаблонні рядки  ==============
//         Шаблонні рядки - це альтернатива конкатенації зі зручнішим синтаксисом. Шаблонний рядок береться у зворотні (косі) лапки,
//         замість подвійних або одинарних, і може містити заповнювачі місця, які позначаються знаком долара і фігурними дужками - ${ вираз }.

//         // Використовуючи змінні, необхідно скласти рядок з підставленими значеннями
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"

//         Складати рядки з підставленими значеннями, використовуючи конкатенацію, - дуже незручно.
//         На допомогу приходять шаблонні рядки та інтерполяція.

// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"





//                         ============== Властивість length  ==============
//         Для того, щоб дізнатися довжину рядка, тобто кількість його символів, у всіх рядків є вбудована властивість length,
//         начення якої можна отримати, звернувшись до нього через крапку після імені змінної або рядкового літерала.

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47





                        //============== Методи toLowerCase() і toUpperCase()  ==============
        // Повертають новий рядок у відповідному регістрі, не змінюючи оригінальний рядок.

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

        // Бувають ситуації, коли всі символи в рядку необхідно перетворити в один регістр, верхній або нижній. Наприклад, для пошуку за ключовим словом, коли користувач вводить рядок 'saMsUng', а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'.

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false

        // Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка, тобто перетворити всі його символи у верхній або нижній регістр. Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true





                        //============== Метод indexOf()  ==============
        // Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1

// const message = "Welcome to go-it student!";
// console.log(message.indexOf("go")); // 11
// console.log(message.indexOf("student")); // 17





                        //============== Метод includes()  ==============
        // Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку.
        // Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false





                        //============== Метод endsWith()  ==============
        // Дозволяє визначити, чи завершується рядок символами(підрядком),
        // зазначеними в дужках, повертаючи true або false.

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false





                        //============== Методи replace() і replaceAll()  ==============
        // Повертає новий рядок, в якому перше(replace) 
        // або усі збіги(replaceAll) підрядка замінені на вказане значення.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"





                        //============== Метод slice()  ==============
        // Метод рядків slice(startIndex, endIndex) використовується для створення копії частини або всього рядка. 
        // Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// console.log(productName.slice(2, 9)); // "pair dr"
// console.log(productName.slice(4, productName.length)); // "ir droid"





                        //============== Логічне «І» && ==============
        // Оператор && приводить всі операнди до буля і повертає значення одного з них. 
        // Лівий операнд - якщо його можна привести до false, і правий - в інших випадках.

// вираз && вираз

        // У наступному прикладі обидві умови повернуть true,
        // тому результатом всього виразу буде true - повернеться значення правого операнда.

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

        // Якщо хоча б один із операндів буде приведений до false,
        // результатом виразу буде його значення.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

        // Тобто, логічне «І» зупиняється на хибному і повертає те,
        // на чому зупинилось, або останній операнд.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

        // ЦІКАВО
        // Виконуючи логічне «І», правий операнд може не обчислюватися у випадку,
        // якщо лівий був приведений до false.





                        //============== Логічне «АБО» || ==============
        // Оператор || приводить всі операнди до буля і повертає значення одного з них. 
        // Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

// вираз || вираз

        // У наступному прикладі умова зліва поверне true, тому результатом всього 
        // виразу буде true - повернеться значення першого операнда, яке було приведене до true.

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

        // В цьому випадку результатом теж буде true, оскільки хоча б один із операндів,
        // в цьому випадку правий, був приведений до true.

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

        // А тут жодна з умов не виконується,
        // тому отримуємо false - значення останнього операнда.

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

        // Тобто, логічне «АБО» зупиняється на правді і повертає те,
        // на чому зупинилося або останній операнд.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

        // ЦІКАВО
        // Виконуючи логічне «АБО», правий операнд може не обчислюватися у випадку,
        // якщо лівий був приведений до true.





                                //============== Логічне «НЕ» ! ==============
        // Всі оператори, які ми розглядали до цього, були бінарними - містять два операнди: лівий і правий.
        // Логічне «НЕ» - це унарний оператор, який виконує операцію над одним операндом з правої сторони.

// !вираз

        // Оператор! приводить операнд до буля, якщо необхідно,
        // а потім робить інверсію - змінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false





                                //============== Інструкція if ==============
// if (умова) {
//   // тіло if
// }

        // Вхідні дані, які приводяться до буля, називаються умовою. 
        // Умова ставиться після оператора if в круглих дужках.
        // Якщо умова приводиться до true, то виконується код у фігурних дужках тіла if.

// let cost = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 100

        // Якщо умова приводиться до false, код у фігурних дужках буде пропущений.

// let cost = 0;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// }

// console.log(cost); // 0





                                //============== Інструкція if...else ==============
// Синтаксис if...else
// if (умова) {
//   // тіло if
// } else {
//   // тіло else
// }

        // Розширює синтаксис if таким чином, що якщо умова приводиться до false,
        // виконається код у фігурних дужках після оператора else.

// let cost;
// const subscription = "free";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

        // Якщо умова приводиться до true, тіло блока else ігнорується.

// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100





                                //============== Інструкція else...if ==============
// Синтаксис else...if
        // Конструкція if...else може перевірити 
        // і зреагувати на виконання або невиконання лише однієї умови.

        // Блок else...if дозволяє додати після else ще один оператор if з умовою. 
        // В кінці ланцюжка може бути класичний блок else, 
        // який виконається лише у тому випадку, якщо жодна умова не приведеться до true.

// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log("Invalid subscription type");
// }

// console.log(cost); // 500

        // При першому true перевірки припиняться і виконається лише один сценарій,
        // який відповідає цьому true.Тому, такий запис варто читати як: 
        // шукаю перший збіг умови, ігнорую все інше.





                                //============== Тернарний оператор ==============
        // Тернарний оператор використовується у якості синтаксично коротшої заміни інструкції if...else, 
        // коли одній і тій самій змінній необхідно присвоїти різні значення за умовою.

{/* <умова> ? <вираз_якщо_умова_правдива> : <вираз_якщо_умова_хибна> */}

        // Працює за наступною схемою:
        // -Обчислюється умова.
        // -Якщо умова правдива, тобто приводиться до true, обчислюється вираз після ?.
        // -Якщо умова хибна, тобто приводиться до false, обчислюється вираз після :.
        // -Значення обчисленого виразу повертається у якості результату роботи тернарного оператора.
// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type); // "adult"

        // Виконаємо рефакторинг, замінивши if...else на тернарний оператор.

// const age = 20;
// const type = age >= 18 ? "adult" : "child";
// console.log(type); // "adult"

        // Запишемо операцію пошуку більшого числа.

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber); // 10

        // Код працює правильно, отримуємо більше число з двох, але це рішення здається занадто громіздким,
        // враховуючи, наскільки проста проблема.Використовуємо тернарний оператор.

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10





                                //============== Інструкція switch ==============
        // У деяких випадках незручність читання складних розгалужень if...else можна уникнути,
        // використовуючи «плоскіший» синтаксис інструкції розгалуження switch.
        // Межі застосування switch обмежені задачами з одним загальним
        // запитанням(що порівнювати) і рядом варіантів відповідей(з чим порівнювати).
        // Його синтаксис складається із блоку switch (значення) -
        // що потрібно порівняти і набору окремих випадків case значення -
        // з чим потрібно порівняти.Для порівняння використовується оператор строгої рівності ===.
        // Тобто, не можна порівняти більше або менше, лише рівність.

// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

        // Значення в блоці switch (значення) - рядок або число, яке порівнюється щодо строгої рівності 
        // з усіма значеннями в блоках case значення по черзі, зверху вниз.
        // Оператор break в кінці кожного блоку case необхідний, щоб перервати подальші перевірки 
        // і одразу перейти до коду за switch у тому випадку, коли перевірка рівності повернула true.
        // Якщо жодного збігу значень не відбулося, необхідно виконати код за замовчуванням, як 
        // і в блоці else для інструкції if...else. Для цього, після усіх блоків case додається блок default. 
        // Оператор break після блоку default не потрібен, тому що це вже остання операція,
        // яка буде виконана в switch і управління буде передано коду після нього.

// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500

        // ЦІКАВО
        // Якщо оператор break відсутній, то після того як виконається будь - яка умова case, 
        // усі наступні за ним блоки коду будуть виконуватися один за одним,
        // що може призвести до небажаних наслідків у випадку неправильного застосування.





                                //============== Оператор continue ==============
        // Перериває не увесь цикл, а тільки виконання поточної ітерації.Його використовують,
        // якщо зрозуміло, що на поточній ітерації циклу більше немає що робити або взагалі не потрібно нічого робити,
        // і час переходити до наступної ітерації.
        // Використовуємо цикл для введення тільки непарних чисел.Для парних i спрацьовує continue, 
        // виконання тіла припиняється і управління передається до наступної ітерації.

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//         if (i % 2 === 0) {
//                 continue;
//         }

//         console.log("Непарне i: ", i); // 1, 3, 5, 7, 9
// }





                                //============== Цикл for...of ==============
        // Конструкція for...of оголошує цикл, що перебирає ітерабельні об'єкти, як-от масиви і рядки. 
        // Тіло циклу буде виконуватися для значення кожного елемента.
        // Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// for (const variable of iterable) {
//         // тіло циклу
// }

        // variable — змінна, яка буде зберігати значення елемента на кожній ітерації.
        // iterable — колекція, яка містить ітерабельні(що можна порахувати) елементи, наприклад масив.

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//         console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//         console.log(character);
// }





                                //============== Методи split() і join() ==============
        // Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter.
        // Якщо роздільник - це порожній рядок, то створиться масив окремих символів.
        // Роздільником може бути один або декілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript - це цікаво";
// console.log(message.split(" ")); // ["JavaScript", "-", "це", "цікаво"]

        // Метод масивів join(delimiter) об'єднує елементи масиву у рядок. 
        // У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter.
        // Тобто ця операція протилежна методу рядків split(delimiter).

// const words = ["JavaScript", "це", "цікаво"];
// console.log(words.join("")); // "JavaScriptцецікаво"
// console.log(words.join(" ")); // "JavaScript це цікаво"
// console.log(words.join("-")); // "JavaScript-це-цікаво"





                                //============== Метод indexOf() ==============
        // indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві,
        // або число - 1, якщо такий елемент відсутній.Використовуйте indexOf тоді,
        // коли необхідно отримати сам індекс елемента.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1





                                //============== Метод includes() ==============
        // includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false відповідно.
        // Застосування цього методу корисне в ситуаціях, коли необхідно перевірити,
        // чи є елемент в масиві і не важлива його позиція(індекс).

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false





                                //============== Методи push() і pop() ==============
        // Додають або видаляють крайні елементи масиву.Працюють тільки з крайнім лівим і крайнім правим елементом,
        // і не можуть вставити або видалити елемент з довільної позиції.
        // array methods
        // Метод push() додає один або декілька елементів наприкінці масиву,
        // без необхідності зазначати індекси елементів, що додаються.
        // Повертає довжину масиву після додавання елементів.

        // push method
// const numbers = [];

// numbers.push(1);
// console.log(numbers); // [1]

// numbers.push(2);
// console.log(numbers); // [1, 2]

// numbers.push(3);
// console.log(numbers); // [1, 2, 3]

// numbers.push(4);
// console.log(numbers); // [1, 2, 3, 4]

// numbers.push(5);
// console.log(numbers); // [1, 2, 3, 4, 5]

        // Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент.
        // Якщо масив порожній, метод повертає undefined.

        // pop method
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop()); //  5
// console.log(numbers); // [1, 2, 3, 4]

// console.log(numbers.pop()); //  4
// console.log(numbers); // [1, 2, 3]

// console.log(numbers.pop()); //  3
// console.log(numbers); // [1, 2]

// console.log(numbers.pop()); //  2
// console.log(numbers); // [1]

// console.log(numbers.pop()); //  1
// console.log(numbers); // []





                                //============== Метод slice() ==============
        // slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву,
        // не змінюючи його.Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.

// slice method
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

        //Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

        // Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
// console.log(clients.slice(2)); // ["Poly", "Kiwi"]

        // Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]





                                //============== Метод splice() ==============
        // Швейцарський ніж для роботи з масивами, якщо вихідний масив необхідно змінити.
        // Видаляє, додає і замінює елементи у довільному місці масиву.
        
                        //         Видалення
        // Щоб видалити елементи в масиві, передаються два аргументи.

        //         splice(position, num)

        // position - вказує на позицію(індекс) першого елемента для видалення
        // num - визначає кількість елементів, що видаляються
        // Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи.
        // Наприклад, у нас є масив оцінок, який містить п'ять чисел від 1 до 5.

// const scores = [1, 2, 3, 4, 5];

// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);

// Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]

// А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

        // splice remove
        // На практиці, значення, що повертається(масив видалених елементів), використовується рідко.
        // Переважно, просто необхідно видалити елементи з масиву.

                        //         Додавання
        // Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи,
        //         за такої умови, другий аргумент повинен дорівнювати нулю.

// splice(position, 0, new_element_1, new_element_2, ...)

        // Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
        // Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
        // Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
        // Наприклад, у нас є масив з назвами квітів у вигляді рядків.Додамо новий колір перед елементом з індексом 2.

// const colors = ["red", "green", "blue"];

// colors.splice(2, 0, "purple");
// console.log(colors); // ["red", "green", "purple", "blue"]

        //Можна додати довільну кількість елементів, передавши четвертий, п'ятий аргумент тощо.

// const colors = ["red", "green", "blue"];

// colors.splice(1, 0, "yellow", "pink");
// console.log(colors); // ["red", "yellow", "pink", "green", "blue"]

                        //         Заміна
        // Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових.
        // Для цього необхідно передати мінімум три аргументи.Кількість елементів, що видаляються і додаються, може не збігатися.

// splice(position, num, new_element_1, new_element_2, ...)

        // position - вказує на позицію(індекс) першого елемента для видалення
        // num - визначає кількість елементів, що видаляються
        // Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
        // Наприклад, у нас є масив мов програмування з чотирьох елементів.

// const languages = ["C", "C++", "Java", "JavaScript"];

// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]





                                //============== Метод concat() ==============
        // Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. 
        // Порядок аргументів методу впливає на порядок елементів нового масиву.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]





                                //============== Метод concat() ==============



