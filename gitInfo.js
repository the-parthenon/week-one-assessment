/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = "Git is a version control program that allows you to track changes that are saved to the files/folders that are part of a project.  It creates snapshots of the files that it is tracking, allowing users to compare previous versions of those files and see, at a glance, what parts of the file have been altered between commits.  It also allows users to append descriptions of the changes that were made/implemented at the time of a new commit. (And these commit messages should be brief, but specific.  Other developers *hate* seeing stuff like 'made changes.'  That will quickly earn you the ire of your peers.)"

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = "GitHub is a website that allows you to copy local git repositories to the Internet, where multiple users can view, download, and make their own changes to a project.  It helps facilitate collaboration betwen multiple developers on a single project through a variety of methods, but most importantly by allowing you to keep a backup of your code on a non-local machine."

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

let gitInitDefinition = "git init is a terminal command that creates an initial git repository in a folder.  It essentially tells git to start tracking changes to the main directory, and allows further git commands to be used in that directory."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

let gitCloneDefinition = "git clone is a terminal command that creates a copy of an existing git repository, whether local or remote"

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

let gitStatusDefinition = "git status is a terminal command that allows you to inspect the current state of the pwd (present working directory).  It will report what branch of the repository you are currently in as well as files that have been modified since the previous commit (assuming there is one or more previous commits.)"

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

let gitAddDefinition = "git add is a terminal command that adds one or multiple files to be staged for your next git commit.  It essentially lets git know which files that have been modified since the last commit (assuming there have been previous commits) you want to include in your next commit."

let gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

let gitCommitDefinition = "git commit is a terminal command that saves a snapshot to git of all the changes that have been added via git add since the previous commit (assuming previous commits exist).  It creates a new version of the project that replaces the previous snapshot.  It also allows users to append a message, describing the changes that were made for the current commit"

let gitCommitCode = 'git commit -m "initial commit"'


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

let gitPushDefinition = "git push is a terminal command that pushes a copy of your local repository to a remote repository, such as GitHub."