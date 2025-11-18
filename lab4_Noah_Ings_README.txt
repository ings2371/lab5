# Lab 5

* *Date Created*: 12/11/2025
* *Last Modification Date*: 17/11/2025
github: https://github.com/ings2371/lab5
https://git.cs.dal.ca/ings/csci-3172/-/tree/main/labs/lab5?ref_type=heads

## Authors

* Noah Ings - wk217008@dal.ca

## Sources Used

If in completing your lab / assignment / project you used any interpretation of someone else's code, then provide a list of where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

##test cases
*error page testing
tested different names in search bar on browser for pages that don't exist, the link went to the 404 page, so it worked.

*make sure page doesn't reload when going to other pages
tested to switch pages without reloading page, didn't work with direct links. So changed way to go to other pages. I decided to instead use Browser Router and Link to go to other pages so the page didn't reload


### footer.js

*Lines ## 5 & 6 ##*

```

bg-dark
text-light
```

The code above was created by adapting the code in [bootstrap](https://getbootstrap.com/docs/4.0/utilities/colors) as shown below: 

```
they are colors

```

- <!---How---> The code in [bootsrap](https://getbootstrap.com/docs/4.0/utilities/colors) was implemented by adding to those lines to change colors of items
- <!---Why---> [bootsrap](https://getbootstrap.com/docs/4.0/utilities/colors)'s Code was used because I wanted the style different
- <!---How---> [bootsrap](https://getbootstrap.com/docs/4.0/utilities/colors)'s Code was not modified but added to tags


### footer.js

*Lines ## 5 ##*

```

py-3
```

The code above was created by adapting the code in [bootstrap](https://getbootstrap.com/docs/4.0/utilities/spacing) as shown below: 

```
they are colors

```

- <!---How---> The code in [bootsrap](https://getbootstrap.com/docs/4.0/utilities/spacing) was implemented by combining information on the page to add margin/padding
- <!---Why---> [bootsrap](https://getbootstrap.com/docs/4.0/utilities/spacing)'s Code was used because I wanted the footer to look bigger and reach the bottom of the page when small
- <!---How---> [bootsrap](https://getbootstrap.com/docs/4.0/utilities/spacing)'s Code was modified by combining items together to get the margin/padding

### header.js

*Lines ## 13, 14 & 15 ##*

```

nav-link 
```

The code above was created by adapting the code in [bootstrap](https://getbootstrap.com/docs/4.0/components/navs) as shown below: 

```
they are colors

```

- <!---How---> The code in [bootsrap](https://getbootstrap.com/docs/4.0/components/navs) was implemented by adding to the Link tags
- <!---Why---> [bootsrap](https://getbootstrap.com/docs/4.0/components/navs)'s Code was used because I wanted a styling on Links 
- <!---How---> [bootsrap](https://getbootstrap.com/docs/4.0/components/navs)'s Code was not modified but added to Link tags


## Acknowledgments

* Thanks to w3schools that helped me with this
* and I used some of the exercises code
* for using removeItem(itemName) & getItem(itemName) you use in console