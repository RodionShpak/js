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





                                //============== Логічне «НЕ» ! ==============
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += a + 2;
b -= b - 4;
c *= c * 3;
d /= d / 10;

console.log(a, b, c, d);














