# Project: ReTappd
## https://aa-solo-project.herokuapp.com/

## Project Summary 
My project is a website for allowing users to sign up for an account and checkin in at famous bars all around the world and share what they had to drink and a review of the bar they visited.

## Project Views
### Home Page
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112311/screenshots/HomePage_Screenshot_elgzcz.png)

### Login Modal
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112313/screenshots/LoginModalScreenshot_o9lmrl.png)

### Sign Up
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112316/screenshots/SignupPageScreenshot_crmwoe.png)

### Bars Overview
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112303/screenshots/Bars_Overview_Screenshot_ar4nso.png)

### Drinks Overview
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112308/screenshots/Drinks_Overview_Screenshot_ga0j5k.png)

### User Profile
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112317/screenshots/UserProfileScreenshot_vrhtx7.png)

### Create Checkin Modal
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112305/screenshots/CreateCheckinModal_hbs3dy.png)

### Edit Checkin Modal
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112309/screenshots/EditCheckinModal_lywawj.png)


## Installation
1) Clone the project
2) cd into /root/backend and run `npm install`
3) Run `npm start`
4) cd into /root/frontend and run `npm install`
5) Run `npm start`

## Features
View recent checkins, drinks, and bars.
Create profiles
Create checkins for your page
Edit and delete functionality for checkins

## Tech Stack
### PostgresQL
### React
### Express
### Node.js
### CSS

## Upcoming Features
[]Creating, updating, and deleting bars.

[]Creating, updating, and deleting drinks.

[]Badges to show off number of checkins

[]Ability to comment on others checkins

## Challenges
Creating a modal edit for each of the users checkins was a really challenging concept and felt like a huge success to be able to pull off.

I had to create a component that would render inside of the map and pass down the data being iterated over as props to each component.

I also had to create the modalState inside of the component so that setting the showModal state to true did not set the state for each edit modal to true as well.


![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112858/screenshots/EditCheckinFunction_x0uogo.png)
![](https://res.cloudinary.com/dsjuna344/image/upload/v1642112856/screenshots/ScreenshotCheckinModalcard_dvwrju.png)


