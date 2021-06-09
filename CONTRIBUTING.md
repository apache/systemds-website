# Update and Commit workflow (Deprecated)

## Prerequisites

Read through [Apache Version control infrastructure](https://infra.apache.org/version-control.html)

Note: Commit access to the apache svn repository is required.

### shell or Windows Powershell

```powershell
F:\Repo> git clone https://github.com/apache/systemds-website
F:\Repo> svn checkout https://svn.apache.org/repos/asf/systemds systemds-website-svn
F:\Repo> ls
systemds-website
systemds-website-svn
```

### Build website contents

```Powershell
F:\Repo\systemds-website> npm install
F:\Repo\systemds-website> gulp
```

### Copy the website contents to svn repo

- on Powershell

```Powershell
F:\Repo\systemds-website-svn\site> Copy-Item -Path F:\Repo\systemds-website\_site -Recurse -Container:$false
```

- Instead of `Copy-Item -Path .. -Recurse`, one could simply use `cp` on a `linux` based system. On Linux

```bash
F:\Repo\systemds-website-svn\site> cp -r F:\Repo\systemds-website\_site
```

![image](https://user-images.githubusercontent.com/53068787/81162333-a396c200-8faa-11ea-9b8c-6a7539f83344.png)

**see Changes:**
See modifications, to see only the expected changes were made. (If there are changes to other files simply do
not add them!).
![image](https://user-images.githubusercontent.com/53068787/81162446-d2149d00-8faa-11ea-95f2-ef84a69e117e.png)

**svn commit:**
Select `svn commit` option, after right clicking the `systemml-website-svn` folder.
And add message based on the commits.
![image](https://user-images.githubusercontent.com/53068787/81162752-51a26c00-8fab-11ea-996f-94ac1528dd4d.png)

Provide your apache credentials, that you normally use to push for git repositories.
![image](https://user-images.githubusercontent.com/53068787/81163010-b5c53000-8fab-11ea-9570-2de09598ebad.png)

This would update the website.

**ProTip:** Always do a sanity check by knowing what all files changed
