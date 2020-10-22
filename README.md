# Electron Discord Bot Panel
  <a href="https://discord.gg/kBcxMga">
    <img src="https://discordapp.com/api/guilds/543881846899867648/widget.png?style=shield" alt="Discord Server">
  </a>

## Installation
Clone this repository
`git clone https://github.com/WindTR/electron-panel.git`

Requires [Node.js](https://nodejs.org/) v12+ (and npm) to run.

Open file location with command line then type `npm install` 
After installed open folder in editor something like Visual Studio Code, Atom, Sublime etc.

### Config
  - Open `config.json` in editor and in token line and paste your bot token 
  - If you don't know how to get bot token follow these some steps:
  - Open `https://discord.com/developers` in your browser
  - Applications > New Application > Type your name of the bot > Press **Create Bot**
  - Go to your created app > Bot > Create Bot > Copy the token

## Build
### Windows Build
  - In command line tpye `npm install` then `npm install electron-packager -g`
  - After installed `electron-packager` package type `electron-packager . electron-discord-bot --overwrite --platform=win32 --arch=ia32 --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Electron Discord Bot Panel"` press enter.
  - To get the folder of builded project in your main project folder go to `/release-builds/`.

### Made with [Electron.JS](https://electronjs.org) by [WindTR](https://wind.js.org)
