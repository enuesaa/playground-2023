#!/usr/bin/env node
import process from 'node:process'
import { searchUtilityClassFromCss } from '../src/index'

const args = process.argv.slice(2) // hide bin
if (args.length === 0) {
  console.log('need search word')
  process.exit(1)
}
const word = args[0]
const list = searchUtilityClassFromCss(word)
list.map(v => {
  console.log(v)
})
