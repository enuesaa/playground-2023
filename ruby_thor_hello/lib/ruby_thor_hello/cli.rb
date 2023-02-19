require "ruby_thor_hello"
require "thor"

module RubyThorHello
  class CLI < Thor
    desc "echo", "input string"
    def echo(str)
      puts str
    end
  end
end