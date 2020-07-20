# Found _IT


## ENDPOINTS SUMMARY

AUTH & PROFILE ROUTES:

| Method   | #GET    | #POST   | #GET   | #POST  | #GET           | #POST          |#GET                    |
| -------- | ------- | ------- | ------ | ------ | -------------- | -------------- |----------------------- |
| Endpoint | /signup | /signup | /login | /login | /users/:userId | /users/:userId |/users/:userId/items    |
| Action   | Sign up | Sign up | Log in | Log in | See user       | Edit user      |See found items         |

APP ROUTES:

| Method   | #GET         | #POST         |
| -------- | ------------ | ------------- |
| Endpoint | /main        | /main/new     |
| Action   | Find objects | Add item      |


## Dependencies
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



