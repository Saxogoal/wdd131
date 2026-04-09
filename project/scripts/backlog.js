// Hamburger menu
const menu = document.querySelector("#menu");
const navigation = document.querySelector(".nav-links");

// Game Achievements
const gameAchievements = [
    {
        name: "Hollow Knight",
        achievements: [
            {title: "Charmed", gamerScore: 5},
            {title: "Enchanted", gamerScore: 10},
            {title: "Blessed", gamerScore: 15},
            {title: "Protected", gamerScore: 5},
            {title: "Masked", gamerScore: 15},
            {title: "Soulful", gamerScore: 5},
            {title: "Worldsoul", gamerScore: 15},
            {title: "Falsehood", gamerScore: 5},
            {title: "Strength", gamerScore: 10},
            {title: "Test of Resolve", gamerScore: 5},
            {title: "Proof of Resolve", gamerScore: 10},
            {title: "Illumination", gamerScore: 5},
            {title: "Mortality", gamerScore: 10},
            {title: "Release", gamerScore: 5},
            {title: "Peace", gamerScore: 10},
            {title: "Honour", gamerScore: 5},
            {title: "Respect", gamerScore: 10},
            {title: "Obsession", gamerScore: 10},
            {title: "Execution", gamerScore: 5},
            {title: "Rivalry", gamerScore: 10},
            {title: "Attunement", gamerScore: 5},
            {title: "Awakening", gamerScore: 10},
            {title: "Ascension", gamerScore: 15},
            {title: "Grubfriend", gamerScore: 5},
            {title: "Metamorphosis", gamerScore: 15},
            {title: "Connection", gamerScore: 5},
            {title: "Hope", gamerScore: 15},
            {title: "Neglect", gamerScore: 5},
            {title: "Witness", gamerScore: 10},
            {title: "Purity", gamerScore: 10},
            {title: "Happy Couple", gamerScore: 10},
            {title: "Solace", gamerScore: 5},
            {title: "Void", gamerScore: 20},
            {title: "Teacher", gamerScore: 5},
            {title: "Watcher", gamerScore: 5},
            {title: "Beast", gamerScore: 5},
            {title: "Cartographer", gamerScore: 15},
            {title: "Completion", gamerScore: 50},
            {title: "Speed Completion", gamerScore: 50},
            {title: "Keen Hunter", gamerScore: 10},
            {title: "True Hunter", gamerScore: 15},
            {title: "Steel Soul", gamerScore: 50},
            {title: "Steel Heart", gamerScore: 50},
            {title: "Speedrun 1", gamerScore: 20},
            {title: "Speedrun 2", gamerScore: 50},
            {title: "Warrior", gamerScore: 5},
            {title: "Conqueror", gamerScore: 15},
            {title: "Fool", gamerScore: 20},
            {title: "The Hollow Knight", gamerScore: 30},
            {title: "Sealed Siblings", gamerScore: 30},
            {title: "Dream No More", gamerScore: 50},
            {title: "Passing of the Age", gamerScore: 15},
            {title: "Memory", gamerScore: 10},
            {title: "Dark Romance", gamerScore: 10},
            {title: "Grand Performance", gamerScore: 10},
            {title: "Ritual", gamerScore: 10},
            {title: "Banishment", gamerScore: 10},
            {title: "Brotherhood", gamerScore: 10},
            {title: "Inspiration", gamerScore: 10},
            {title: "Focus", gamerScore: 10},
            {title: "Soul & Shade", gamerScore: 10},
            {title: "Embrace the Void", gamerScore: 50},
            {title: "Pure Completion", gamerScore: 70}
        ]
    },
    {
        name: "Stardew Valley",
        achievements: [
            {title: "Greenhorn", gamerScore: 10},
            {title: "Cowpoke", gamerScore: 10},
            {title: "Homesteader", gamerScore: 20},
            {title: "Millionaire", gamerScore: 20},
            {title: "Legend", gamerScore: 50},
            {title: "A New Friend", gamerScore: 10},
            {title: "Best Friends", gamerScore: 20},
            {title: "The Beloved Farmer", gamerScore: 20},
            {title: "Cliques", gamerScore: 20},
            {title: "Networking", gamerScore: 20},
            {title: "Popular", gamerScore: 20},
            {title: "Full House", gamerScore: 40},
            {title: "D.I.Y.", gamerScore: 10},
            {title: "Artisan", gamerScore: 20},
            {title: "Craft Master", gamerScore: 50},
            {title: "Cook", gamerScore: 20},
            {title: "Sous Chef", gamerScore: 20},
            {title: "Gourmet Chef", gamerScore: 50},
            {title: "Polyculture", gamerScore: 40},
            {title: "Monoculture", gamerScore: 20},
            {title: "Full Shipment", gamerScore: 40},
            {title: "Fisherman", gamerScore: 10},
            {title: "Ol' Mariner", gamerScore: 10},
            {title: "Master Angler", gamerScore: 40},
            {title: "Mother Catch", gamerScore: 10},
            {title: "Treasure Trove", gamerScore: 10},
            {title: "A Complete Collection", gamerScore: 50},
            {title: "The Bottom", gamerScore: 10},
            {title: "A Distant Shore", gamerScore: 15},
            {title: "Gofer", gamerScore: 20},
            {title: "A Big Help", gamerScore: 20},
            {title: "Local Legend", gamerScore: 20},
            {title: "Joja Co. Member", gamerScore: 40},
            {title: "Protector of the Valley", gamerScore: 40},
            {title: "Mystery of Stardrops", gamerScore: 50},
            {title: "Singular Talent", gamerScore: 10},
            {title: "Master of 5 Ways", gamerScore: 20},
            {title: "Prairie King", gamerScore: 40},
            {title: "Fector's Challenge", gamerScore: 40},
            {title: "Perfection", gamerScore: 100},
            {title: "Well-Read", gamerScore: 15},
            {title: "Two Thumbs Up", gamerScore: 10},
            {title: "Blue Ribbon", gamerScore: 15},
            {title: "An Unforgettable Soup", gamerScore: 15},
            {title: "Good Neighbors", gamerScore: 15},
            {title: "Danger In The Deep", gamerScore: 20},
            {title: "Infinite Power", gamerScore: 30},
            {title: "Pure Completion", gamerScore: 50}
        ]
    },
    {
        name: "Halo 4",
        achievements: [
            {title: "Dawn", gamerScore: 10},
            {title: "Requiem", gamerScore: 10},
            {title: "Forerunner", gamerScore: 10},
            {title: "Infinity", gamerScore: 10},
            {title: "Reclaimer", gamerScore: 10},
            {title: "Shutdown", gamerScore: 10},
            {title: "Composer", gamerScore: 10},
            {title: "Midnight", gamerScore: 10},
            {title: "Wake up John", gamerScore: 20},
            {title: "I Need a Hero", gamerScore: 40},
            {title: "The Legend of 117", gamerScore: 70},
            {title: "Lone Wolf Legend", gamerScore: 90},
            {title: "Skullduggery", gamerScore: 15},
            {title: "Bropocalypse", gamerScore: 10},
            {title: "Bromageddon", gamerScore: 40},
            {title: "Contact the Domain", gamerScore: 10},
            {title: "Terminus", gamerScore: 50},
            {title: "Digging up the Past", gamerScore: 20},
            {title: "Midnight Launch", gamerScore: 20},
            {title: "This is my Rifle, this is my Gun", gamerScore: 20},
            {title: "Bros to the Close", gamerScore: 20},
            {title: "Mortardom", gamerScore: 20},
            {title: "Explore the Floor", gamerScore: 20},
            {title: "Give Him the Stick", gamerScore: 20},
            {title: "Chief, Smash!", gamerScore: 20}
        ]
    },
    {
        name: "Castle Crashers",
        achievements: [
            {title: "Traditional", gamerScore: 100},
            {title: "Animal Handler", gamerScore: 100},
            {title: "Melee Is Best", gamerScore: 75},
            {title: "Kay Eye Ess Ess", gamerScore: 75},
            {title: "Arena Master", gamerScore: 75},
            {title: "The Final Countdown", gamerScore: 75},
            {title: "Maximum Firepower", gamerScore: 50},
            {title: "The Traitor", gamerScore: 20},
            {title: "Deer Trainer", gamerScore: 20},
            {title: "Conscientious Objector", gamerScore: 20},
            {title: "Treasure Hunter", gamerScore: 20},
            {title: "Medic!", gamerScore: 10}
        ]
    },
    {
        name: "Hades",
        achievements: [
            {title: "Escaped Tartarus", gamerScore: 25},
            {title: "Escaped Asphodel", gamerScore: 25},
            {title: "Escaped Elysium", gamerScore: 25},
            {title: "Champion of Elysium", gamerScore: 30},
            {title: "Hold the Onions", gamerScore: 5},
            {title: "Is There No Escape?", gamerScore: 50},
            {title: "Weapon of Fate", gamerScore: 5},
            {title: "To Charon's Credit", gamerScore: 30},
            {title: "The Useless Trinket", gamerScore: 25},
            {title: "Skelly's Last Lamentations", gamerScore: 75},
            {title: "Something From Everyone", gamerScore: 25},
            {title: "Friends Forever", gamerScore: 50},
            {title: "Rare Collectible", gamerScore: 5},
            {title: "Complete Set", gamerScore: 25},
            {title: "Blood Bound", gamerScore: 5},
            {title: "Infernal Arms", gamerScore: 40},
            {title: "Blessed by the Gods", gamerScore: 15},
            {title: "Thanks, But No Thanks", gamerScore: 10},
            {title: "Tools of the Architect", gamerScore: 15},
            {title: "Arms Collector", gamerScore: 25},
            {title: "Grown Close", gamerScore: 25},
            {title: "Well Versed", gamerScore: 10},
            {title: "Day-or-Night Trader", gamerScore: 5},
            {title: "Home Makeover", gamerScore: 15},
            {title: "Had to Happen", gamerScore: 15},
            {title: "River Denizens", gamerScore: 10},
            {title: "Urge to Sing", gamerScore: 15},
            {title: "Nyx's Mirror", gamerScore: 25},
            {title: "Night and Darkness", gamerScore: 10},
            {title: "Chthonic Colleagues", gamerScore: 10},
            {title: "War-God's Bloodlust", gamerScore: 10},
            {title: "End to Torment", gamerScore: 10},
            {title: "Musician and Muse", gamerScore: 10},
            {title: "Divided by Death", gamerScore: 10},
            {title: "Dark Reflections", gamerScore: 10},
            {title: "Harsh Conditions", gamerScore: 30},
            {title: "Master of Arms", gamerScore: 30},
            {title: "Slashed Benefits", gamerScore: 10},
            {title: "Back to Work", gamerScore: 5},
            {title: "The Family Secret", gamerScore: 100},
            {title: "One for the Ages", gamerScore: 25},
            {title: "Well Stocked", gamerScore: 10},
            {title: "Thorn of Thanatos", gamerScore: 25},
            {title: "Haste of Hermes", gamerScore: 25},
            {title: "Death Dealer", gamerScore: 10},
            {title: "Friends in High Places", gamerScore: 5},
            {title: "Bad Call", gamerScore: 15},
            {title: "Skelly Slayer", gamerScore: 5},
            {title: "Three-Headed Boy", gamerScore: 5}
        ]
    }
];

// State
let backlog = JSON.parse(localStorage.getItem("backlog")) || [];
let activeGameIndex = null;

// Elements
const addGameBtn = document.querySelector("#addGameBtn");
const gameList = document.querySelector("#gameList");
const filterStatus = document.querySelector("#filterStatus");
const filterGenre = document.querySelector("#filterGenre");
const achievementSection = document.querySelector("#achievementSection");
const achievementGameName = document.querySelector("#achievementGameName");
const achievementInput = document.querySelector("#achievementInput");
const autocompleteList = document.querySelector("#autocompleteList");
const addAchievementBtn = document.querySelector("#addAchievementBtn");
const achievementProgress = document.querySelector("#achievementProgress");
const achievementList = document.querySelector("#achievementList");

// Add game to backlog
addGameBtn.addEventListener("click", () => {
    const title = document.querySelector("#gameTitle").value;
    const genre = document.querySelector("#gameGenre").value;
    const platform = document.querySelector("#gamePlatform").value;
    const status = document.querySelector("#gameStatus").value;
    const hours = document.querySelector("#hoursPlayed").value || 0;

    if (!title || !genre || !platform || !status) {
        alert("Please fill in all fields.");
        return;
    }

    // Check if game already in backlog
    const exists = backlog.find(g => g.title === title);
    if (exists) {
        alert(`${title} is already in your backlog.`);
        return;
    }

    const newGame = {
        title,
        genre,
        platform,
        status,
        hours: Number(hours),
        achievements: []
    };

    backlog.push(newGame);
    saveBacklog();
    renderGameList();

    // Reset form
    document.querySelector("#gameTitle").value = "";
    document.querySelector("#gameGenre").value = "";
    document.querySelector("#gamePlatform").value = "";
    document.querySelector("#gameStatus").value = "";
    document.querySelector("#hoursPlayed").value = "";
});

// Save backlog to localStorage
function saveBacklog() {
    localStorage.setItem("backlog", JSON.stringify(backlog));
}

// Render game list with filters
function renderGameList() {
    const statusFilter = filterStatus.value;
    const genreFilter = filterGenre.value;

    const filtered = backlog.filter(game => {
        const matchStatus = statusFilter === "all" || game.status === statusFilter;
        const matchGenre = genreFilter === "all" || game.genre === genreFilter;
        return matchStatus && matchGenre;
    });

    gameList.innerHTML = "";

    if (filtered.length === 0) {
        gameList.innerHTML = `<p class="hint">No games found. Add one above!</p>`;
        return;
    }

    filtered.forEach(game => {
        const realIndex = backlog.indexOf(game);
        const gameData = gameAchievements.find(g => g.name === game.title);
        const totalAch = gameData ? gameData.achievements.length : 0;
        const completedAch = game.achievements.length;
        const totalScore = gameData ? gameData.achievements.reduce((s, a) => s + a.gamerScore, 0) : 0;
        const earnedScore = gameData
            ? gameData.achievements
                .filter(a => game.achievements.includes(a.title))
                .reduce((s, a) => s + a.gamerScore, 0)
            : 0;

        const card = document.createElement("div");
        card.classList.add("game-card");
        card.innerHTML = `
            <div class="game-card-header">
                <span class="game-title">${game.title}</span>
                <span class="game-status status-${game.status.toLowerCase()}">${game.status}</span>
            </div>
            <div class="game-card-details">
                <span>🎮 ${game.platform}</span>
                <span>🏷️ ${game.genre}</span>
                <span>⏱️ ${game.hours}h</span>
                <span>🏆 ${completedAch}/${totalAch} | ${earnedScore}/${totalScore}G</span>
            </div>
            <div class="game-card-actions">
                <button class="btn-small btn-track" data-index="${realIndex}">Track Achievements</button>
                <button class="btn-small btn-delete" data-index="${realIndex}">Remove</button>
            </div>
        `;
        gameList.appendChild(card);
    });

    // Track achievements button
    document.querySelectorAll(".btn-track").forEach(btn => {
        btn.addEventListener("click", () => {
            activeGameIndex = Number(btn.dataset.index);
            openAchievementTracker();
        });
    });

    // Delete button
    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = Number(btn.dataset.index);
            backlog.splice(index, 1);
            if (activeGameIndex === index) {
                achievementSection.style.display = "none";
                activeGameIndex = null;
            }
            saveBacklog();
            renderGameList();
        });
    });
}

// Open achievement tracker for a specific game
function openAchievementTracker() {
    const game = backlog[activeGameIndex];
    const gameData = gameAchievements.find(g => g.name === game.title);

    achievementSection.style.display = "block";
    achievementGameName.textContent = game.title;
    achievementInput.value = "";
    autocompleteList.innerHTML = "";
    autocompleteList.classList.remove("open");

    updateAchievementDisplay();

    // Scroll to achievement section
    achievementSection.scrollIntoView({ behavior: "smooth" });
}

// Update achievement display
function updateAchievementDisplay() {
    const game = backlog[activeGameIndex];
    const gameData = gameAchievements.find(g => g.name === game.title);
    if (!gameData) return;

    const totalAch = gameData.achievements.length;
    const completedAch = game.achievements.length;
    const totalScore = gameData.achievements.reduce((s, a) => s + a.gamerScore, 0);
    const earnedScore = gameData.achievements
        .filter(a => game.achievements.includes(a.title))
        .reduce((s, a) => s + a.gamerScore, 0);

    achievementProgress.innerHTML = `
        <p>Achievements: <strong>${completedAch}/${totalAch}</strong> | Score: <strong>${earnedScore}/${totalScore}G</strong></p>
    `;

    achievementList.innerHTML = "";
    game.achievements.forEach(title => {
        const li = document.createElement("li");
        li.textContent = `✅ ${title}`;
        achievementList.appendChild(li);
    });
}

// Autocomplete input
achievementInput.addEventListener("input", () => {
    if (activeGameIndex === null) return;
    const game = backlog[activeGameIndex];
    const gameData = gameAchievements.find(g => g.name === game.title);
    const query = achievementInput.value.toLowerCase().trim();

    autocompleteList.innerHTML = "";

    if (!query || !gameData) {
        autocompleteList.classList.remove("open");
        return;
    }

    const matches = gameData.achievements.filter(ach =>
        ach.title.toLowerCase().includes(query) &&
        !game.achievements.includes(ach.title)
    );

    if (matches.length === 0) {
        autocompleteList.classList.remove("open");
        return;
    }

    matches.forEach(ach => {
        const li = document.createElement("li");
        li.textContent = ach.title;
        li.addEventListener("click", () => {
            achievementInput.value = ach.title;
            autocompleteList.classList.remove("open");
        });
        autocompleteList.appendChild(li);
    });

    autocompleteList.classList.add("open");
});

// Close autocomplete when clicking outside
document.addEventListener("click", (e) => {
    if (!e.target.closest(".autocomplete-wrapper")) {
        autocompleteList.classList.remove("open");
    }
});

// Add achievement button
addAchievementBtn.addEventListener("click", () => {
    if (activeGameIndex === null) return;
    const game = backlog[activeGameIndex];
    const gameData = gameAchievements.find(g => g.name === game.title);
    const input = achievementInput.value.trim();

    if (!input) return;

    const found = gameData.achievements.find(
        a => a.title.toLowerCase() === input.toLowerCase()
    );

    if (!found) {
        alert(`"${input}" is not a valid achievement for ${game.title}.`);
        return;
    }

    if (game.achievements.includes(found.title)) {
        alert(`"${found.title}" has already been added.`);
        return;
    }

    game.achievements.push(found.title);
    achievementInput.value = "";
    saveBacklog();
    updateAchievementDisplay();
    renderGameList();
});

// Filter controls
filterStatus.addEventListener("change", renderGameList);
filterGenre.addEventListener("change", renderGameList);

// Hamburger menu
menu.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menu.classList.toggle("open");
});

// Footer
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Initial render
renderGameList();