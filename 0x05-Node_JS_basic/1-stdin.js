//A process commandline task

process.stdout.write("Welcome to Holberton School, what is your name?\n");

process.stdin.on('readable', function() {
  var username = process.stdin.read();
  if (username !== null) {
    process.stdout.write('Your name is: ' + username);
  };
});

process.on('exit', function() {
  console.log('This important software is now closing\n');
});
