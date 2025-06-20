class GitHubProfileViewer {
  constructor() {
    this.apiUrl = "https://api.github.com/users";
    this.currentUser = null;
    this.initializeEventListeners();
    this.languageColors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      "C++": "#f34b7d",
      C: "#555555",
      "C#": "#239120",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Rust: "#dea584",
      Swift: "#ffac45",
      Kotlin: "#F18E33",
      Dart: "#00B4AB",
      HTML: "#e34c26",
      CSS: "#1572B6",
      Vue: "#4FC08D",
      React: "#61DAFB",
      Angular: "#DD0031",
      Shell: "#89e051",
      PowerShell: "#012456",
      Dockerfile: "#384d54",
      YAML: "#cb171e",
      JSON: "#292929",
      Markdown: "#083fa1",
    };
  }

  initializeEventListeners() {
    const searchBtn = document.getElementById("searchBtn");
    const usernameInput = document.getElementById("usernameInput");
    const suggestionBtns = document.querySelectorAll(".suggestion-btn");

    // Search button click
    searchBtn.addEventListener("click", () => this.handleSearch());

    // Enter key press in input
    usernameInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleSearch();
      }
    });

    // Suggestion buttons
    suggestionBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const username = btn.getAttribute("data-username");
        usernameInput.value = username;
        this.handleSearch();
      });
    });

    // Input validation
    usernameInput.addEventListener("input", (e) => {
      this.hideError();
    });
  }

  async handleSearch() {
    const username = document.getElementById("usernameInput").value.trim();

    if (!username) {
      this.showError("Please enter a GitHub username");
      return;
    }

    if (!/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(username)) {
      this.showError("Please enter a valid GitHub username");
      return;
    }

    this.setLoadingState(true);
    this.hideError();

    try {
      const userData = await this.fetchUserData(username);
      const reposData = await this.fetchUserRepos(username);

      this.currentUser = userData;
      this.displayProfile(userData);
      this.displayRepositories(reposData);
      this.showProfile();
    } catch (error) {
      this.handleError(error);
    } finally {
      this.setLoadingState(false);
    }
  }

  async fetchUserData(username) {
    const response = await fetch(`${this.apiUrl}/${username}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          "User not found. Please check the username and try again."
        );
      } else if (response.status === 403) {
        throw new Error("API rate limit exceeded. Please try again later.");
      } else {
        throw new Error("Failed to fetch user data. Please try again.");
      }
    }

    return await response.json();
  }

  async fetchUserRepos(username) {
    try {
      const response = await fetch(
        `${this.apiUrl}/${username}/repos?sort=stars&per_page=6`
      );

      if (!response.ok) {
        console.warn("Failed to fetch repositories");
        return [];
      }

      return await response.json();
    } catch (error) {
      console.warn("Error fetching repositories:", error);
      return [];
    }
  }

  displayProfile(user) {
    // Basic info
    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("avatar").alt = `${user.login}'s avatar`;
    document.getElementById("name").textContent = user.name || user.login;
    document.getElementById("username").textContent = `@${user.login}`;
    document.getElementById("bio").textContent = user.bio || "No bio available";

    // Meta information
    this.updateMetaItem("location", user.location, "fas fa-map-marker-alt");
    this.updateMetaItem("blog", user.blog, "fas fa-link", true);
    this.updateMetaItem(
      "twitter",
      user.twitter_username,
      "fab fa-twitter",
      true,
      "https://twitter.com/"
    );

    // Join date
    const joinDate = new Date(user.created_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    document.getElementById("joinDate").textContent = `Joined ${joinDate}`;

    // Profile link
    document.getElementById("profileLink").href = user.html_url;

    // Stats
    document.getElementById("publicRepos").textContent = this.formatNumber(
      user.public_repos
    );
    document.getElementById("followers").textContent = this.formatNumber(
      user.followers
    );
    document.getElementById("following").textContent = this.formatNumber(
      user.following
    );
    document.getElementById("publicGists").textContent = this.formatNumber(
      user.public_gists
    );
  }

  updateMetaItem(elementId, value, iconClass, isLink = false, linkPrefix = "") {
    const element = document.getElementById(elementId);
    const metaItem = element.closest(".meta-item");

    if (value) {
      metaItem.style.display = "flex";
      if (isLink) {
        element.textContent = value;
        element.href = linkPrefix + value;
      } else {
        element.textContent = value;
      }
    } else {
      metaItem.style.display = "none";
    }
  }

  displayRepositories(repos) {
    const container = document.getElementById("reposContainer");

    if (!repos || repos.length === 0) {
      container.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">
                    <i class="fas fa-code-branch" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
                    <p>No public repositories found</p>
                </div>
            `;
      return;
    }

    container.innerHTML = repos
      .map((repo) => this.createRepoCard(repo))
      .join("");

    // Add click listeners to repo cards
    container.querySelectorAll(".repo-card").forEach((card) => {
      card.addEventListener("click", () => {
        const url = card.getAttribute("data-url");
        window.open(url, "_blank");
      });
    });
  }

  createRepoCard(repo) {
    const updatedDate = new Date(repo.updated_at).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const languageColor = this.languageColors[repo.language] || "#8b949e";

    return `
            <div class="repo-card" data-url="${repo.html_url}">
                <div class="repo-header">
                    <a href="${
                      repo.html_url
                    }" class="repo-name" target="_blank" onclick="event.stopPropagation()">
                        ${repo.name}
                    </a>
                    <span class="repo-visibility">${
                      repo.private ? "Private" : "Public"
                    }</span>
                </div>
                
                ${
                  repo.description
                    ? `<p class="repo-description">${repo.description}</p>`
                    : ""
                }
                
                <div class="repo-stats">
                    ${
                      repo.language
                        ? `
                        <div class="repo-stat">
                            <span class="language-color" style="background-color: ${languageColor}"></span>
                            <span>${repo.language}</span>
                        </div>
                    `
                        : ""
                    }
                    
                    <div class="repo-stat">
                        <i class="fas fa-star"></i>
                        <span>${this.formatNumber(repo.stargazers_count)}</span>
                    </div>
                    
                    <div class="repo-stat">
                        <i class="fas fa-code-branch"></i>
                        <span>${this.formatNumber(repo.forks_count)}</span>
                    </div>
                    
                    <div class="repo-stat">
                        <i class="fas fa-clock"></i>
                        <span>${updatedDate}</span>
                    </div>
                </div>
            </div>
        `;
  }

  formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  }

  setLoadingState(isLoading) {
    const searchBtn = document.getElementById("searchBtn");
    const usernameInput = document.getElementById("usernameInput");

    if (isLoading) {
      searchBtn.classList.add("loading");
      searchBtn.disabled = true;
      usernameInput.disabled = true;
    } else {
      searchBtn.classList.remove("loading");
      searchBtn.disabled = false;
      usernameInput.disabled = false;
    }
  }

  showProfile() {
    const profileContainer = document.getElementById("profileContainer");
    profileContainer.classList.add("show");

    // Smooth scroll to profile
    setTimeout(() => {
      profileContainer.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  showError(message) {
    const errorElement = document.getElementById("errorMessage");
    const errorText = document.getElementById("errorText");

    errorText.textContent = message;
    errorElement.classList.add("show");

    // Auto hide after 5 seconds
    setTimeout(() => {
      this.hideError();
    }, 5000);
  }

  hideError() {
    const errorElement = document.getElementById("errorMessage");
    errorElement.classList.remove("show");
  }

  hideProfile() {
    const profileContainer = document.getElementById("profileContainer");
    profileContainer.classList.remove("show");
  }

  handleError(error) {
    console.error("Error:", error);
    this.showError(error.message);
    this.hideProfile();
  }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  new GitHubProfileViewer();
});

// Add some nice animations and interactions
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll(
    "button, .suggestion-btn, .repo-card"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)";
    });

    element.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;

      this.style.position = "relative";
      this.style.overflow = "hidden";
      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add CSS for ripple animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);
});
