**DEVELOPING**

# gh-last-commit
gh plugin to show last commit in repository.

## Installation
~~~sh
$ gh extension install enuesaa/gh-last-commit
~~~
## Usage
~~~sh
$ gh last-commmit <username/repository>
2022-03-13T18:29:09Z	main    fix: gitgnore
2022-02-26T11:27:29Z	develop feat: add something
2021-01-09T01:52:32Z	aaa     docs: update readme
~~~
~~~sh
$ gh last-commmit <username/repository> --branch main
2022-03-13T18:29:09Z	main	fix: gitgnore
~~~
