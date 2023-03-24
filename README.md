# CurrencyConverter

Використано зовнішнє API (https://api.exchangeratesapi.io/) + безкоштовний ключ на 250 показів на місяць.

Опис стану:

rate - курс обміну валют

from - валюта, з якої проводиться конвертація (за замовчуванням: USD)

to - валюта, до якої проводиться конвертація (за замовчуванням: UAH)

amount - кількість валюти, яку потрібно конвертувати (за замовчуванням: 1)

convertedAmount - сконвертована кількість валюти

Код використовує дві функції useEffect(), щоб здійснювати запит до API, коли змінюються валюти from або to
та
для перерахунку convertedAmount, коли змінюється amount або rate.

два поля input для введення даних (один input заблокований, туди виводиться результат функції)
два списки select з валютами для конвертації

---

CurrencyConverter(): основна функція.

useState(): всі зміни з даними валют

useEffect(): для отримання останнього курсу валют з API + зберігає компонент

fetch(): бере дані з API.

event.target.value: дані введені користувачем

handleFromChange(): змінює валюту, з якої конвертується

handleToChange(): змінює валюту, у яку конвертується.

handleAmountChange(): змінює суму для конвертації

---

на хостингу:
https://candid-starship-6c0500.netlify.app/


! API is not working (wrong key). I wrote to the support service.
