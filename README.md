 # log-colored
Log with COLORS for your console.

## Installing

Using npm:

```bash
$ npm install log-colored
```

## Example
```js
const log_c =  require('log-colored');
//success
log_c.success("log success!");
//info
log_c.info("log info!");
//warning
log_c.warning("log warning!");
//error
log_c.error("log error!");
```
![Image](https://i.imgur.com/GbjQI8S.png)

## applying colors and styles

### text colors

  - black
  - red
  - green
  - yellow
  - blue
  - magenta
  - cyan
  - white
  - gray
  - grey

### bright text colors

  - brightRed
  - brightGreen
  - brightYellow
  - brightBlue
  - brightMagenta
  - brightCyan
  - brightWhite

### background colors

  - bgBlack
  - bgRed
  - bgGreen
  - bgYellow
  - bgBlue
  - bgMagenta
  - bgCyan
  - bgWhite
  - bgGray
  - bgGrey

### bright background colors

  - bgBrightRed
  - bgBrightGreen
  - bgBrightYellow
  - bgBrightBlue
  - bgBrightMagenta
  - bgBrightCyan
  - bgBrightWhite

### styles

  - reset
  - bold
  - dim
  - italic
  - underline
  - inverse
  - hidden
  - strikethrough

### extras

  - rainbow
  - zebra
  - america
  - trap
  - random
```js
const log_c =  require('log-colored');

log_c.success("log success!".bgBrightGreen);

log_c.info("log info!".bgBrightBlue);

log_c.warning("log warning!".bgBrightYellow);

log_c.error("log error!".bgBrightRed);
```
![Image](https://i.imgur.com/gzpy4Kj.png)

```js
const log_c =  require('log-colored');

//success
log_c.success("log success!".green);

//info
log_c.info("log info!".blue);

//warning
log_c.warning("log warning!".yellow);

//error
log_c.error("log error!".red);
```

![Image](https://i.imgur.com/H76V2NN.png)

*log-colored uses as base colors which you can see on your web page ([github.com/Marak/colors.js](https://github.com/Marak/colors.js))* 
Enjoy.