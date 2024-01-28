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
8 months ago	main    fix: gitgnore
2 months ago	develop feat: add something
a year ago  aaa     docs: update readme
~~~
~~~sh
$ gh last-commmit <username/repository> --branch main
8 months ago	main	fix: gitgnore
~~~
