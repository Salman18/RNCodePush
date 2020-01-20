# RNCodePush

## Installation

Install the App Center CLI: ```npm install -g appcenter-cli```


### Getting Started

Create an App Center account or sign-in through the CLI using the ```appcenter login``` command.

This command will launch a browser window asking you to authenticate with either your GitHub or Microsoft account. It will generate an access key that you must copy/paste into the CLI (it will prompt you for it). You are now successfully authenticated and can safely close your browser window.

If at any time you want to determine if you are already logged in, you can run the following command to display the e-mail address associated with your current authentication session, your username, and your display name:

```appcenter profile list```

### App Management

Before deploying updates, you must create an app with App Center using the following command:

```appcenter apps create -d <appDisplayName> -o <operatingSystem>  -p <platform> ```

With the original CodePush, apps automatically had two deployments (Staging and Production). In App Center, you'll have to create them yourself using the following commands:

```appcenter codepush deployment add -a <ownerName>/<appName> Staging```

```appcenter codepush deployment add -a <ownerName>/<appName> Production```

After you create the deployments, you can access the deployment keys for both deployments using 

```appcenter codepush deployment list --displayKeys -k```

Finally, if you want to list all apps that you've registered with the App Center server, run the following command:

```appcenter apps list```

### react-native-code-push plugin installation and setup

Configure install and configure react-native-code-push on your android and ios folders by clicking below

[react-native-code-push](https://github.com/microsoft/react-native-code-push)


### JS bundle and assets (react-native bundle for React-native apps)

``` react-native bundle --platform android --dev false --entry-file index.js --bundle-output  android/app/src/main/assets/index.android.bundle --dev false```

### Releasing Updates (General)

```
appcenter codepush release -a <ownerName>/<appName> -c <updateContentsPath> -t <targetBinaryVersion> -d <deploymentName>

[-t|--target-binary-version <version>]
[-с|--update-contents-path <updateContentsPath>]
[-r|--rollout <rolloutPercentage>]
[--disable-duplicate-release-error]
[-k|--private-key-path <privateKeyPath>]
[-m|--mandatory]
[-x|--disabled]
[--description <description>]
[-d|--deployment-name <deploymentName>]
[-a|--app <ownerName>/<appName>]
[--disable-telemetry]
[-v|--version]
```

Example:- 

```
appcenter codepush release -a salman18/RNCodePush-Android -c android/app/src/main/assets/index.android.bundle -t "1.0" -d Staging

```

For more information you can refer [here](https://docs.microsoft.com/en-gb/appcenter/distribution/codepush/)
