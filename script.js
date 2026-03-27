// ========================================
// PAGE NAVIGATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize page
    initializeNavigation();
    populateContent();
    setupEventListeners();
});

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateToPage(page);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function navigateToPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// ========================================
// CONTENT DATA
// ========================================

const solutions = [
    {
        id: 1,
        title: "Peace",
        description: "Find inner peace and tranquility",
        image: "public/images/solution-peace.png"
    },
    {
        id: 2,
        title: "Courage",
        description: "Build strength and confidence",
        image: "public/images/solution-courage.png"
    },
    {
        id: 3,
        title: "Anxiety",
        description: "Overcome worries and stress",
        image: "public/images/solution-anxiety.png"
    },
    {
        id: 4,
        title: "Prayer",
        description: "Master the art of prayer",
        image: "public/images/solution-prayer.png"
    },
    {
        id: 5,
        title: "Love",
        description: "Understand true love",
        image: "public/images/solution-love.png"
    },
    {
        id: 6,
        title: "Finance",
        description: "Financial wisdom and growth",
        image: "public/images/solution-finance.png"
    },
    {
        id: 7,
        title: "Joy",
        description: "Experience lasting joy",
        image: "public/images/solution-joy.png"
    },
    {
        id: 8,
        title: "Growth",
        description: "Personal spiritual growth",
        image: "public/images/solution-growth.png"
    }
];

const books = [
    {
        id: 1,
        title: "The Power of Tongues",
        author: "Chris Oyakhilome D.Sc., D.D.",
        price: "$10",
        image: "public/images/the-power-of-tongues.webp"
    },
    {
        id: 2,
        title: "Praying the Right Way",
        author: "Chris Oyakhilome D.Sc., D.D.",
        price: "$10",
        image: "public/images/praying-the-right-way.webp"
    },
    {
        id: 3,
        title: "The Holy Spirit & You",
        author: "Chris Oyakhilome D.Sc., D.D.",
        price: "$10",
        image: "public/images/the-holy-spirit-and-you.webp"
    },
    {
        id: 4,
        title: "Rhapsody of Realities Vol. 5",
        author: "Chris Oyakhilome D.Sc., D.D.",
        price: "$10",
        image: "public/images/rhapsody-of-realities-topical-compendium-volume-5.webp"
    },
    {
        id: 5,
        title: "Prophecy: Understanding the Power",
        author: "Chris Oyakhilome D.Sc., D.D.",
        price: "$10",
        image: "public/images/prophecy-understanding-the-power.webp"
    }
];

const audioContent = [
    {
        id: 1,
        title: "SENT AS A WITNESS",
        date: "2026-03-01",
        day: "Sun 1st, March",
        image: "public/images/how-to-raise-children-in-these-times-2-min.webp"
    },
    {
        id: 2,
        title: "THE OUTWORKING OF THE WORD IN YOU",
        date: "2026-03-02",
        day: "Mon 2nd, March",
        image: "public/images/true-peace-and-joy-2.webp"
    },
    {
        id: 3,
        title: "GOD'S ALWAYS WATCHING",
        date: "2026-03-03",
        day: "Tue 3rd, March",
        image: "public/images/living-by-faith-square.webp"
    },
    {
        id: 4,
        title: "WE DON'T CLAP TO PRAISE GOD",
        date: "2026-03-04",
        day: "Wed 4th, March",
        image: "public/images/guidance-in-making-tough-decisions-square-min.webp"
    },
    {
        id: 5,
        title: "DON'T SPEAK AGAINST GOD",
        date: "2026-03-05",
        day: "Thu 5th, March",
        image: "public/images/valid-and-undeniable-reasons-to-stay-alive-square-min.webp"
    },
    {
        id: 6,
        title: "RIGHTEOUSNESS CONSCIOUSNESS",
        date: "2026-03-06",
        day: "Fri 6th, March",
        image: "public/images/courage-to-dare-the-impossible-square-min.webp"
    }
];

const testimonies = [
    {
        id: 1,
        name: "Sarah Johnson",
        date: "2 days ago",
        content: "The daily devotionals have transformed my spiritual journey. I feel more connected to my faith than ever before. Truly grateful for this platform!",
        avatar: "public/images/profile-avatar.png",
        likes: 245,
        comments: 18
    },
    {
        id: 2,
        name: "Michael Chen",
        date: "4 days ago",
        content: "Amazing community here. Found answers to questions I've been asking for years. Highly recommend to anyone seeking spiritual growth and guidance.",
        avatar: "public/images/profile-avatar.png",
        likes: 192,
        comments: 24
    },
    {
        id: 3,
        name: "Amara Williams",
        date: "1 week ago",
        content: "The audio teachings are incredible. I listen during my commute and it keeps me grounded throughout the day. Life-changing content!",
        avatar: "public/images/profile-avatar.png",
        likes: 318,
        comments: 31
    }
];

// ========================================
// POPULATE CONTENT
// ========================================

function populateContent() {
    populateSolutions();
    populateBooks();
    populateAudio();
    populateTestimonies();
}

function populateSolutions() {
    const container = document.getElementById('solutions-container');
    const fullContainer = document.getElementById('solutions-full');
    
    const html = solutions.map(solution => `
        <div class="solution-card">
            <img src="${solution.image}" alt="${solution.title}" loading="lazy">
            <h4>${solution.title}</h4>
            <p>${solution.description}</p>
        </div>
    `).join('');
    
    if (container) container.innerHTML = html;
    if (fullContainer) fullContainer.innerHTML = html;
}

function populateBooks() {
    const container = document.getElementById('books-container');
    const storeContainer = document.getElementById('store-container');
    
    const html = books.map(book => `
        <div class="book-card">
            <img src="${book.image}" alt="${book.title}" class="book-image" loading="lazy">
            <div class="book-content">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-price">${book.price}</div>
                <div class="book-actions">
                    <button class="btn btn-gold" onclick="buyBook('${book.id}')">Buy</button>
                </div>
            </div>
        </div>
    `).join('');
    
    if (container) container.innerHTML = html;
    if (storeContainer) storeContainer.innerHTML = html;
}

function populateAudio() {
    const container = document.getElementById('audio-container');
    const fullContainer = document.getElementById('audio-full-container');
    
    const html = audioContent.map(audio => `
        <div class="audio-item">
            <img src="${audio.image}" alt="${audio.title}" class="audio-thumbnail" loading="lazy">
            <div class="audio-content">
                <div class="audio-date">${audio.date}</div>
                <div class="audio-title">${audio.title}</div>
                <div class="audio-day">${audio.day}</div>
            </div>
            <button class="play-btn" onclick="playAudio('${audio.id}')">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
            </button>
        </div>
    `).join('');
    
    if (container) container.innerHTML = html;
    if (fullContainer) fullContainer.innerHTML = html;
}

function populateTestimonies() {
    const container = document.getElementById('testimonies-container');
    
    const html = testimonies.map(testimony => `
        <div class="testimony-card">
            <div class="testimony-header">
                <img src="${testimony.avatar}" alt="${testimony.name}" class="testimony-avatar" loading="lazy">
                <div class="testimony-meta">
                    <div class="testimony-name">${testimony.name}</div>
                    <div class="testimony-date">${testimony.date}</div>
                </div>
            </div>
            <p class="testimony-content">${testimony.content}</p>
            <div class="testimony-actions">
                <button class="testimony-action" onclick="likeTestimony('${testimony.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span>${testimony.likes}</span>
                </button>
                <button class="testimony-action" onclick="commentTestimony('${testimony.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>${testimony.comments}</span>
                </button>
                <button class="testimony-action" onclick="shareTestimony('${testimony.id}')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                </button>
            </div>
        </div>
    `).join('');
    
    if (container) container.innerHTML = html;
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Mute toggle for video
    const muteToggle = document.getElementById('mute-toggle');
    const video = document.getElementById('rhapsody-video');
    
    if (muteToggle && video) {
        muteToggle.addEventListener('click', () => {
            video.muted = !video.muted;
            updateMuteButton(muteToggle, video.muted);
        });
    }

    // Library tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Here you would filter content based on tab
        });
    });

    // Video load with HLS.js if available
    loadVideo();
}

function updateMuteButton(button, isMuted) {
    const svg = button.querySelector('svg');
    if (isMuted) {
        svg.innerHTML = '<line x1="23" y1="1" x2="1" y2="23"></line><path d="M11 5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7m4-12L3 9v6h4"></path>';
    } else {
        svg.innerHTML = '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="15.54" y1="8.46" x2="15.54" y2="15.54"></line>';
    }
}

function loadVideo() {
    const video = document.getElementById('rhapsody-video');
    if (!video) return;

    // Check if HLS.js is available
    if (typeof Hls !== 'undefined') {
        const hls = new Hls();
        hls.loadSource('https://test-streams.mux.dev/x36xhzz/x3 Lisboa.m3u8');
        hls.attachMedia(video);
    } else {
        // Fallback for direct video source
        console.log('[v0] HLS.js not available, using native video playback');
    }
}

// ========================================
// ACTION HANDLERS
// ========================================

function playAudio(audioId) {
    const audio = audioContent.find(a => a.id === parseInt(audioId));
    if (audio) {
        console.log('[v0] Playing:', audio.title);
        alert(`Now playing: ${audio.title}`);
    }
}

function buyBook(bookId) {
    const book = books.find(b => b.id === parseInt(bookId));
    if (book) {
        console.log('[v0] Buying book:', book.title);
        alert(`Added "${book.title}" to cart. Total: ${book.price}`);
    }
}

function likeTestimony(testimonyId) {
    console.log('[v0] Liked testimony:', testimonyId);
    alert('Thank you for your support!');
}

function commentTestimony(testimonyId) {
    console.log('[v0] Commenting on testimony:', testimonyId);
    alert('Comment feature coming soon!');
}

function shareTestimony(testimonyId) {
    const testimony = testimonies.find(t => t.id === parseInt(testimonyId));
    if (navigator.share && testimony) {
        navigator.share({
            title: 'Check out this testimony!',
            text: testimony.content,
            url: window.location.href
        });
    } else {
        console.log('[v0] Sharing testimony:', testimonyId);
        alert('Share this testimony!');
    }
}
