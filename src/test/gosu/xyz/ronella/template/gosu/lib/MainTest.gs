package xyz.ronella.template.gosu.lib

uses gw.test.TestClass

class MainTest extends TestClass {

  public function testHelloWorld() {
    var main = new Main();
    assertEquals("Hello World", main.hello("World"))
  }

}