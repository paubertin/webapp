
'use strict';

module.exports = {
    apps: [
        {
            name: 'webapp',
            script: './index.js'
        },
    ],
    deploy: {
        production: {
            user: 'ubuntu',
            host: 'ec2-35-180-39-12.eu-west-3.compute.amazonaws.com',
            key: '~/.ssh/rsa_key.pem',
            ref: 'origin/master',
            repo: 'git@github.com:paubertin/webapp.git',
            path: '/home/ubuntu/Projects/webapp',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js',
        },
    },
};
