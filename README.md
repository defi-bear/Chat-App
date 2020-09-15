# Chat App

## Pre-requisites (DO THESE STEPS FIRST!)
1. Use React-Native for build the mobile app and it runs both on iOS and Android
2. Fetch chat data from `https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json`
3. Designed based on `https://dribbble.com/shots/2601900-Ui-Live-Support`

## Setup instructions

1. install packaegs using `yarn` 
2. install pods using `cd ios && pod install`
3. run project using `yarn ios` or `yarn android`

##  Specs

1. Use `react-navigation` v5 for navigating from `Splash` screen to `Chat` screen
2. Using `fetch` for retrieving chat data from online
3. Split the `Chat` page into the two parts - `ChatHeader` and `ChatContainer`
4. `ChatContainer` has two parts `FlatList` of `ChatItem`s and `ChatInput`
5. In the design it looks like it prefer `multiline` but I didn't use `multiline` because we need to type `secureTextEntry` which is not cooperating with `multiline` so I didn't use `multiline` but I built the `TextInput` like design
6. Disabled the `TextInput` when the `validation` is `false`
