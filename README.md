# [badaso-docs.uatech.co.id](https://badaso-docs.uatech.co.id/) 

This repo contains the website configuration and documentation powering the [Badaso docs](https://badaso-docs.uatech.co.id/).

## Contents

- [Getting started](#%EF%B8%8F-getting-started)
- [Overview](#-overview)
- [Website configuration](#-website-configuration)
- [Contributing](#-contributing)
- [License](#-license)

## ✈️ Getting started

### Prerequisites

1.  [Git](https://git-scm.com/downloads).
1.  [Node](https://nodejs.org/en/download/) _(version 12 or greater)_.
1.  [NPM](https://nodejs.org/en/download/) _(version 6.12 or greater)_.
1.  A fork of the repo _(for any contributions)_.
1.  A clone of the `badaso-documentation` repo.

### Installation

1.  `cd badaso-documentation` to go into the project root.
2.  `cd website` to go into the website portion of the project.
3.  `npm install` to install the website's workspace dependencies.

### Running locally

1.  `npm run start` to start the development server _(powered by [Docusaurus](https://v1.docusaurus.io/))_.
1.  `open http://localhost:3000/` to open the site in your favorite browser.

## 📖 Overview

If you would like to **_contribute an edit or addition to the docs,_** read through our [style guide](STYLEGUIDE.md) before you write anything. All our content is generated from markdown files you can find in the `docs` directory.

**_To edit the internals of how the site is built,_** you may want to get familiarized with how the site is built. The Badaso docs is a static site generated using [Docusaurus](https://v1.docusaurus.io). The website configuration can be found in the `website` directory. Visit the Docusaurus website to learn more about all the available configuration options.

### Directory Structure

The following is a high-level overview of relevant files and folders.

```
badaso-documentation/
├── docs/
│   ├── getting-started/
│   │   ├──  installation.md
│   │   └── ...
│   └── ...
└── website/
    ├── core/
    ├── pages/
    │   └── en/
    ├── static/
    │   ├── css/
    │   ├── img/
    │   └── js/
    ├── translated_docs/
    │   ├── id-ID
    │   │   ├──  version-1.0.0
    │   │   │   ├──  getting-started
    │   │   │   │   ├──  installation.md
    │   │   │   │   └── ...
    │   │   ├──  getting-started
    │   │   │   │──  installation.md
    ├── versioned_docs/
    │   ├── version-1.0.0
    │   └── ...
    ├── versioned_sidebars/
    │   ├── version-01.0.0-sidebars.json
    │   └── ...
    ├── siteConfig.js
    ├── package.json
    ├── sidebars.json
    └── versions.json
```

### Documentation sources

As mentioned above, the `docs` folder contains the source files for all of the docs in the Badaso docs. In most cases, you will want to edit the files within this directory. If you're adding a new doc or you need to alter the order the docs appear in the sidebar, take a look at the `sidebars.json` file in the `website` directory. The sidebars file contains a list of document ids that should match those defined in the header metadata (aka frontmatter) of the docs markdown files.

### Versioned docs

The Badaso docs is versioned to allow users to go back and see the API reference docs for any given release. A new version of the website is generally generated whenever there is a new Badaso release. When this happens, any changes made to the `docs` and `website/sidebars.json` files will be copied over to the corresponding location within `website/versioned_docs` and `website/versioned_sidebars`.

> **_Note:_** Do not edit the auto-generated files within `versioned_docs` or `versioned_sidebars` unless you are sure it is necessary. Edits made to older versions will not be propagated to newer versions of the docs.

Docusaurus keeps track of the list of versions for the site in the `website/versions.json` file. The ordering of the versions in this file should be in reverse chronological order.

## 🔧 Website configuration

The main config file for the website can be found at `website/siteConfig.js`. This file tells [Docusaurus how to build the website](https://v1.docusaurus.io/docs/en/site-config). Edits to this file are rarely necessary.

The `core` subdirectory contains JavaScript and React components that are the core part of the website.

The `src/pages` subdirectory contains the React components that make up the non-documentation pages of the site, such as the homepage.

The `src/theme` subdirectory contains the swizzled React components from the Docusaurus theme.

## 👏 Contributing

### Create a branch

1.  `git checkout master` from any folder in your local `badaso-documentation` repository.
1.  `git pull origin master` to ensure you have the latest main code.
1.  `git checkout -b the-name-of-my-branch` to create a branch.
    > replace `the-name-of-my-branch` with a suitable name, such as `update-animations-page`

### Make the change

1.  Follow the "[Running locally](#running-locally)" instructions.
1.  Save the files and check in the browser.
1.  Some changes may require a server restart to generate new files. (Pages in `docs` always do!)
1.  Edits to pages in `docs` will only be visible in the latest version of the documentation, called "Next", located under the `docs/next` path.

Visit **http://localhost:3000/docs/next/YOUR-DOCS-PAGE** to see your work.

> Visit http://localhost:3000/versions to see the list of all versions of the docs.

### Test the change

If possible, test any visual changes in all latest versions of the following browsers:

- Chrome and Firefox on the desktop.
- Chrome and Safari on mobile.

### Push it

1.  `git add -A && git commit -m "My message"` to stage and commit your changes.
    > replace `My message` with a commit message, such as `Fixed header logo on Android`
1.  `git push my-fork-name the-name-of-my-branch`
1.  Go to the [badaso-documentation repo](https://github.com/uasoft-indonesia/badaso-documentation) and you should see recently pushed branches.
1.  Follow GitHub's instructions.
1.  Describe briefly your changes (in case of visual changes, please include screenshots).
