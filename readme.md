# 🦉🦉🦉 UDEMM REMOTE LAB 🦉🦉🦉

![N|Solid](http://remotelab.com.ar/content/4bc6ed7bed356a8bba53c71caf0f1dc0.svg)


# MOBILE INSTRUCTIONS
# 💻 Installation

RemoteLab requires:
- [Node.js](https://nodejs.org/) v14.17.4 to run.
- [NPM](https://nodejs.org/) v6.14.14 to run.
- Develop:
  - [Xcode 13](https://xcodereleases.com/) to run.
- QA/Master
  - [Xcode 12.5.1](https://xcodereleases.com/) to run.
- Android Studio 11.0+.
  - sdk tool 30.

Clean all and install the dependencies and devDependencies and start the server.

```sh
watchman watch-del-all
rm -rf node_modules
npm i
npm start -- --reset-cache
npm run android:dev or npm run ios:dev
```

<BR>

 ## Commits:

<BR>

    1. Comment:
       1. Should have a description of the change that was made
    2. Always run (before commit):
       1. npm run test

## Rules for when a new plugin should be added

 - Check stars and fork
 - Check number of issues
 - Ask the rest of the team if they know the plugin or if they know of any that solve the same problem

<BR>