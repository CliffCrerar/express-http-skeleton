## express-http-skeleton
[![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

an express http skeleton


## installation
create a project directory
```bash
mkdir -p ~/projects/<project-name>
```

change to the project directory
```bash
cd ~/projects/<project-name>
```

clone the repo in the project directory
```bash
git clone -o github git@github.com:dan-nl/express-http-skeleton.git .
```

install node module dependencies in the project directory
```bash
npm install
```

follow the [config](#config) instructions.

start the application from the project directory
```bash
npm start
```

## config
copy the `/config/development-example.js` to `/config/development.js` and alter as appropriate.

### env variables
there are 4 server environment variables that the application depends on; 3 can be hard coded in the config file or set as a server environment variables. `NODE_ENV` must be set as a server environment variable. if you hard code the other 3 in the config file, you don’t need to set them as environment variables.

on most linux machines, if your server user uses a bash shell, you can add the following export commands to the `.bash_profile` file in the user’s home directory in order to have them set for every shell session.

#### server environment
```bash
export NODE_ENV=development
```

#### server ip address
```bash
export NODE_IP_ADDRESS=''
```

#### http
if you want the application to run with http, remove the ssl config object in `/config/development.js`.

#### https
if you want the application to run with https, you’ll need set an ssl key and crt in the config. [this article](https://devcenter.heroku.com/articles/ssl-certificate-self) will help you create a self-signed ssl certificate if needed. then set the following environment variables.
```bash
export SSL_KEY=/ssl.key.location
export SSL_CRT=/ssl.crt.location
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/express-http-skeleton.svg
[david-dm-url]: https://david-dm.org/dan-nl/express-http-skeleton
[david-dm-dev-image]: https://david-dm.org/dan-nl/express-http-skeleton/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/express-http-skeleton?type=dev
[mit-license]: https://raw.githubusercontent.com/dan-nl/express-http-skeleton/master/license.txt
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/0f684268-6ad3-4023-bfba-e252b524da02/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/0f684268-6ad3-4023-bfba-e252b524da02
