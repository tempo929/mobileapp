'use strict'; 
// ページ上の要素(Element)を参照 // ページ上の要素(Element)を参照
const elementSelect = document.getElementById("calcType"); 
const elementNum1 = document.getElementById("num1"); 
const elementNum2 = document.getElementById("num2"); 
const elementResult = document.getElementById("result"); 
// イベントを登録 // イベントを登録
elementSelect.addEventListener("change", 
function(){ 
// 計算結果を求める 
let num1 = Number(elementNum1.value); // 1番目のテキスト入力フォームの値 const result = calculate(
let num2 =Number(elementNum2.value); // 2番目のテキスト入力フォームの値 Number(elementNum1.value), // 1番目のテキスト入力フォームの値
let calcType = elementSelect.value; // セレクトボックスの値(計算の種類) Number(elementNum2.value), // 2番目のテキスト入力フォームの値
let result; elementSelect.value // セレクトボックスの値(計算の種類)
// 計算の種類で処理を分岐 );
switch (calcType) {
case "type-add": // 足し算の場合 // 画面に表示
result = num1 + num2; elementResult.innerHTML = result; // テキストを代入
break; 
case "type-substract": // 引き算の場合 );
result = num1 - num2;
break;
case "type-multiply": // 掛け算の場合
result = num1 * num2;
break;
case "type-divide": // 割り算の場合
result = num1 / num2;
break;
}
// 画面に表示
elementResult.innerHTML = result; // テキストを代入
  }, false
);
elementNum1.addEventListener("change",
function(){ 
let num1 = Number(elementNum1.value); // 1番目のテキスト入力フォームの値 const result = calculate(
let num2 =Number(elementNum2.value); // 2番目のテキスト入力フォームの値 Number(elementNum1.value), // 1番目のテキスト入力フォームの値
let calcType = elementSelect.value; // セレクトボックスの値(計算の種類) Number(elementNum2.value), // 2番目のテキスト入力フォームの値
let result; elementSelect.value // セレクトボックスの値(計算の種類)
// 計算の種類で処理を分岐 );
switch (calcType) { // 画面に表示
case "type-add": // 足し算の場合 elementResult.innerHTML = result; // テキストを代入
result = num1 + num2; 
break; 
case "type-substract": // 引き算の場合
result = num1 - num2;
break;
case "type-multiply": // 掛け算の場合
result = num1 * num2;
break;
case "type-divide": // 割り算の場合
result = num1 / num2;
break;
  }
// 画面に表示
elementResult.innerHTML = result; // テキストを代入
  }, false
);
elementNum2.addEventListener("change",
function(){ 
// 計算結果を求める 
let num1 = Number(elementNum1.value); // 1番目のテキスト入力フォームの値 const result = calculate(
let num2 =Number(elementNum2.value); // 2番目のテキスト入力フォームの値 Number(elementNum1.value), // 1番目のテキスト入力フォームの値
let calcType = elementSelect.value; // セレクトボックスの値(計算の種類) Number(elementNum2.value), // 2番目のテキスト入力フォームの値
let result; elementSelect.value // セレクトボックスの値(計算の種類)
// 計算の種類で処理を分岐 );
switch (calcType) { // 画面に表示
case "type-add": // 足し算の場合 elementResult.innerHTML = result; // テキストを代入
result = num1 + num2; 
break; 
case "type-substract": // 引き算の場合
result = num1 - num2;
break;
case "type-multiply": // 掛け算の場合
result = num1 * num2;
break;
case "type-divide": // 割り算の場合
result = num1 / num2;
break;
}
// 画面に表示
elementResult.innerHTML = result; // テキストを代入
  }, false
);