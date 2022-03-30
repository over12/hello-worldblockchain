// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
  string public greeting;

  constructor(){
    greeting = "Minha primeira mensagem na blockchain";
  }

  /**
  * Recupera o valor que a variavel greeting tem
  * quando queremos recuperar valores de variavies usaremos o termo "view"
  * ele deixa claro para blockchain que esse método apenas retornar valores e nao alterará
  * métodos view não tem taxas de gas, ou seja, é gratuito.
  * @return string
   */
  function sayHello() public view returns(string memory){
    return greeting;
  }

  /**
  * Método para alterar o texto na variavel greeting
  * quando queremos recuperar valores de variavies usaremos o termo "view"
  * ele deixa claro para blockchain que esse método apenas retornar valores e nao alterará
  * métodos view não tem taxas de gas, ou seja, é gratuito.
  * @param _greeting string  
   */
  function updateGreeting(string memory _greeting) public{
    greeting = _greeting;
  }
}
