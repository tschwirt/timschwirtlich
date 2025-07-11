import {
  bio,
  projects,
  achievements,
  education,
  experience,
  footer,
} from "./user-data/data.js";

import { URLs } from "./user-data/urls.js";

const { medium, gitConnected, gitRepo } = URLs;

const rootStyles = getComputedStyle(document.documentElement);
const gradientColor1 = rootStyles.getPropertyValue("--gradient-color1").trim();
const gradientColor2 = rootStyles.getPropertyValue("--gradient-color2").trim();

async function fetchBlogsFromMedium(url) {
  try {
    const response = await fetch(url);
    const { items } = await response.json();
    populateBlogs(items, "blogs");
  } catch (error) {
    throw new Error(
      `Error in fetching the blogs from Medium profile: ${error}`
    );
  }
}

async function fetchReposFromGit(url) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    populateRepo(items, "repos");
  } catch (error) {
    throw new Error(`Error in fetching the blogs from repos: ${error}`);
  }
}

async function fetchGitConnectedData(url) {
  try {
    const response = await fetch(url);
    console.log(response);
    const { basics } = await response.json();
    // populateBlogs(items, "blogs");
    mapBasicResponse(basics);
  } catch (error) {
    throw new Error(`Error in fetching the blogs from git connected: ${error}`);
  }
}

function mapBasicResponse(basics) {
  const {
    name,
    label,
    image,
    email,
    phone,
    url,
    summary,
    profiles,
    headline,
    blog,
    yearsOfExperience,
    username,
    locationAsString,
    region,
    karma,
    id,
    followers,
    following,
    picture,
    website,
  } = basics;

  // added title of page
  window.parent.document.title = name;
}

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach((item) => {
    const h3 = getElement("li", null);
    h3.innerHTML = item;

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3);

    const divAnimateBox = getElement("div", "col-md-12 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

function populateRepo(items, id) {
  const projectdesign = document.getElementById(id);
  const count = items.length; // Adjust this count based on the number of repos you want to display

  for (let i = 0; i < count; i++) {
    // Create elements for each repo card
    const repoCard = document.createElement("div");
    repoCard.className = "repo-card";
    repoCard.style = `
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          padding: 16px;
          font-size: 14px;
          background: linear-gradient(135deg, ${gradientColor1}, ${gradientColor2});
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          min-height: 150px;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
      `;

    // Make the card clickable by wrapping the content inside an anchor tag
    const repoLink = document.createElement("a");
    repoLink.href = items[i].link;
    repoLink.target = "_blank";
    repoLink.style =
      "text-decoration: none; color: black; display: block; height: 100%;";

    repoCard.appendChild(repoLink);

    // Repository name
    const repoName = document.createElement("h4");
    repoName.className = "repo-heading";
    repoName.innerHTML = items[i].title;
    repoName.style = "margin: 0; font-size: 18px; font-weight: bold;";
    repoLink.appendChild(repoName);

    // Subtitle
    const subtitleEle = document.createElement("p");
    subtitleEle.className = "repo-subtitle";
    subtitleEle.innerHTML = items[i].subtitle;
    subtitleEle.style = "margin: 0 0 12px; font-size: 12px; color: #555;";
    repoLink.appendChild(subtitleEle);

    // Repository description
    const repoDescription = document.createElement("p");
    repoDescription.className = "repo-description";
    repoDescription.innerHTML = items[i].details;
    repoDescription.style = "margin-top: 8px; font-size: 12px; color: #555;";
    repoLink.appendChild(repoDescription);

    // Stats row (Language, Stars, Forks)
    const statsRow = document.createElement("div");
    statsRow.style = `
          display: flex; 
          align-items: center; 
          gap: 16px; 
          margin-top: 12px; 
          font-size: 12px; 
          color: #666;
      `;

    // Language
    if (items[i].language) {
      const languageDiv = document.createElement("div");
      languageDiv.style = "display: flex; align-items: center; gap: 4px;";
      languageDiv.innerHTML = `
          <span style="width: 8px; height: 8px; background-color: #666; border-radius: 50%; display: inline-block;"></span>
          ${items[i].language}
      `;
      statsRow.appendChild(languageDiv);
    }

    // Stars
    if (items[i].stars) {
      const starsDiv = document.createElement("div");
      starsDiv.style = "display: flex; align-items: center; gap: 4px;";
      starsDiv.innerHTML = `
          <img src="https://img.icons8.com/ios-filled/16/666666/star--v1.png" alt="Stars">
          ${items[i].stars}
      `;
      statsRow.appendChild(starsDiv);
    }

    // Forks
    if (items[i].forks) {
      const forksDiv = document.createElement("div");
      forksDiv.style = "display: flex; align-items: center; gap: 4px;";
      forksDiv.innerHTML = `
          <img src="https://img.icons8.com/ios-filled/16/666666/code-fork.png" alt="Forks">
          ${items[i].forks}
      `;
      statsRow.appendChild(forksDiv);
    }

    repoLink.appendChild(statsRow);

    // Categories (Tags)
    const categoriesDiv = document.createElement("div");
    categoriesDiv.style = "display: flex; gap: 8px; margin-top: 12px;";

    for (const category of items[i].tags) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.innerHTML = category;
      badge.style = `
              font-size: 12px;
              padding: 4px 8px;
              background-color: #007acc;
              color: white;
              border-radius: 4px;
          `;
      categoriesDiv.appendChild(badge);
    }

    repoLink.appendChild(categoriesDiv);

    // Add the repo card to the parent element
    projectdesign.appendChild(repoCard);
  }
}

function populateAchievements(items, id) {
  const projectdesign = document.getElementById(id);
  const count = 3; // Number of achievements to display

  for (let i = 0; i < items.length; i++) {
    // Create a wrapper for the achievements card
    const achievementCard = document.createElement("div");
    achievementCard.className = "achievement-card";
    achievementCard.style = `
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          padding: 16px;
          font-size: 14px;
          background: linear-gradient(135deg, ${gradientColor1}, ${gradientColor2});
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          min-height: 150px;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
      `;

    // Wrap the card content in an anchor tag
    const achievementLink = document.createElement("a");
    if (items[i].link && items[i].link !== "") {
      achievementLink.href = items[i].link;
      achievementLink.target = "_blank";
    }
    achievementLink.style = "text-decoration: none; color: black; display: block;";
    achievementCard.appendChild(achievementLink);

    // Achievement Title
    const achievementTitle = document.createElement("h4");
    achievementTitle.className = "achievement-heading";
    achievementTitle.innerHTML = items[i].title;
    achievementTitle.style = "margin: 0 0 8px; font-size: 18px; font-weight: bold;";
    achievementLink.appendChild(achievementTitle);

    // Subtitle
    const subtitleEle = document.createElement("p");
    subtitleEle.className = "achievement-subtitle";
    subtitleEle.innerHTML = items[i].subtitle;
    subtitleEle.style = "margin: 0 0 12px; font-size: 12px; color: #555;";
    achievementLink.appendChild(subtitleEle);

    // Achievement Description
    const achievementDescription = document.createElement("p");
    achievementDescription.className = "achievement-description";
    achievementDescription.innerHTML = items[i].details;
    achievementDescription.style = "margin: 0 0 12px; font-size: 12px; color: #000;";
    achievementLink.appendChild(achievementDescription);

    // Categories (Tags)
    const categoriesDiv = document.createElement("div");
    categoriesDiv.style = "display: flex; gap: 8px; margin-top: 12px;";

    for (const category of items[i].tags) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.innerHTML = category;
      badge.style = `
              font-size: 12px;
              padding: 4px 8px;
              background-color: #007acc;
              color: white;
              border-radius: 4px;
          `;
      categoriesDiv.appendChild(badge);
    }

    achievementLink.appendChild(categoriesDiv);

    // Append the achievement card to the container
    projectdesign.appendChild(achievementCard);
  }
}

function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);

  for (let i = 0; i < items.length; i++) {
    let spanTimelineSublabel = document.createElement("span");
    spanTimelineSublabel.className = "timeline-sublabel";
    spanTimelineSublabel.innerHTML = items[i].subtitle;

    let spanh2 = document.createElement("span");
    spanh2.innerHTML = items[i].duration;

    let h2TimelineLabel = document.createElement("h2");
    h2TimelineLabel.innerHTML = items[i].title;
    h2TimelineLabel.append(spanh2);

    let divTimelineLabel = document.createElement("div");
    divTimelineLabel.className = "timeline-label";
    divTimelineLabel.append(h2TimelineLabel);
    divTimelineLabel.append(spanTimelineSublabel);

    for (let j = 0; j < items[i].details.length; j++) {
      let pTimelineText = document.createElement("p");
      pTimelineText.className = "timeline-text";
      pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
      divTimelineLabel.append(pTimelineText);
    }

    let divTags = document.createElement("div");
    for (let j = 0; j < items[i].tags.length; j++) {
      let spanTags = document.createElement("span");
      spanTags.className = "badge";
      spanTags.innerHTML = items[i].tags[j];
      divTags.append(spanTags);
    }
    divTimelineLabel.append(divTags);

    let iFa = document.createElement("i");
    iFa.className = "fa fa-" + items[i].icon;

    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon color-2";
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon);
    divTimelineEntryInner.append(divTimelineLabel);

    let article = document.createElement("article");
    article.className = "timeline-entry animate-box";
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  }

  let divTimelineIcon = document.createElement("div");
  divTimelineIcon.className = "timeline-icon color-2";

  let divTimelineEntryInner = document.createElement("div");
  divTimelineEntryInner.className = "timeline-entry-inner";
  divTimelineEntryInner.append(divTimelineIcon);

  let article = document.createElement("article");
  article.className = "timeline-entry begin animate-box";
  article.append(divTimelineEntryInner);

  mainContainer.append(article);
}

function populateLinks(items, id) {
  let footer = document.getElementById(id);

  items.forEach(function (item) {
    if (item.label !== "copyright-text") {
      let span = document.createElement("span");
      span.className = "col";

      let p = document.createElement("p");
      p.className = "col-title";
      p.innerHTML = item.label;
      span.append(p);

      let nav = document.createElement("nav");
      nav.className = "col-list";

      let ul = document.createElement("ul");
      item.data.forEach(function (data) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        if (data.link) {
          a.href = data.link;
          a.target = "_blank";
        }
        if (data.func) {
          a.setAttribute("onclick", data.func);
        }
        a.innerHTML = data.text;

        li.append(a);
        ul.append(li);
      });
      nav.append(ul);
      span.append(nav);
      footer.append(span);
    }

    if (item.label === "copyright-text") {
      let div = document.createElement("div");
      div.className = "copyright-text no-print";
      item.data.forEach(function (copyright) {
        let p = document.createElement("p");
        p.innerHTML = copyright;
        div.append(p);
      });
      footer.append(div);
    }
  });
}

function getElement(tagName, className) {
  let item = document.createElement(tagName);
  item.className = className;
  return item;
}

function getBlogDate(publishDate) {
  const elapsed = Date.now() - Date.parse(publishDate);

  // Time conversions in milliseconds
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  if (elapsed < msPerMinute) {
    const seconds = Math.floor(elapsed / msPerSecond);
    return `${seconds} seconds ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.floor(elapsed / msPerMinute);
    return `${minutes} minutes ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.floor(elapsed / msPerHour);
    return `${hours} hours ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.floor(elapsed / msPerDay);
    return days == 1 ? `${days} day ago` : `${days} days ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.floor(elapsed / msPerMonth);
    return months == 1 ? `${months} month ago` : `${months} months ago`;
  } else {
    const years = Math.floor(elapsed / msPerYear);
    return years == 1 ? `${years} year ago` : `${years} years ago`;
  }
}

populateBio(bio, "bio");
populateAchievements(achievements, "achievements");
populateRepo(projects, "projects");

// populateSkills(skills, "skills");

// fetchBlogsFromMedium(medium);
// fetchReposFromGit(gitRepo);
// fetchGitConnectedData(gitConnected);

populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");

populateLinks(footer, "footer");
