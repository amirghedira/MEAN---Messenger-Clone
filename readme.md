# Overview

After getting advanced in MEAN stack development, I decided to take further by making a messenger clone that contains most of its functionalities 


# Launch the project
## backend
To launch the project, you have to first add a `.env` folder in the root directory that will hold the environment variables of the backend. You can find a `.env.example` folder as reference for the environment variables used.
Note that you need a cloudinary account to used in the backend as storage service.

After adding a `.env` file you have to install the NodeJS packages on the backend (the project holds both the frontend under the client folder and the backend in the root directory of the project)

To install the backend Node packages simply run:
``` bash
npm install
```
To run the backend server run:
``` bash
npm start
```
To run the backend server in development mode run:
``` bash
npm start:dev
```
Note that the server will listen on port `5000`
## frontend
Navigate to the client folder by running:
``` bash
cd client
```
Then to install the frontend packages run:
``` bash
npm install
```
Now you are ready to start the frontend by running:
``` bash
npm start
```
Note that the frontend will be accessible on port `4200`


 # Features

 As messenger, it provides instant messaging between users and seen message functionality. Also, it provides conversation customization from the colors, the emojis to pseudo names.

Not only that, sharing vocals photos and videos can be possible using a cloud service (Cloudinary) to save those files.

Besides, vocal calls and video calls are part of this application using `WebRTC` and `WebSockets`.
Without forgetting deleting conversations, and deleting messages with an instant update, archiving conversations, and blocking users.
The result was pretty amazing.

# Video demonstration:

[![Youtube Video](https://img.youtube.com/vi/D6L4mB4El00/0.jpg)](https://www.youtube.com/watch?v=D6L4mB4El00)


# Functionality
## Signup page
![signup_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/wborpv51oj06molwyywa.png) 
![signup_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/cdddawtcflbthdgbtpps.png)

## Login page
![login_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/ejgovg3fmdpumcvilzgo.png)

## Main page

![main_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/ocagoxr7sjcgdtqejevj.png)
## Chat customizations
![customizations_chat](https://amirplatform.s3.eu-central-1.amazonaws.com/project/x6wlq6o1sqs0a81dt8r0.png)

## Receiving a call
![call](https://amirplatform.s3.eu-central-1.amazonaws.com/project/qbd9sgrtotbdclintjv4.png)

## Chat settings

![chat_settings](https://amirplatform.s3.eu-central-1.amazonaws.com/project/ocjfruh9yh88q6or7qft.png)

## Voice messages

![voice_message](https://amirplatform.s3.eu-central-1.amazonaws.com/project/ewjo30gnuxtek6ygmkcu.png)

## Calling someone

![call_screen](https://amirplatform.s3.eu-central-1.amazonaws.com/project/tyj2bbgh58osgbq5aug8.png)

## Missing a call

![missing_call](https://amirplatform.s3.eu-central-1.amazonaws.com/project/tlp6oymvu7vlhdryke7l.png)