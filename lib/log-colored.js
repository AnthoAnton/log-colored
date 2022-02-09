const colors = require('colors');

module.exports = {
  success: function() {
   
      var args = [].slice.call(arguments, 0);
      args.unshift("debug:".green);
      console.log.apply(console, args);
    
  },
  info: function() {
    
      var args = [].slice.call(arguments, 0);
      args.unshift("info:".cyan);
      console.log.apply(console, args);
    
  },
  warning: function() {
   
      var args = [].slice.call(arguments, 0);
      args.unshift("warning:".yellow);
      console.log.apply(console, args);
    
  },
  error: function() {
   
      var args = [].slice.call(arguments, 0);
      args.unshift("error:".red);
      console.log.apply(console, args);
    
  }
}
