# CompareX--- Zuri project Team_109

Excel file content comparism system

Project Name - CompareX

CompareX is a system under development to serve the following functionalities

- Convert csv file to xlsx and vice versa
- Highlight duplicates in a single file
- Remove duplicates and return return a single file
- Remove duplicates and return 2 files
- Highlight duplicates and return two files.

View the live demo of the project [here](https://team-109-excel-comp.vercel.app/)

## Resources

- #### [Figma](https://www.figma.com/file/2ykYhTeaZk7l0jIfNZdKK9/team-109?node-id=336%3A2068)

- #### [Figjam](https://www.figma.com/file/qquWLVSOeBwgDvS1vf5JWa/Team-109?node-id=0%3A1)

- #### [Database Schema](https://drive.google.com/file/d/1eWcCXfDh7m7rA5JLCGW_fAQL_PehkVsl/view)

- #### [Presentation](https://drive.google.com/file/d/1MYBPX_cKadn97FVzHdNSxi-t-s937xqQ/view?usp=sharing)

- #### [Contributions](https://docs.google.com/spreadsheets/d/1dzV8WrCeq6UGmxM1WOFoyGZgR5rHHEzY6x7QxK2dqyc/edit?usp=drivesdk)

- #### [Suggestions Box](https://docs.google.com/document/d/1dvsMw-w4K_LoPm12NRYw2Z-xbglzFKFyQ6gf6764OG8/edit)

## How to Contribute

- #### Fork your own copy of the Repository

  The first thing you will want to do is fork [this](https://github.com/zuri-training/Team-109-__-Excel_comp) repository. What this means, is that you get your own copy of this repository. You can then safely make changes to your own copy, and then later, you can submit your changes, and tell the team lead to combine (merge) the changes you made to the main repository. Here is a [tutorial](https://www.howtogeek.com/759384/how-to-fork-a-github-repository/#:~:text=To%20fork%20a%20repo%2C%20log%20in%20to%20your,been%20forked.%20Go%20ahead%20and%20click%20that%20button.) showing you how to do that

- #### Clone the Repository on your Local Machine

  The next thing you want to do is clone (make a copy) of the Project on your profile, to your local machine (Laptop, PC, MacBook). To do that,

  - Copy the link of your fork of the repository (the one you forked).
  - Open the folder you want to work on your machine.
  - Open your favourite editor(e.g Vscode).
  - Open the terminal.
  - run `git clone [Link to your copy of the compareX repository]`.
    > The link should look like this : `https://github.com/<your username>/Team-109-__-Excel_comp`

- #### Configure the upstream

  Now you have the local copy of compareX. There's more than one developer contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :

  - go to your local machine terminal, in the project folder
  - run `git remote add upstream https://github.com/zuri-training/Team-109-__-Excel_comp.git`

- #### Commiting your changes

  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - add the changes using `git add .` or any method(github desktop, VScode source control) that serves your needs.
  - add concise commit message.
    > e.g `git commit -m "adds signup button to the sign up page"`
  - run `git push origin`
    > Which pushes your changes to your online copy, after which you then open a pull request.

- #### Opening Pull requests

  Now that you have updated your online copy. You will need a way to inform the PR Lead handling the original repository that your contribution is ready. To do that, you open a Pull request, which simply means that you want them to combine(merge) your changes with that of the original repository. Because, what is the essence of making changes without the changes being merged right?

  To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your github account. And click on your own copy of the repository.
  - You will see the option to open a pull request.
  - change the basr repository branch to develop, to do this click on the button with 'base: main' and select develop
  - Explain what your changes does.
  - Click the open pull request button and wait.

- #### Constantly update from upstream

  Now that you have forked the repository, you have cloned the repository and also set the upstream. To stay up to date and avoid conflicts. Before you edit anything, you need to update your local copy. Therefore, whenever you want to make any change, first run an update command like so:

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull upstream develop`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.

- ### How to get started with the Frontend

  After cloning and pulling the latest changes, from the base folder(the folder created when you cloned)
  run `cd Frontend/gui`
  run `npm run dev`

  open your browser and go to `http://localhost:3000/`
  there you'll be able to view the app and see your changes as you code
