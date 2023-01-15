#! /usr/bin/env node
var arguments: Array<string> = process.argv

// TODO: Command Handler

if (arguments.length < 3) {
  // TODO: Print help page
  console.log("ERROR: No arguments provided")
  process.exit(1)
}

var command: string = arguments[2]