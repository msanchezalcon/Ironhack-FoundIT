# Found _IT: Lost item management app through the community
Found IT aims to be an extra help for those who lost or found an item. This app serves as a registry from where an user can both find a lost item or register a found one, and then get in touch with the owner. This app was developed for the Ironhack Web Dev Bootcamp and therefore has room for improvement in scalability in the future.

## See demo: 
https://drive.google.com/file/d/1FeCnUNL6okJ2RRfJhJhfmGLJFZsUn_8U/view?usp=drivesdkview?usp=sharing

## ENDPOINTS SUMMARY

Auth & Profile routes:

|Id | Method  |  Path                     | Description                                      | Querys         |
|---|:-------:|:-------------------------:|:------------------------------------------------:|---------------:|
| 1 |post     |/api/signup                | Registers new user                               |                |
| 2 |get      |/api/signup                | Shows signup form                                |                |
| 3 |get      |/api/login                 | Shows login form                                 |                |
| 4 |post     |/api/login                 | Logs user in                                     |                |
| 5 |get      |/api/users/:userId         | User profile                                     |                |
| 6 |post     |/api/users/:userId         | Edits user info                                  |                |
| 7 |get      |/api/users/:userId/items   | Shows user found items          |                |


App routes:

|Id | Method  |  Path                      | Description                                      | Querys         |
|---|:-------:|:--------------------------:|:------------------------------------------------:|---------------:|
| 1 |get      |/api/                   | Index page                                       |                |
| 2 |get      |/api/items/all              | Shows all items                                  |                |
| 3 |get      |/api/items/:item_id         | Shows item details                               |                |
| 4 |get      |/api/items/:item_id/edit    | Shows edit form for item                         |                |
| 5 |post     |/api/items/:item_id/edit'   | Edits item                                       |                |
| 6 |post     |/api/items/new              | Adds new item                                    |                |
| 7 |get      |/api/items/:item_id/delete  | Deletes item                                     |                |
| 7 |get      |/api/chat/:item_id          | Opens chat for retrieving lost item              |                |






## Install dependencies on both server and client folders
```bash
npm i
```

## Running on server side
```bash
npm run dev
```

## Running on client side
```bash
npm start
```

Make sure you modify .env and add third party API keys.



