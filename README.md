[![Build status](https://build.appcenter.ms/v0.1/apps/1df42b44-df15-43f8-9ca3-6d3bce0d86bc/branches/master/badge)](https://appcenter.ms)

# ReactNativeCodePuhs 
An React Native app to test AppCenter's CodePush (and yes, I called "Puhs", not "Push").
My main objective was to see how to setup CodePush with a real React Native app and how to use AppCenter to distribute new versions of my app (not external App Stores where involved).

Currently, it only works with Android (due to my lack of iOS signing permissions) but adding iOS support should be a piece of 🍰.

### Setup I made
Basically, I followed this guide: https://codeburst.io/react-native-updates-with-vs-app-center-codepush-3d56ef07f1c4.

I've created an account at appcenter.ms, linked my Github account and pointed this repo (and its `master` branch) to be the source of truth when it comes to deployments and releases. 

CodePush recommends that we setup as many apps as operating systems being supported (and they're right!). In this case, only Android support.

### How does it work?
Every time I push something to master, AppCenter will distribute the new release version to the contributors (right now, only me 🤷🏽‍♂️).
If I run  `appcenter codepush release-react`, an update will be distributed among the users I want (you can configure it using the cli params). That's the power of CodePush 💪🏽!


### How to run things?
This is a React Native app so:
* go inside ReactNativeCodePuhs and run `yarn`
* once you got all the code, run `react-native run-android` or `react-native run-ios` (make sure to have a emulator up and running, or a device connected to your computer).

From now on, you have two options:
* either push things to `master` and wait for appcenter to distribute your new release or
* run `appcenter codepush release-react` and force updates thru CodePush.

### Pain points
* keystore management
** The app needs to be signed to be "compliant" to what AppCenter demands so you need to setup signing keys for your apps
** I ran the command to setup a keystore within the project (it's not versioned, of course!), but then you need to add the keystore to the AppCenter + the passwords and other stuff. Not sure how to do this in a bigger project, where you have more devs adding/removing stuff from the repo.
* CodePush UI vs CodePush cli
** Yeah, the CodePush UI is very intuitive and flashy, but I'll probably stick with the cli to run stuff. At first glance, the cli seems pretty straightforward but I'm not sure. I guess I'll have to come up with new scenarios and make some tests around it.
* Manual configuration seems daunting
** Yes, it is! I used `react-native link` and everything just worked but I'm pretty sure that doing it manually won't be thaaat easy. Specially when dealing with iOS and the signing keys. Passwords needs to be stored in a safe place 🤷🏽‍♂️👮🏽‍♂️.