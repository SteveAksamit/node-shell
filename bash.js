
var commands = require('./commands')

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  //var cmd = data.toString().trim(); // remove the newline
  var cmd = data.toString().trim().split(" ");
  if (cmd[0] === 'echo') {
    return commands.echo();
  } else if (cmd[0] === 'pwd') {
    return commands.pwd();
  } else if (cmd[0] === 'ls') {
    return commands.ls();
  } else if (cmd[0] === 'date') {
    return commands.date();
  } else if (cmd[0] === 'cat') {
    return commands.cat(cmd[1]);
  } else if (cmd[0] === 'head') {
    return commands.head(cmd[1]);
  } else if (cmd[0] === 'tail') {
    return commands.tail(cmd[1]);
  }

  else {
    process.stdout.write('You typed: ' + cmd.join(" "));
    //process.stdout.write('\nprompt > ')
  }
  process.stdout.write('\nprompt > ')
});
