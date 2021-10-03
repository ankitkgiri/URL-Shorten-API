# URL-Shorten-API
> URL Shorten API using Node, Express, MongoDB

## Demo
![Demo Gif](https://raw.githubusercontent.com/ankitkgiri/URL-Shorten-API/main/Demo.gif)
## How do I run this on my PC?
### Get the repo into a folder of your choice, Navigate to that folder.
### Make sure you have Node installed 
```bash
# Install dependencies
npm install

# Connect a mongoDb instance by Adding your mongoDb connection string URI
# Config > default.json > "mongoURI" : "<your_connectionn_string"
# Edit your baseUrl to appropriate address

# run
npm start
```
## Endpoint to create short url

### POST api/url/shorten

{ "longUrl": "xxxx" }


