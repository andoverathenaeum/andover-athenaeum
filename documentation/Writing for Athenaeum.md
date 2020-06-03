<p align="center">
  <h3 align="center"><img src="/img/logo_300dpi.png" width="250px"></img></h3>

  <h4 align="center">
     A Guide to Digitizing Articles for Andover Athenaeum
  </h4>
</p>

---

The Andover Athenaeum website has a system in place to upload articles to the website. This allows for creating website-specific layouts with minimal coding experience. Please note that correct spelling everywhere is crucial for this to work at all.

### Step 1: Create a folder with required files

Firstly, create a folder with some unique name for the article. I'll refer to this as the "article folder" for simplicity. Now, add an `article.txt` file in that folder. We'll edit that soon.

Next, we'll upload all images to that folder so that we can insert them in the text. **If the article has images**, this is most easily done by going to the google document and selecting `File >> Download >> Web Page (.html, zipped)`. Once you unzip that folder, there'll be an `images` subfolder containing the raw image files. Drag all of them into your article folder. **If you have an author headshot**, be sure to drag it into this folder too so it can be displayed on the side of the article.

### Step 2: Create the actual article

Now, open `article.txt`. If you care about the technology-side, this will mostly resemble html, but with special tags and formatting to make all articles have the same format (and so that styling changes can be made en masse).

Each article should start with something like this:
```
<Section>Feature</Section>
<Title>Pearson Hall</Title>
<Author>
  <Name>Jonathan Fu</Name>
  <Image>jonathanfu.png</Image>
  <Bio>Jonathan Fu is over 9000!</Bio>
</Author>
<Author>
  <Name>Alpha Beta</Name>
  <Image>alphabeta.png</Image>
  <Bio>He was named after Greek letters cuz lel.</Bio>
</Author>
<Author>
  <Name>Gamma Delta</Name>
  <Image>gammadelta.jpg</Image>
</Author>

```

This all just sets up the header and author panel of the page. You can list however many authors you want, and they'll all stack on the panel (and the "Author" header will get suffixed!). The `Bio` and `Image` tags are **optional**. Everything else here is mandatory though. Make sure the image ending (.jpg, .png, etc) matches what's in the folder of course.

Next comes the text. Something simple like this without any images
```
<Text>
Dear Amici (Friends),

Andover Athenaeum first arrived on a windy day in October. As Nakul Iyer ‘20 and I sat at one of the large tables running down the side of the second floor (near the Tang Institute), we discussed the new, ambitious idea that had just run through my head that morning: Phillips Academy’s First Classics Magazine! I...

A New Paragraph...

More New Paragraphs...

Wow this article is long...

Warmly,
Jonathan Fu (President/Editor-in-Chief)
</Text>
```
can pretty much be copy-pasted from the google document source and it'll be formatted properly. Everything that is gonna be a paragraph should be a single line here. Make an empty line between different articles.

But we can take advantage of a bunch of tags to make the document look more like the magazine! Again, if you care about the technology-side, you can actually use whatever html tags you want but it won't take advantage of our pre-existing stylesheet (and it'll go inside a `<p>` tag, so only use `<span>`s).

So far, the special tags I have are

* `<Image>source.jpg</Image>` creates an image. **By default**, the image forces all the text above or below it and becomes centered.
  * If you add `float:left` or `float:right` inside the `Image` tag (`<Image float:left>source.jpg</Image>`, for example) it'll push the image to the left or right side **and** wrap text around it (**!**).
  * If you care, you can edit the width by adding a `width:400px` or something like that. I think the default is `width:200px` if you don't do this.
  * Same thing for `padding`, if you want to mess around with the value of this. It'll make more or less space around the image.
  * Also, any image styling like `border-radius:15px` will work if you want to play around with this.
  * **Important!** You can add a **caption** to the image like `<Image>source.jpg<Caption>This is an image of Pearson Hall in 1912</Caption></Image>`. Everything will get styled nicely.
  * **Important!** If you want to have **multiple images centered and next to each other**, put them all inside a `<flex>...</flex>` tag. You can edit their widths but don't mess around with `float`. If you want images side-by-side **and** on the left or right side (i.e. text-wrapping), you don't need to use `flex`, just put the `<Image float:left/right>...</Image>` tags next to each other.
* `<h>...</h>` is for introductory stuff like talking about an alumni before you interview them.
* `<c>...</c>` will center anything inside it.
* `<em>...</em>` makes stuff italics. I think `<c><em>...</em></c>` is best for making Latin text stand out for in an interview article or something.
* `<big>...</big>` predictably makes stuff big. It's good for section headers within the article (like `<big>Introduction</big>`). If you're trying to make the layout like the magazine, everything that's bolded and increased in font to stand out could look like
```
<c><big>
<b>Favorite Latin Phrases:</b>
<em>
Semper ubi sub ubi
</em>
Translation: Always where under where
<em>
Tempus fugit cum ludum habes
</em>
Translation: Time flies when you are having fun
<b>A Favorite Classical Figure:</b>
My favorite figure as of now is Catullus because he always provides an amusing read.
</big>
</c>
```
* If you're article actually has links, use `<a href="link.com">Stuff that'll be displayed</a>` like html.
* You can put `<Columns>2</Columns>` at the **very top** of the txt file to split the text into multiple columns. Anything more than 2 columns looks pretty crammed though. And if you have a lot of images, 2 can be crammed too.



### Step 3: Upload the folder

For now, the article should be sent to whoever is in charge of this repository. If you put the article folder into the `articles` folder of this repository, it'll show up at the link `https://andoverathenaeum.com/article.html?desc=FOLDER_NAME_THAT_SHOULD_BE_UNIQUE`, or whatever base link you're using locally, so it can be referenced from there.
