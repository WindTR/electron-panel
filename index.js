//Made by WindTR
//https://github.com/WindTR/
//https://discord.gg/kBcxMga/
//https://wind.js.org/


const electron = require('electron');
const path = require("path");
const url = require("url")
const { Menu, protocol } = require("electron");

const { app, BrowserWindow, ipcMain, ipcRenderer } = electron;

let mainwindow;

app.on("ready", () => {
    
    mainwindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration: true
        },
        width: 740,
        height: 540
    });

    

    console.log(process.platform + process.arch +" ")

    mainwindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "views/index.html"),
            protocol: "file",
            slashes: true
        })
    );
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate)
    Menu.setApplicationMenu(mainMenu)
    
});
    const mainMenuTemplate = [
        {
            label: "Dosya",
            submenu: [
                {
                    label: "DevTools",
                    click: async () => {
                        mainwindow.webContents.openDevTools()
                    }
                },
                {
                    label: "Exit",
                    click: async () => {
                        process.exit(0)
                    }
                }
            ]
        }
    ]
