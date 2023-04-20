# TodoList Server

## Set up
1. Create a new .env file manually under this directory with config details shared at Discord evn-config channel. See .env.example for exact format.
2. Run `npm i` to install all necessary packages.
3. Run `npm run startdev` to keep server running under development mod. For production only: Run `npm run start`.

## API 

### User SignUp
- URL: /api/v1/auth/signup
- Type: POST
- Body: { "userName": "xxxx", "userPassword": "xxxxx", "userBackupCode": "zzzzzz" }
- Return data:
  {
  "success": true,
  "message": "New user created!",
  "token": "xxxxxxxxxx"
  }

### User LogIn
- URL: /api/v1/auth/login
- Type: POST
- Body: { "userName": "xxxx", "userPassword": "xxxxx" }
- Return data:
  {
  "success": true,
  "message": "User logged in!",
  "user": "username",
  "token": "xxxxxxxx"
  }

