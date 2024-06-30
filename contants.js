var LINK_TYPES = {
  resume: "Resume",
  code: "Code",
  blogs: "Blogs",
  reading: "Reading",
  social: "Social"
}

var LINKS = {
  [LINK_TYPES.resume]: [
    { link: "https://www.linkedin.com/in/shreyansh-gupta0/", iconPath: "./assets/icons/icons8-linkedin-48x48.svg" },
    { link: "mailto:hello@shreyansh.simplelogin.com?subject=Requesting%20a%20copy%20of%20resume&body=%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%0AIf%20you%20want%20to%20look%20at%20the%20experience.%20Please%20check%20out%20my%20LinkedIn.%0A%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%0A%0AHi%2C%0A%0APlease%20send%20me%20a%20copy%20of%20your%20resume.%0A%0AName%20-%0ACompany%20-%0A", iconPath: "./assets/icons/iconmonstr-cv-1.svg" }
  ],
  [LINK_TYPES.code]: [
    { link: "https://github.com/shreyansh-g24", iconPath: "./assets/icons/icons8-github-48x48.svg" },
    // { link: "https://gitlab.com/shreyansh-gupta", iconPath: "./assets/icons/icons8-gitlab-48x48.svg" },
    { link: "https://www.hackerrank.com/profile/shreyanshgupta0", iconPath: "./assets/icons/hackerrank-4.svg" },
    { link: "https://leetcode.com/u/shreyansh_xyz/", iconPath: "./assets/icons/leetcode-svgrepo-com.svg" },
    { link: "https://www.codewars.com/users/shreyanshgupta22", iconPath: "./assets/icons/icons8-codewars-48x48.svg" },
    { link: "https://codepen.io/guptashreyansh", iconPath: "./assets/icons/icons8-codepen-48x48.svg" }
  ],
  [LINK_TYPES.blogs]: [
    { link: "https://shreyanshgupta.hashnode.dev/", iconPath: "./assets/icons/hashnode-icon-svgrepo-com.svg" },
    { link: "https://medium.com/@backslashzero", iconPath: "./assets/icons/icons8-medium-48x48.svg" }
  ],
  [LINK_TYPES.reading]: [
    { link: "https://shreyanshgupta.hashnode.dev/reading", iconPath: "./assets/icons/library-svgrepo-com.svg" }
  ],
  [LINK_TYPES.social]: [
    { link: "https://x.com/_backslashzero", iconPath: "./assets/icons/icons8-x-48x48.svg" }
  ]
}

var CLASSES = {
  jsLinksButton: "js-links-button",
  linksButton: "links-button",
  selected: "links-button-selected",
  jsLinksButtonsContainer: "js-links-buttons-container",
  jsLinksContainer: "js-links-container",
  profileLink: "profile-link",
  profileIcon: "profile-icon"
}

var ATTRIBUTES = {
  dataLinkType: "data-link-type"
}
