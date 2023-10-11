
# Transaction API

In this project we have implemented express and mongoose to create basic APIs to fetch transaction detail and disburse amount to school and fetch school list.To store the data we have used MongoDB cloud database. Dotenv library is used to protect the cloud database access.

To run the server just use "npm start" command.


## API Reference

#### Get All Transaction 

```http
  GET https://transaction-api-delta.vercel.app/transaction/all-transactions
```
#### Get Single Transaction

```http
  GET https://transaction-api-delta.vercel.app/transaction/transaction-detail/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Transaction |

#### Update Transaction Status
```http
  PUT https://transaction-api-delta.vercel.app/transaction/status/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Transaction |


#### Disburse Amount To School
```http
  POST https://transaction-api-delta.vercel.app/school/disburse-amount/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of School |

#### Disburse Amount To School
```http
  GET https://transaction-api-delta.vercel.app/school/disburse-school
```

To check above APIs, I have used Postman. You can use any API platform.
## Authors

- [@maaz](https://github.com/maaz64)


