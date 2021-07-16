# Generate Envfile from Secret
### alekangelov/secret-envfile@v1

## About

Generate an Envfile from a full Github Secret string.
Very useful when you don't want to make secrets for every variable.

## Usage

The Action takes in a content input that's a Github Secret and
writes it into the .env file.

```yml
name: Create envfile

on: [push]

jobs:

  create-envfile:
 
    runs-on: ubuntu-latest
 
    steps:
    - name: ENVFILE
      uses: alekangelov/secret-envfile@v1
      with:
        content: ${{ secrets.ENVFILE_DEV }}
        filename: .env
```

## Inputs
```
    - content - The actual content of the envfile
    - filename - Defaults to .env, but pick your poison I guess.
```