# Contributing to ToolPool

We love your input. You can contribute to this project in many ways like,

- Raise an issue or bug
- Prapose or Create a new feature
- Improve the documentation
- Submitting a fix

<br/>

# All Changes Happen Through Pull Requests

Pull requests are the best way to prapose any changes to the existing code or documentation. We actively welcome your pull requests.

1. Fork and clone the repo
2. Move to the branch you want to work
3. After doing all changes, submit a PR and ask for review.
4. Don't directly work in master branch, instead work in separate branch according to changes you want to prapose.

<br/>

# Contribution Guidelines

In ToolPool, tools are divided among various categories.

## Praposing new category/tool

1. If you want to prapose a whole new category/tool in ToolPool, first raise an issue for it from [here]()
2. Once everything is discussed and the category/tool is approved, we'll provide a new logo for category/tool
3. Then you can start working/coding on it.

<details>
<summary><strong>How to add new category in existing list?</strong></summary>

1. Create a new branch with `{categoryname}` _(ex. texttools)_ from master
2. Move to `.\static\utils\config.js`
3. In `config` map variable, find the `categoryList` and add the new category details (name, logo, id _(must be in camelCase)_, key _(increment according to last category in list)_ ) at the end according to below format.

```javascript
{
    name: "{CATEGORYNAME}",
    logo: "ADD ANY LOGO FOR JUST TESTING PURPOSE, WE'LL UPDATE THIS LATER",
    id: "{CATEGORYNAME} in camelCase",
    key:{INCREMENT ACCORDING TO LAST CATEGORY IN LIST}
}
```

4. In same `config` map, at the end add a key-value pair with key as **Category name in camelCase** and a list as value which will contain details of tools of that category._(see other category listed in map)_
5. After that move to `.\components\Tools\`
6. Create a new folder with category name in TitleCase
7. Inside that folder you can create folders for new tools

_Note: New category will get listed in `master` only after at least one tool is there(in working condition) for that category_

</details/>

<details>
<summary><strong>How to add new tool in existing category?</strong></summary>

1. Shift to category specific branch
2. Move to `.\static\utils\config.js`
3. In same `config` map, find the category key-value pair.
4. In that list of tools for that category, add details of the new tool.
5. Format of details,

   ```javascript
       {
           title:"{TOOLNAME}",
           desc:"{TOOL DESCRIPTION}",
           link:"tools/{CATEGORYNAME}/{TOOLNAME}",
           icon: "ADD ANY LOGO FOR JUST TESTING PURPOSE, WE'LL UPDATE THIS LATER",
           key:{INCREMENT ACCORDING TO LAST TOOL IN THAT CATEGORY}
       }

   ```

6. After that move to `.\components\Tools\{CATEGORYFOLDER}`
7. Create a new folder with tool name in TitleCase
8. Inside that folder you can code your tool
9. Move to `.static\utils\toolDescription\toolReadmes.js`
10. Create a new variable for your tool and provide detailed information in `markdown` format.
11. Now, move to `.\static\utils\toolComponentsList.js`
12. In `TOOLS` map, go to the desired category and a key-value pair for your new tool details in below format.

    ```javascript
    "{toolname}": {
        title: "{TOOLNAME}",
        component: <TOOLCOMPONENT />,
        url: "{CATEGORY}/{TOOLNAME}",
        description: "{1-LINE DESCRIPTION}.",
        icon: "ADD ANY LOGO FOR JUST TESTING PURPOSE, WE'LL UPDATE THIS LATER",
        readme: {README VARIABLE FOR YOUR TOOL},
        poster: "ADD ANY LINK FOR JUST TESTING PURPOSE, WE'LL UPDATE THIS LATER",
    },
    ```

_You can see other tools for reference_

</details/>

<details>
<summary><strong>How to style Toolpool</strong></summary>
  <br/>
To start with, the styles directory holds most of the properties of the design system. You can find common queries regarding the usage of the style system below.

1.  How to access colors based on Theme
    
    -   [Theme](https://github.com/harshptl14/toolpool/blob/new-tool/styles/theme.js) wraps the [whole app](https://github.com/harshptl14/toolpool/blob/new-tool/components/Layout.js), so it’s accessible throughout the application
        
        To access the theme, use this syntax
        
        ```jsx
        ${({ theme }) => theme.color};
        
        ```
        
        It will automatically detect the light/dark mode and gives the colors accordingly.
        
        [Theme.js](https://github.com/harshptl14/toolpool/blob/new-tool/styles/theme.js) contains the default color for the application for both light and dark modes respectively.
        
1.  How to access different custom component’s style
    
    -   To access rapidly used custom components, go through [styles/mixins.js](https://github.com/harshptl14/toolpool/blob/new-tool/styles/mixins.js)
        To access components, use this syntax
        
        ```jsx
        ${({ theme }) => theme.mixins.smallButton};
        
        ```
        
        If you will run into a situation, where it’s required to make components that will reuse in the future, then make sure to put them into the [mixins](https://github.com/harshptl14/toolpool/blob/new-tool/styles/mixins.js) folder.
        
3.  Want to change the default properties of a component?
    
    -   Use the component’s style from mixins.js, wrap with the custom component and overwrite the value that you want to change.
  
    
    ```jsx
    const StyledCustomizedButton = styled.button`
    ${({ theme }) => theme.mixins.smallButton};
    padding: 1em 2em;
    `;
    
    ```
</details>
<br/>

# Any contributions you make will be under the MIT Software License

In short, when you submit changes, your submissions are understood to be under the same MIT License that covers the project. Feel free to contact the maintainers if that's a concern.

# Report issues/bugs using GitHub's issues

We use GitHub issues to track public bugs. Report a bug by opening a new issue; it's that easy!

## Bug Reports

Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Share the snapshot, if possible.
- What actually happens
- What you expected would happen
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

# License

By contributing, you agree that your contributions will be licensed under its MIT License.
