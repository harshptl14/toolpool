# <center>**TOOL POOL**</center>

<img src="https://toolpool.ml/assets/posters/posterToolpool.jpg" alt="TOOLPOOL POSTER" />

<center><strong>One-Stop solution with all tools for your work</strong></center>
<br/>

# **Introduction**

**ToolPool** is a one-stop solution for your day to day needs. ToolPool contains various helper tools like, Image resizer, CSS generators, Social media tools, etc. It contains ample amount of tools in various categories like Text, Image, Development, etc.

This website is for everyone whether a normal person who just wants to compress an image or a developer who wants to generate CSS for his website.

The aim to build this website is to reduce the number of tabs open in your browser to do some tiny tasks. This tool will also lower your burden to find a tool from bookmarks that you saved years ago. Now, you just have to bookmark one website and done.

<details>
  <summary>How to use it?</summary>
    
  1. Head over to the [TOOLPOOL](toolpool.ml)
  2. Search for the tool you wanna use
  3. Most of the tools are user friendly so there won't be any confusion, still if you find them diffcult to use, we have provided a small desciption for every tool
</details>
<hr/>

## **Currently available tools**

<details>
    <summary>Text tools</summary>

1. Lorem-Ipsum generator
2. Case-Converter
3. Letter counter
4. Multiple Whitespace remover
5. Text to Binary and vice-versa
6. Unique words finder
</details>

<details>
    <summary>Image tools</summary>

1. Image Resizer
</details>

<details>
    <summary>Developer tools</summary>

1. CSS Box Shadow generator
</details>

<details>
    <summary>Color tools</summary>

1. Color code converter (Hex-RGBA)
</details>

<details>
    <summary>Social Media tools</summary>

1. Tweet generator
</details>
<br/>

# **Tech-Stack**

<center><img src="https://user-images.githubusercontent.com/58077762/152677367-907f88ae-794c-4f1a-85a9-ffa65dc03322.jpg" /></center>
<br/>

# **Quick Start**

Start developing locally.

### Step 1: Clone the repo

Fork the repository. then clone the repo locally by doing -

```sh
git clone https://github.com/harshptl14/toolpool.git
```

### Step 2: Install Dependencies

cd into the directory

```sh
cd TOOLPOOL
```

In the root folder do npm install.

```sh
npm install
```

### Step 3: Comment GA code

In `_app.js` comment out the Google analytics related code. Your `_app.js` should look like this,

<details>
<summary>_app.js</summary>

```javascript
import Layout from "../components/Layout";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
```

</details>
<br/>

#### And you are good to go

```sh
npm run dev
```
<br/>

##  What's inside?
A quick look at the folder structure of this project.
    
    .
    ├── components
    |   ├──HomeScreen
    |   ├──Toast
    |   ├──Tools
    |   |  ├──[CATEGORY-WISE FOLDERS]
    |   ├──ToolScreen
    ├──hooks
    ├──lib
    ├──pages
    ├──public
    ├──static
    |   ├──helpers
    |   ├──icons
    |   ├──toolDescriptions
    |   ├──utils
    ├──styles
    .

# **How can I contribute?**

We love your input. You can contribute to this project in many ways like,

- Raise an issue or bug
- Prapose or Create a new feature
- Improve the documentation
- Submitting a fix

<br/>

# **Support the project ♥**

We open-sourced almost everything we can, and we try to reply to everyone needing help using these tools. Obviously, this takes time. You can use this service for free.

However, if you are using this project and are happy with it or just want to encourage us to continue creating stuff, there are few ways you can do it :-

- Starring and sharing the project 🚀
- Buy us a kofi

[<a href="https://ko-fi.com/arshpatel"><img src="https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5c91bddac6c3aa6b3718fd86_kofisvglofo.svg" width="50" /></a>]()

<center>Made with 💚 on Earth</center>
