> let greeting;

> greeting = "Hello everybody";
'Hello everybody'

> greeting.split("");
[ 'H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'b', 'o', 'd', 'y' ]

> greetingSplit = greeting.split("");
[ 'H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'e', 'r', 'y', 'b', 'o', 'd', 'y' ]

> let greetingMerge

> greetingMerge = greetingSplit.join("");
'Hello everybody'

> function getRandomInt(max) {
... return Math.floor(Math.random() * Math.floor(max));
... }
undefined
> getRandomInt(5);
4
> getRandomInt(greetingSplit);
NaN
> let numArray = [0,1,2,3,4,5];
undefined
> numArray
[ 0, 1, 2, 3, 4, 5 ]
> getRandomInt(numArray);
NaN
> greetingSplit.length;
15
> getRandomInt(greetingSplit.length);
3
> greetingSplit[3];
'l'
> let randItem = greetingSplit[getRandomInt(greetingSplit.length)];
undefined
> randItem
'H'
> let myNum;
undefined
> greetingSplit.slice(myNum = getRandomInt(greetingSplit.length -1), myNum+1);
[ 'y' ]
> greetingSplit.slice(myNum = getRandomInt(greetingSplit.length -1), myNum+1);
[ 'b' ]

> randomIndex(greetingSplit);
8
> let index1, index2;
undefined
> index1 = randomIndex(greetingSplit);
8
> index2 = randomIndex(greetingSplit);
9
> numArray[3,4] = index2;
9
> numArray
[ 0, 1, 2, 3, 9, 5 ]
> let letter1, letter2;
undefined
> letter1 = greetingSplit[index1,index1+1];
'r'
> letter2= greetingSplit[index2,index2+1];
'y'
> letter2 = greetingSplit[index2];
'r'
> index2
9
> letter2 = greetingSplit[index2, index2+1];
'y'
> letter1 = greetingSplit[index1];
'e'
> letter2 = greetingSplit[index2];
'r'
> greetingSplit[index1] = letter2;
'r'
> greetingSplit
[ 'H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'r', 'r', 'y', 'b', 'o', 'd', 'y' ]
> greetingSplit[index2] = letter1;
'e'
> greetingSplit
[ 'H', 'e', 'l', 'l', 'o', ' ', 'e', 'v', 'r', 'e', 'y', 'b', 'o', 'd', 'y' ]
>

