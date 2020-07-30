# Found _IT


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



