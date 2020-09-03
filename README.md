<p align="center">
  <h3 align="center"><img src="/img/logo_300dpi.png" width="250px"></img></h3>

  <h4 align="center">
     Andover Athenaeum Codebase
  </h4>
</p>

---

Welcome to the Andover Athenaeum Codebase! This is a pretty simple website made in HTML/CSS/Javascript. Very little coding should be necessary just to update the magazine every cycle.

**Steps for Updating:**
1. See `/documentation/Writing for Athenaeum.md` or [here](https://github.com/nakuliyer/andover-athenaeum/blob/master/documentation/Writing%20for%20Athenaeum.md)
2. If you follow that document, you should be able to create a folder for each article with **some unique name** that contains all the images. There should be an `article.txt` in that folder with the text, styling info, bio, etc. This step does take a long time.
3. All those folders go under `/articles` in this repo. **Everything** in articles is reachable by URL at `https://www.andoverathenaeum.com/article.html?desc=[INSERT UNIQUE NAME]`. So every once in a while, really old outdated articles can be removed from here, but that means that URL will give 404 forever :(
4. Within `/articles`, there is a `list.txt`. This is actually the table of contents, so it should be modified each cycle so that relevant links are displayed when you click the "Latest Issue" button. Just follow the format there `NAME :: UNIQUE NAME (WHATEVER IT'S CALLED IN THE ARTICLES FOLDER)`.
5. With `/advertisements`, there is a `list.txt`. Any adverts should be images dumped in this folder. In `list.txt`, write all the adverts you want to show up like `IMAGE LINK | URL`.
6. Every time the board members change, make sure all the images in `/board-members` are up-to-date. Then edit `meet-the-board.html`. It should be pretty easy.
7. Every time there's a publication, make sure all the pdf gets inserted in `/archived-pdfs`. Then edit `archives.html`. Basically, whatever the latest issue is should be in that `<embed>` and `<object>` tag (with the correct headers above). Then just add links for all the older ones. This is for anyone who'd prefer the pdfs to the website :(
8. Push to the repo. This automatically updates the site, so don't do this until everything's good. Then make sure everything's set on [andoverathenaeum.com](https://www.andoverathenaeum.com) ofc

**For editing Code**

Everything is basically in the js files in `/scripts/` then run when the website loads up. Should be pretty easy to modify `/styles/` based on inspect-element -- you'll mostly want to edit `basic.css`.

---

## Authors
* Nakul Iyer '20, email: nakulpiyer@gmail.com
