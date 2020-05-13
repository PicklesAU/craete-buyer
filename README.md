<p align="center">
<img src="https://www.pickles.com.au/pickles-new-2015-theme/images/pickles-logo-locked.svg" width="300">
</p>

<h3 align="center">Pickles Front-End Engine</h3>

Pickles Front-end Engine was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

This project enables Core Application Framework Developers as a base to develop Front-end Apps.It will have all the functionality templates to build a Frontend Web App.


<h3 align="center">How it works</h3>

To run the application, we have to follow below steps:
- npm install (To install all the libraries required for the application)
- ng serve( To start the application)

additional commands are mentioned in the commands table below

<h3>Different npm commands to serve multiple purpose </h3>
```bash
 npm i <br/>
 npm start
 ```

Tasks                       | Description
----------------------------|---------------------------------------------------------------------------------------
npm start                   | Start the app in development mode with the english language only
npm start:es                | Start the app in development mode with the spanish language only
start:ssr                   | Start the server like SSR
extract-i18n                | Extract all messages from templates and ts files and update the language files with new translations
npm run lint                | Run the linter (tslint)
npm run test                | Run all unit tests with karma and jasmine
npm run test:app:watch      | Run app unit tests and wait for changes
npm run test:library:watch  | Run library unit tests and wait for changes
npm run e2e                 | Run end to end tests with protractor
npm run build:prod:en       | Build the app for production with english translations
npm run build:prod:es       | Build the app for production with spanish translations
npm run build:server:prod   | Build the server version for production
npm run compile:server      | Compiles the server with webpack
npm run build:ssr           | Complete task with all the build subtasks for SSR
npm run build:library       | Build the library
npm run serve:ssr           | Start the node server for angular universal
npm run validate:server     | Script that validate if server generated previously starts without error
npm run bundle-report       | Build and run webpack-bundle-analyzer over stats json
npm run release:minor       | Create a new minor release using standard-version
npm run release:major       | Create a new major release using standard-version
npm run ci                  | Execute linter, tests and production builds
npm run deploy              | Build the app and deploy it to firebase hosting

<h4> Frontend Engine Architecture</h4>

The Frontend Engine compose of Angular Modules. Each Angular module represents vertical slice. It contains submodules and components.

It follows component based architecture. However, Angular elements are used for highly re-usable components.

<h3 align="center">How to build the project</h3>

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

<h3 align="center">Functionality Overview</h3>
    This application has the following functionalities<br/>
     1. SPA Vertical Slice Module snapshot <br/>
     2. TDD driven Routing and Navigation <br/>
     3. TDD driven Component CRUD <br/>
     4. Testing Framework<br/>
           -Testing Routes<br/>
           -Testing Components<br/>
           -Testing Dependency Injection<br/>
           -Testing Classes or Services<br/>
           -Testing with Mocks or Spies<br/>
           -Testing directives<br/>
           -Testing async code<br/>
     5.Create Docker Image and run on windows machine<br/>
           -Install Docker on windows from the site : https://docs.docker.com/install/ <br/>
           -Run all the docker commands from the location, where the docker files are kept, usually at the root of the application.
           -Build the SPA : ng build <br/>
           -Build the docker image with the below command. Please note Dot(.) at the end is not important.<br/>
           docker build -t picklesfrontendengine:local .<br/>
           -Run the SPA on docker using the below command.<br/>
            docker run -p 30080:80 picklesfrontendengine:local<br/>
           -View docker images using the below command <br/>
            docker images<br/>
           -View containers list:<br/>
            docker container ls<br/>
           -Start/Stop Container Image<br/>
            docker start <ContainerID><br/>
            docker stop <ContainerID><br/>
           - To remove ( stopped Containers, all dangling images/build cache,<br/>
           all networks not used by at least one container).<br/>
            docker system prune<br/>

 
<h3 align="center">Development server</h3>

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<h3 align="center">Code scaffolding</h3>

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

<h3 align="center">Running unit tests</h3>
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

<h3 align="center"> Running end-to-end tests</h3>
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

<h3 align="center">Further help</h3>
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## SonarQube ##
#### Install SonarQube ####
For installing Sonarqube first download the [Sonarqube](https://www.sonarqube.org/downloads/).
For documentation can be seen in [here](https://docs.sonarqube.org/latest/).
Post download extracts the ZIP file to any folder and then run the `StartSonar.bat` from `sonarqube\bin\windows-x86–64`.
> Make sure you have JVM installed and running in your machine. For some time, you may get JVM timeout or loading error, no worries just rerun the StartSonar.bat file.

Now you can access the Sonarqube from your browser using the default port [http://localhost:9000](http://localhost:9000). 
You can use the default credentials i.e. **admin** and **admin** as the Login name and Password respectively.
> If the 9000 port is already being used, then the StartSonar.bat file execution will fail. 
To overcome this issue you can use any free available port in sonar.web.port present in sonarqube\conf\sonar.properties and uncomment or enable it. 
Rerun the StartSonar.bat file.

#### Configure Sonar with Angular ####
To configuring the Sonar with Angular application and to do this we need **sonar-scanner** node package in the Angular application. And to include this, please follow any one of below methods

`npm install sonar-scanner --save-dev`

Create a file called **sonar-project.properties** in your Angular root directory and add below attributes

```
sonar.host.url=http://localhost:9000
sonar.login=admin
sonar.password=admin
sonar.projectKey=PicklesFrontEndEngine
sonar.projectName=PicklesFrontEndEngine
sonar.projectVersion=1.0
sonar.sourceEncoding=UTF-8
sonar.sources=src
sonar.exclusions=**/node_modules/**
sonar.tests=src
sonar.test.inclusions=**/*.spec.ts
```

#### Integrate Karma Code Coverage with SonarQube ####
First, run `ng test --code-coverage`, this will create coverage folder in the apps. Then we need to add line in sonar-project.properties to point the **lcov.info**:

`sonar.typescript.lcov.reportPaths=coverage/PicklesFrontEndEngine/lcov.info`

Now we have both Karma code coverage and Sonar server ready, now will integrate both using sonar-scanner which we have installed in the previous step.
First, add a script called sonar to your **package.json**.

```
"scripts": {
    "sonar": "sonar-scanner"
}
```

Finally, run the below command to integrate the Karma coverage with the Sonar server

`npm run sonar`

And you will the result directly on the Sonar server by navigating to: [http://localhost:9000/dashboard?id=PicklesFrontEndEngine](http://localhost:9000/dashboard?id=PicklesFrontEndEngine).


## ESLint ##
Install all dependencies with npm

`npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev`

- eslint: The core ESLint linting library
- @typescript-eslint/parser: The parser that will allow ESLint to lint TypeScript code
- @typescript-eslint/eslint-plugin: A plugin that contains a bunch of ESLint rules that are TypeScript specific

Next, add an **.eslintrc.js** configuration file in the root project directory. Here is a sample configuration for a TypeScript project:

```
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
```
> JavaScript file is preferable for the .eslintrc file (instead of a JSON file) as it supports comments that can be used to better describe rules.

If using TypeScript with React, the eslint-plugin-react dev dependency should be installed.

`npm install eslint-plugin-react --save-dev`

and the following configuration can be used:

```
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
```

Ultimately it's up to you to decide what rules you would like to extend from and which ones to use within the rules object in your .eslintrc.js file. 
All rules can be seen [here](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules).

## Prettier ##
When using prettier we can tell eslint that it does not need to care about formatting rules, as Prettier already deals with them, by installing prettier locally:

`npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev`

- prettier: The core prettier library
- eslint-config-prettier: Disables ESLint rules that might conflict with prettier
- eslint-plugin-prettier: Runs prettier as an ESLint rule

In order to configure prettier, a **.prettierrc.js** file is required at the root project directory. Here is a sample .prettierrc.js file:

```
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 120,
  tabWidth: 4
};
```

Next, the .eslintrc.js file needs to be updated:

```
module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  }
};
```

The advantage of having prettier setup as an ESLint rule using eslint-plugin-prettier is that code can automatically be fixed using ESLint's --fix option. 
This can be added to **settings.json**.
Rules can be configured in **.eslintrc.js**, for example to use single-quote we can add this on the .eslintrc.js:

```
rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "prettier/prettier": ["error", { "singleQuote": true }] // rules to use single-quote instead of double-quote
  }
```

## Telling VSCode that ESLint checks our TypeScript ##
There is an Extention for VSCode to integrate ESLint into our editor. Its called **ESLint**.
After installing the extension, we need to change some settings of VSCode under: `File > Preferences > Settings`. 
Here we want to go to the JSON view of our settings in the top right corner there is a Button with **Open Setting (JSON)** tooltips on it.

Add below line to **settings.json**:

```
"eslint.autoFixOnSave": true, // For Prettier to autoFix on Save
"eslint.validate": [
  "javascript",
  "javascriptreact",
  { "language": "typescript", "autoFix": true },
  { "language": "typescriptreact", "autoFix": true }
]
```

# Pickles Angular + Okta Hosted Login Service

This shows you how to use the [Okta Angular Library][] to login a user to a Angular application. The login is achieved through the [Implicit Flow][], where the user is redirected to the Pickles Okta login page.  After the user authenticates they are redirected back to the application with an ID Token and Access Token.

This Angular + Okta Application, configured for Singe-Page App (SPA) mode. This is done from the Okta Developer Console and you can find instructions [here][OIDC SPA Setup Instructions].  When following the wizard, use the default properties.  They are are designed to work with this application.

Now you need to gather the following information from the Okta Developer Console:

- **Client Id** - The client ID of the SPA application that you created earlier. This can be found on the "General" tab of an application, or the list of applications.  This identifies the application that tokens will be minted for.
- **Issuer** - This is the URL of the authorization server that will perform authentication.  All Developer Accounts have a "default" authorization server.  The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://dev-1234.oktapreview.com/oauth2/default`.

These values must exist as environment variables. They can be exported in the shell, or saved in a file named `testenv`, at the root of this repository. (This is the parent directory, relative to this README) See [dotenv](https://www.npmjs.com/package/dotenv) for more details on this file format.

```ini
ISSUER=https://pickles.oktapreview.com/oauth2/aus9mbgm52M96swvu0h7
CLIENT_ID=0oamtjz6xb4hrHF1A0h7
```

Now navigate to http://localhost:4200 in your browser.

If you see a home page that prompts you to login, then things are working!  Clicking the **Log in** button will redirect you to the Okta hosted sign-in page.

You can login with the same account that you created when signing up for your Developer Org, or you can use a known username and password from your Okta Directory.

**Note:** If you are currently using your Developer Console, you already have a Single Sign-On (SSO) session for your Org.  You will be automatically logged into your application as the same user that is using the Developer Console.  You may want to use an incognito tab to test the flow from a blank slate.

[Implicit Flow]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit
[Okta Angular Library]: https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular
[OIDC SPA Setup Instructions]: https://developer.okta.com/authentication-guide/implementing-authentication/implicit#1-setting-up-your-application
[OKTA Documentation]: https://www.npmjs.com/package/@angular-builders/custom-webpack
[OKTA Auth JavaScipt SDK]: https://github.com/okta/okta-auth-js
[OKTA Reference]: https://developer.okta.com/code/angular/okta_angular_auth_js/
