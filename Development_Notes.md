## Repository Management

### Branch Management

1. Confirm **Status** of Repository
	
	`git status`

2. Create **new Working Branch**

	`git checkout -b feature/<feature-description>`

3. Confirm new Development is **conducted on new Working Branch**

	`git status`

4. Perform code and other changes

5. **Stage** *all* (-A) changes to Working Branch

	`git add -A`

6. **Commit** changes to Branch

	`git commit -m "Commit message"`

7. Confirm **latest Source Code has been used** in Working Branch, through Pull Request

	`git pull origin main`

	[`* branch etc., etc. -> FETCH_HEAD
	Already up to date.`]

8. **Push Working Branch** to GitHub under Working Branch (NOT under Main Branch)

	`git push origin feature/<feature-description>`

9. View Repository in GitHub, Compare & Pull Request

10. Open and Complete a Pull Request


### Git Commands

**List** All (Local or Remote) Git Branches

	`git branch`
	`git branch -r' (Remote Branch Names)
	`git branch -a' (All Branch Names)


**Switch** Git Branches

	`git switch <branch-name>


**Check Out** Branch

	`git checkout <branch-name>`


**Delete** Selected (Local or Remote) *Branch*

	`git branch -d <local-branch-name>`
	`git branch -D <local-branch-name>` (Force Delete)
	`git push <remote-name (e.g., origin)> -d <remote-branch-name>`


**Delete** Selected *File* within a Branch

	`git rm <file-name>`

**Report** Branch changes *Not Committed* to Remote Repository

	`git log <feature/source-branch-name> --not <target-branch-name (Remote Repository)>


**List All Files** under named Branch

	`git ls-tree -r master --name-only`


**Lists Ignored Files** from GitIgnore File

	`git status --ignored`


## JavaScript:

1. npm -init
2. npm install