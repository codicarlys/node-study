var regExp = /9999-9999/;
var telefone = '9999-9999';

console.log(regExp.exec(telefone))
console.log(regExp.test(telefone))

// Characteres especiais
var regExp = /^\(90\) 9999-9999$/;
var telefone = '(90) 9999-9999';

// Grupos
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

// Quantificadores
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

// Metacaracteres . - qualquer caracter; \w - [a-zA-Z0-9_]; \W [^a-zA-Z0-9_]; \d
var regExp = /^\(\d{2}\) \d{4,5}-?\d{4}$/g;
var telefone = "<table>\
                  <tr>\
                    <td>(80) 999778899</td>\
                    <td>(90) 998978899</td>\
                    <td>(70) 98767-9999</td>\
                  </tr>\
                <\table>";
regExp.test(telefone);


// String API match - input: search output: array; split - input: str output: split; replace - input: substr ouput: replace str
