# Bhoot

Theme for the Ghost blogging platform. Source code available at [https://github.com/arjunjain/bhoot](https://github.com/arjunjain/bhoot).

[![Preview](/screenshot-preview.png?raw=true)](/screenshot.png?raw=true)

## Installation

This theme works with **Ghost 0.4** or newer.

If you are using [Ghost.org](http://ghost.org)'s Pro platform, follow the instructions at [http://support.ghost.org/upload-theme-ghostpro/](http://support.ghost.org/upload-theme-ghostpro/).

If you are hosting your own Ghost installation, follow these steps:

1. Go to the [releases page](https://github.com/arjunjain/bhoot/releases/) and download a release.
2. If you are hosting your own Ghost installation, unzip the tarball file into `content/themes/`.
3. Restart Node. How you do this will depend on your actual server setup.
4. Login into your blog, go to `Settings` and pick up `Bhoot` from the `Theme` dropdown.

## Configuration

**You need to upload cover and logo images for your blog** or this theme will look extremely ugly! Seriously!

If you need to change some wording, etc. you can edit the files with `.hbs` extension. These are Handlebars templates and they contain:

- `default.hbs`: A wrapper for all the other templates.
- `index.hbs`: What gets rendered in the home
- `page.hbs`: What gets rendered when you are viewing a static page.
- `post.hbs`: What gets rendered when you are viewing a single post.
- `tag.hbs`: What gets rendered when you are filtering posts by tags.
- `author.hbs`: What gets rendered when you are filtering posts by author.
- `partials/header.hbs`: What gets rendered as the header and menu
- `partials/footer.hbs`: What gets rendered as the footer

## Changelog

### 1.0.X

- 1.0.0
    + First version.

## License

© 2014 Arjun Jain.

Source code released under the GPL v3.0 license. See `LICENSE` for details.

[Font Awesome](https://github.com/FortAwesome/Font-Awesome/) font (`assets/fonts/fontawesome-webfont.woff`) is licensed under the [SIL Open Font License 1.1](http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL). 
