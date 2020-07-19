# Found _IT


## ENDPOINTS SUMMARY

AUTH & PROFILE ROUTES:

| Method   | #GET    | #POST   | #GET   | #POST  | #GET           | #POST          |
| -------- | ------- | ------- | ------ | ------ | -------------- | -------------- |
| Endpoint | /signup | /signup | /login | /login | /users/:userId | /users/:userId |
| Action   | Sign up | Sign up | Log in | Log in | See user       | Edit user      |

APP ROUTES:

| Method   | #GET         | #POST         | #GET            |
| -------- | ------------ | ------------- | --------------- |
| Endpoint | /main        | /main/new     | /main/errands   |
| Action   | Find objects | Add item      | See found items |


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



