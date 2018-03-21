
# serverless

## Instructions
Clone and npm install. Make sure you have your serverless credentials and profile set. Modify serverless.yml with your service name, along with the correct name of your serverless credential profile.

## General Note
This repo is great for tinkering and starting projects. Can't guarantee anything here for security of data and preventing data injection attacks. Up to you to control what hits the codebase.

## Environment Variables
This codebase uses dotenv and .env files to manage environment variables. By default, .gitignore prevents these variables from being committed into the repo. Also by default, Serverless will upload your .env with your zipped application package, while being ignored by git.

## License
MIT licensed, copyright 2018 Haseeb Qureshi.
