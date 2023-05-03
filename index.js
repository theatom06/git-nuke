#!/usr/bin/env node
const path = require('path');
const { spawn } = require('child_process');
const { readFileSync } = require('fs');

const packageFile = readFileSync(path.join(__dirname, 'package.json'), 'utf8');
const { version } = JSON.parse(packageFile);

function run(command, args) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, { stdio: 'inherit' });
        child.on('error', (err) => {
            reject(err);
        });
        child.on('exit', (code, signal) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Command '${command} ${args.join(' ')}' exited with code ${code} and signal ${signal}`));
            }
        });
    });
}

async function checkBranch() {
    return new Promise((resolve, reject) => {
        const runner = spawn('git', ['branch', '--show-current'], { stdio: 'pipe' });
        runner.on('error', (err) => {
            reject(err);
        });
        runner.on('exit', (code, signal) => {
            if (!code === 0) {
                reject(new Error(`Command 'git branch --show-current' exited with code ${code} and signal ${signal}`));
            }
        });
    });
}

async function main() {
    const branch = await checkBranch();
    await run('git', ['checkout', '--orphan', 'gclean']);
    await run('git', ['add', '-A']);
    await run('git', ['commit', '-m', 'Cleaning up']);
    await run('git', ['branch', '-D', branch]);
    await run('git', ['branch', '-m', branch]);
    await run('git', ['push', '-f', 'origin', branch]);
    const t = Math.floor(process.uptime());
    const b = branch.substring(0, 6).padEnd(7, ' ');
    console.log(`Git Nuke@${version}
    Cleaned up branch: ${b}
    In just: ${t} seconds

    If you have any problem: 
    - atom-06@outlook.com
    - https://github.com/atom06/git-nuke
    else please star the repo on github.
    https://github.com/atom06/git-nuke

With love,
atom06.
Happy Hacking!
`);
}

const arg = process.argv[2];
if (arg === '-h' || arg === '--help') {
    console.log(`Git Nuke:-
    Nuke the git history
    Usage: 
        1) install git-nuke: npm install -g git-nuke
        2) Run it!: git-nuke
        3) Just kidding there is no 3rd step

    If you have any problem:
        - atom-06@outlook.com  OR
        - https://github.com/atom06/git-nuke
    
    else if you liked this project star our it on github.
    https://github.com/atom06/git-nuke
    For version: git-nuke --version;

With love,
atom06.
Happy Hacking!
    `);
} else if (arg === '-v' || arg === '--version') {
    console.log(`git-nuke@${version} - atom06`)
} else {
    main(0)
}