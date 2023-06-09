# Пользовательский интерфейс для отправки и получений сообщений WhatsApp
## Ссылка на сервис:
https://littowl.github.io/GreenApi/
## Локальный запуск проекта:
Для запуска на локальной машине выполняем следующие действия:
1. Cкопировать репозиторий

   `git clone https://github.com/littowl/GreenApi.git`
  
2. Установить зависимости 

   `npm i` 
  
3. Выполнить одну из команд

   `npm start`
  
или же

   `npm run build`
## Описание работы:
При запуске приложения открывается страница аутентификации. При вводе некорректных данных пользователь получает уведомление, что данные не верны.
После успешного прохождения аутентификации открывается окно чата, где пользователю предлагается добавить контакт путём ввода его номера
### Вводим номер получателя в формате "7xxxxxxxxxx", не используя дополнительные символы
После ввода номера контакт появляется в списке контактов. При клике на контакт откроется окно чата с ним.
После нажатия на кнопку "Отправить" сообщение будет доставлено получателю, а также отображено в данном пользовательском интерфейсе.
Ответ от получателя ожидается в течение 5 секунд. 
Если какие-либо ответы были отправлены собеседником позже - они будут отображены в порядке отправки после следующео сообщения пользователя.
