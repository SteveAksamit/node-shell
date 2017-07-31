var fs = require('fs');

module.exports = {
  pwd: function (file) {
    process.stdout.write(process.argv[0]);
    process.stdout.write('\nprompt > ');
  },
  ls: function (file) {
    fs.readdir('.', function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + '\n');
      });
    process.stdout.write('\nprompt > ');
    });
  },
  date: function(file){
    var myDate = new Date();
    process.stdout.write(myDate.toUTCString());
  },
  echo: function(file){
    process.stdout.write(cmd.slice(1).join(' '));
  },
  cat: function(file){
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    });
  },
  head: function(file){
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataString = data.toString()
      var dataArray = dataString.split('\n')
      var counter = 0
      while(counter < 5){
        process.stdout.write(dataArray[counter] + '\n');
        counter++;
      }
      process.stdout.write('\nprompt > ');
    });
  },
  tail: function(file){
    fs.readFile(file, (err, data) => {
      if (err) throw err;
      var dataString = data.toString()
      var dataArray = dataString.split('\n')
      var counterStart = dataArray.length - 6;
      while(counterStart < dataArray.length){
        process.stdout.write(dataArray[counterStart] + '\n');
        counterStart++;
      }
      process.stdout.write('\nprompt > ');
    });
  },
}
