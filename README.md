# slAPI

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

"slAPI", a pun of slappy, is a web application that serves as a repository for all things silly and whimsical. Users can explore a collection of funny and quirky data, as well as contribute their own by adding new silly entries.

Along with these contributions, users can rate other's posts. These ratings calculate our an average score, showing all users what their average rating on the platform is.

While there, users can interact with one another in the chat-box, allowing for me tomfoolery and ballyhoo to take place in real time.<br><br>

Website: [slAPI Land](https://desolate-sierra-47851-d89056b73f92.herokuapp.com/)<br><br>

YouTueb: [SillyAPI Land Video Demonstration](https://youtu.be/NXnet7akNKo)<br><br>

![SillyAPI Land Homepage](assets/images/SillyAPI.jpg)

![Login & Signup Page](assets/images/Loggin_Create.jpg)

![Logged In Display](assets/images/Logged_In.png)

![Create Post](assets/images/Create_Post.png)

![Rate Post](assets/images/Rate_Post.png)

## Tabel of Contents

- [SlApiI](#slapi)<br>
- [Description](#description)<br>
- [Tabel of Contents](#tabel-of-contents)<br>
- [User Story](#user-story)<br>
- [Acceptance Criteria](#acceptance-criteria)<br>
- [Installation](#installation)<br>
- [Technologies](#technologies)<br>
- [Packages](#packages)<br>
- [License](#license)<br>
- [Contributing](#contributing)<br>
- [Tests](#tests)<br>
- [Resources](#resources)<br>
- [Questions/Contact](#questionscontact)

## User Story

**AS A** user of web applications/social media and comedic genious <br>

**I WANT** to be able to post all thing funny and whimsickle on a platform <br>

**SO THAT** other can see what I post, then comment and rate what is posted

## Acceptance Criteria

**GIVEN** a functional web based application for tomfoolery and shennanigans

**WHEN** presented with homepage <br>
**THEN** can view a nav bar with a home route and login, along with all posts that have been created and the number of likes per post

**WHEN** clicking on a post <br>
**THEN** if not logged the user is redirected to the login page, if logged in directed that post's page.

**WHEN** when a user completes member signup <br>
**THEN** their password is encripted and they are redirect to the profile page

**WHEN** already a user <br>
**THEN** you can login with your email and password and will be redirect to the profile page

**WHEN** a user enters a title and content and clicks the create button <br>
**THEN** a post is created below current posts

**WHEN** a user clicks the delete button <br>
**THEN** the post is deleted

**WHEN** a user clicks on the post created <br>
**THEN** the user is redirected to the post's page

**WHEN** a user clicks on the like post <br>
**THEN** the number of likes increases

**WHEN** a user clicks on the any number of starts for a rating <br>
**THEN** the stars change color based on what is chosen

**WHEN** a user clicks submit stars <br>
**THEN** the rating of stars is submitted(feature currently not working)

**WHEN** a user clicks on the slAPI Profile in the nav bar <br>
**THEN** they are redirected to their profile page

**WHEN** a user clicks on the chat in the nav bar <br>
**THEN** a chat box appears in the bottom corner and can be used to chat with othe rusers

**WHEN** when the user clicks logout on the nav bar<br>
**THEN** the user is logged out and redirected to the homepage

## Installation

No installation needed. App is deplayed on Heroku.

## Technologies

![MySQL](https://img.shields.io/badge/-MySql-4479a1?style=for-the-badge&logo=mysql&logoColor=white)

![Heroku](https://img.shields.io/badge/-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Javascript](https://img.shields.io/badge/-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)

## Packages

The following npm packages were also used:

`MySQL2`<br>
`bcrypt`<br>
`dotenv`<br>
`nodemon`<br>
`Sequelize`<br>
`socket.io`<br>
`express.js`<br>
`express-session`<br>
`express-handlebars`<br>
`connect-session-sequelize`

## License

PLACEHOLDER UNTIL WE DECIDE WHICH LICENSE TO WE WANT TO USE

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

MIT License

Copyright 2024: Conor Allen, Whitney Simpson, Ernest Jones, Greg Greve & Heinz Ulrich V

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contributing

![GitHub Badge](assets/images/image-1.png)

- Conor Allen: [Callen996](https://github.com/callen996)
- Whitney Simpson: [Whitney-Simpson](https://github.com/Whitney-Simpson)
- Ernest Jones: [Wruqe](https://github.com/Wruqe)
- Greg Greve: [Goobergreve09](https://github.com/Goobergreve09)
- Heinz Ulrich V: [TheOarsman](https://github.com/TheOarsman)

## Tests

None currently

## Resources

[Socket.IO](https://socket.io/)

## Questions/Contact

See [Contributing](#contributing) or send one of us an email!

[Conor Allen](mailto:conorallen5252@gmail.com)<br>
[Whitney Simpson](mailto:whitmoon4819@gmail.com)<br>
[Ernest Jones](mailto:wruqess@gmail.com)<br>
[Greg Greve](mailto:gregory.greve@yahoo.com)<br>
[Heinz Ulrich V](mailto:heinzulrichv@gmail.com)
