const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const recived = require('./notes')
const notes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
})


yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
})

yargs.command({
  command: 'list',
  describe: 'list of note',
  handler() {
    notes.listNotes()
  },
})

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv){
    notes.readNote(argv.title)
  },
})

yargs.parse();


// console.log(yargs.argv);
// console.log(process.argv);
// console.log(yargs.argv);

// const command = process.argv[2]
// console.log(command);

// console.log(chalk.red.underline(recived()))

// console.log(chalk.green.inverse(validator.isURL('https:/mead.io')))

// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Maimoon.');

// fs.appendFileSync('notes.txt', 'I am a Web Developer');
