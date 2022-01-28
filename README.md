# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Incomplete

## Project Description

- This project is intended to be a hub for my body of work in software development
- I want the website itself to be an honest reflection of my work, proficiency levels, and professional identity
- In this spirit, I aim to begin with a clean, responsive, and highly functional minimal interface
- As I develop greater profieciency and forge my professional identity I intend to continuously iterate this project

## Wireframes

- [Link](https://imgur.com/a/IuWd48i)

## Time/Priority Matrix 

- [Link](https://imgur.com/a/mVlvl1l)

#### MVP

- Semantic Markup [About/Projects/Contact/Nav]
- Grid Overlay w/ Flex containers
- Color/Font Selection
- JS Implementation
- Comment/Tidy Code

#### PostMVP 

- Embedded Email Form
- [Working with Github API](https://www.loginradius.com/blog/async/github-api/)
- Bootstrap

## Functional Components

- Navbar/Header
- Footer
- About Page
- Projects Page
- Contact Page
- CSS Grid overlay
- CSS Flexbox Containers for more precise arrangement
- Color Selection
- Font Selection
- Github API documentation
- Bootstrap documentation
- Research Embedding Google Forms

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Semantic Markup | H | 3hr | 4.5hr |
| Responsive Grid w/ Flex | H | 4hr | hr |
| Color/Font Selection | H | 2hr | hr |  
| JS Implementation| H | 4.5hr|  hr | 
| Comment Code| H | 2hr | hr|
| Total | H | 15.5hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Bootstrap | M | 4hr | hr | hr |
| Embedded Email Form | M | 2hr | hr |
| Github API | L | 5hr | hr |
| Total | H | 11hrs| hrs |

## Additional Libraries
- Bootstrap CSS : Layout/Responsive Design (Mobile First)
- JQuery : Used to provide functionality for toggle dark mode button
- MDN web docs : General Reference
- W3Schools : General Reference

## Code Snippet

I used the below function to add a toggle dark mode button to my site. 

```
$darkSwitch.on("click", function () {
    $page.toggleClass("dark");
    $nav.toggleClass("navbar-dark");
    $nav.toggleClass("bg-dark");
    $(".card").toggleClass("text-white");
    $(".card").toggleClass("bg-dark");
    $(".btn").toggleClass("btn-dark");
    $(".btn").toggleClass("btn-primary");
    // $(".card").toggleClass("mb-3");
    // text-white bg-dark mb-3
  })
```

## Issues and Resolutions

### Designing mobile first
- Using Bootstrap made this straightforward, helped shift my perspective to mobile-first

### Adding Dark Mode functionality
- Used color picker to identify visually pleasing dark mode colors
- Used jQuery to add toggle class functionality to the dark mode button
- Created CSS classes to apply the correct colors to the correct elements








