#! /usr/bin/env node
import { Command } from "commander";
const program: Command = new Command();

program
  .name("networthy")
  .description("A CLI for HTTP requests, made in Typescript.")
  .version("0.1.0");

program.command('GET')
    .description("Make a GET request to the specified URL.")
    .argument("<URL>", "The URL to which you want to make the GET request.")
    .action((str) => {
        console.log(str)
        // cool
    })

program.parse();