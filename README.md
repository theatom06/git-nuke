# GitNuke

`GitNuke` is a command-line tool that helps you **delete the git history** of a branch. It is developed by `atom06` and is available as an `npx` package.

## Installation

You can `install GitNuke` using npm by running the following command:
```
$ npm install -g git-nuke
```

## Usage

To use GitNuke, **navigate to the git repository** you want to clean and **run** the following command:
```
$ git-nuke
```

This **will delete the git history** of the current branch and push the changes to the remote repository.

You can also use the following options:

- `-h` or `--help` to get help with the usage.
- `-v` or `--version` to get the version of Git Nuke.

## Contact

If you face any issues while using Git Nuke, you can contact the developer at [atom-06@outlook.com](mailto:atom-06@outlook.com) or raise an [raise an issue on Github](https://github.com/atom06/git-nuke/issues).

## Why i made this

I understand why maintaining a clean and organized codebase in important. However, sometimes we make mistakes and code gets pushed to the repository without proper testing or organization or proper thinking if thats what you want. This can lead to a cluttered history and make it difficult to track changes and collaborate effectively.

To address this, I developed GitNuke, a command-line tool that helps to easily delete the git history of a branch. With GitNuke, developers can clean up their repository and start fresh, without the clutter of unnecessary or poorly organized code. This can improve collaboration, streamline development, and lead to a more efficient and effective codebase.

I hope that GitNuke can help other developers achieve their goals and make the development process smoother and more productive.

## How it works
- Checkout's the repo to a repo called _gitnuke_;
- Adds all the files;
- Commits it;
- Deletes old branch;
- Renames to the old branch _(main, master whatever)_;
- Pushes with force to github.

## License

Its licensed under the [Carbon License](https://gist.github.com/atom06/6d520406e0d1d7612f29d31517888d90) although not in the code

## Happy hacking!!