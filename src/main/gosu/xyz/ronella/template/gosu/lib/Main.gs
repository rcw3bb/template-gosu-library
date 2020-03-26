package xyz.ronella.template.gosu.lib

uses org.slf4j.LoggerFactory

class Main {

  private final static var LOG = LoggerFactory.getLogger("Template-Gosu-Library")

  public function hello(name : String) : String {
    try {
      LOG.debug("public function hello(name : String) : String [BEGIN]")
      return "Hello ${name}"
    }
    finally {
      LOG.debug("public function hello(name : String) : String [END]")
    }
  }

}