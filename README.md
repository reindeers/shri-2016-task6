[![Build Status](https://travis-ci.org/reindeers/shri-2016-task6.svg?branch=master)](https://travis-ci.org/reindeers/shri-2016-task6)
[![bitHound Overall Score](https://www.bithound.io/github/reindeers/shri-2016-task6/badges/score.svg)](https://www.bithound.io/github/reindeers/shri-2016-task6)

# Логи heroku

### Все логи делятся на три категории
* логи приложения
* системные логи
* логи api

## Логи приложения
логи, которые выводит само приложение, статус приложения (вызов node server.js, например).

## Системные логи
Информация о деплое (кем вызван, какая версия приложения, какой результат), состояние dyno, действия с процессами (например, вызов для приложения команды npm start)

## Логи api
у меня туда пишет только router. Статус запроса, метод, использующийся в запросе, ссылка, на которую посылается запрос, время обработки и т.д.



//
