<p align="center">
  <h3 align="center"><img src="/public/assets/logo_300dpi.png" width="250px"></img></h3>

  <h1 align="center">
     Andover Athenaeum Codebase
  </h1>
</p>

This site is built with NextJS, React, and TailwindCSS. A complete understanding of those languages is not necessary to upload articles though.

## Uploading/Editing Articles

All static data, like articles, images, the table of contents, etc is in `/public`. There are four main folders here, `adverts`, `articles`, `authors`, and `pdfs`. Each one has a similar json file in it that's accessed dynamically by the javascript and populates the site with data.

Notes:
* `slug` in this case means the "url friendly" title. So just the alphanumeric characters in the title, lower-cased, with spaces as dashes.
* In the case of `adverts`, `pdfs`, and `authors`, `sources` contains raw image or pdf files that are referenced in the json. With `articles`, the names in the json are references to directories. The actual raw article is always called `article.md`. The folder contains any images used in the article.
* The first entry of `articles.json` is the one used in the latest view.
* `article.md` is a **Markdown** file. In general, articles can be written in HTML here.
    * One notable shortcut is that `<img src="/articles/sources/name/source.png" />` has been reduced to `<Image>source.png</Image>`, `<Image width:---px>source.png</Image>` or `<Image float:left|right>source.png</Image>`.
* Committing to master starts the deployment process. Under `andoverathenaeum@gmail.com`, go to this repo in Github -> Settings, the "Github Pages" section and type "www.andoverathenaeum.com" into the custom domains part.

## Dev

```bash
npm run dev
# or
yarn dev
```

## Authors
* Nakul Iyer '20, email: nakulpiyer@gmail.com
* Andrew Falcon '22, email: afalcon22@andover.edu
