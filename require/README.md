# 2017-08-05
require를 변수로 선언해서 사용하고 안하고의 performance를 비교해봤다.<br>
![require](./novariable.png) VS ![variable](./variable.png)

## Average
변수를 선언하지 않고 VS 선언하고
6,988ms VS 21.9ms

## Source Code
[require.js](require.js)<br>
[variable.js](variable.js)