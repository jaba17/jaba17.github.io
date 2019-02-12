
function type(){
  var code = document.getElementById('code');

  var typewriter = new Typewriter(code, {
      loop: true
  });

  typewriter.typeString('CODE')
      .pauseFor(2500)
      .deleteAll()
      //.typeString('Strings can be removed')
      //.pauseFor(2500)
      //.deleteChars(7)
      //.typeString('<strong>altered!</strong>')
      //.pauseFor(2500)
      .start();

}
