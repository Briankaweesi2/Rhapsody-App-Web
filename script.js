// JavaScript for the devotional app
const lucide = window.lucide // Declare lucide variable
const Hls = window.Hls // Declare Hls variable

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons()

  // Initialize video player
  initializeVideo()

  // Populate articles
  populateArticles()

  // Populate solutions
  populateSolutions()

  // Populate books
  populateBooks()

  // Populate audio
  populateAudio()

  // Populate library
  populateLibrary()

  // Populate testimonies
  populateTestimonies()

  // Setup event listeners
  setupEventListeners()
})

function initializeVideo() {
  const video = document.getElementById("rhapsody-video")
  const videoSrc = "https://2nbyjxnbl53k-hls-live.5centscdn.com/RTV/59a49be6dc0f146c57cd9ee54da323b1.sdp/playlist.m3u8"

  if (Hls.isSupported()) {
    const hls = new Hls()
    hls.loadSource(videoSrc)
    hls.attachMedia(video)
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play()
    })
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = videoSrc
    video.addEventListener("loadedmetadata", () => {
      video.play()
    })
  }
}

function populateArticles() {
  const articles = [
    {
      id: 1,
      title: "Your Life Is The Real Message",
      date: "Mon, April 7th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Speaker",
    },
    {
      id: 2,
      title: "Building Faith Through Prayer",
      date: "Sun, April 6th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Prayer",
    },
    {
      id: 3,
      title: "Walking in God's Purpose",
      date: "Sat, April 5th 2020",
      image: "/placeholder.svg?height=80&width=80&text=Purpose",
    },
  ]

  const container = document.getElementById("articles-container")
  container.innerHTML = articles
    .map(
      (article) => `
        <div class="col-md-6 col-lg-4">
            <div class="bg-light rounded-3 p-4 h-100 cursor-pointer" style="transition: all 0.3s ease;">
                <div class="d-flex gap-3">
                    <img src="${article.image}" alt="Article thumbnail" class="rounded-2 flex-shrink-0" style="width: 60px; height: 60px; object-fit: cover;">
                    <div class="flex-grow-1">
                        <h4 class="h6 fw-semibold mb-2 text-truncate">${article.title}</h4>
                        <p class="small text-muted mb-0">${article.date}</p>
                    </div>
                </div>
                <i data-lucide="chevron-right" class="text-muted mt-3 float-end"></i>
            </div>
        </div>
    `,
    )
    .join("")

  // Reinitialize icons for new content
  lucide.createIcons()
}

function populateSolutions() {
  const solutions = [
    {
      id: 7,
      title: "Finding True Peace and Tranquility Joy",
      price: "$0.50",
      days: "5 Days",
      category: "Peace",
      image: "/images/true-peace-and-joy-2.webp",
    },
    {
      id: 8,
      title: "Courage to Dare the Impossible",
      price: "$0.50",
      days: "5 Days",
      category: "Hope",
      image: "/images/courage-to-dare-the-impossible-square-min.webp",
    },
    {
      id: 9,
      title: "How to Raise Children in These Times",
      price: "$0.50",
      days: "5 Days",
      category: "Family",
      image: "/images/how-to-raise-children-in-these-times-2-min.webp",
    },
    {
      id: 10,
      title: "Living By Faith",
      price: "$0.50",
      days: "5 Days",
      category: "Faith",
      image: "/images/living-by-faith-square.webp",
    },
    {
      id: 11,
      title: "Guidance in Making Tough Decisions",
      price: "$0.50",
      days: "5 Days",
      category: "Guidance",
      image: "/images/guidance-in-making-tough-decisions-square-min.webp",
    },
  ]

  const container = document.getElementById("solutions-container")
  container.innerHTML = solutions
    .map(
      (solution) => `
        <div class="solution-card bg-white rounded-3 p-4 border">
            <div class="d-flex flex-column gap-3">
                <img src="${solution.image}" alt="${solution.title}" class="rounded-2 w-100">
                <div>
                    <h4 class="h6 fw-semibold mb-3">${solution.title}</h4>
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <span class="badge bg-light text-dark border rounded-pill">${solution.category}</span>
                        <span class="text-muted">•</span>
                        <span class="text-muted small">${solution.days}</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="h5 fw-bold mb-0">${solution.price}</p>
                        <button class="btn btn-gold btn-sm rounded-3">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function populateBooks() {
  const books = [
    {
      id: 1,
      title: "The Power of Tongues",
      author: "By Chris Oyakhilome D.Sc., D.D.",
      image: "/images/the-power-of-tongues.webp",
      price: "$10",
    },
    {
      id: 2,
      title: "Praying The Right Way",
      author: "By Chris Oyakhilome",
      image: "/images/praying-the-right-way.webp",
      price: "$10",
    },
    {
      id: 3,
      title: "The Holy Spirit & You",
      author: "By Chris Oyakhilome",
      image: "/images/the-holy-spirit-and-you.webp",
      price: "$10",
    },
    {
      id: 4,
      title: "Rhapsody of Realities Topical Compendium Volume 5",
      author: "By Chris Oyakhilome, D.Sc. D.D",
      image: "/images/rhapsody-of-realities-topical-compendium-volume-5.webp",
      price: "$10",
    },
    {
      id: 5,
      title: "Prophecy Understanding The Power That Controls Your Future",
      author: "By Chris Oyakhilome",
      image: "/images/prophecy-understanding-the-power.webp",
      price: "$10",
    },
    {
      id: 6,
      title: "Now That You Are Born Again",
      author: "By Pastor Chris",
      image: "/placeholder.svg?height=120&width=80&text=Book1",
      price: "$10",
    },
    {
      id: 7,
      title: "The Power of Tongues",
      author: "By Pastor Chris",
      image: "/placeholder.svg?height=120&width=80&text=Book2",
      price: "$10",
    },
    {
      id: 8,
      title: "Your Rights in Christ",
      author: "By Pastor Chris",
      image: "/placeholder.svg?height=120&width=80&text=Book3",
      price: "$10",
    },
    {
      id: 9,
      title: "How to Receive a Miracle",
      author: "By Pastor Chris",
      image: "/placeholder.svg?height=120&width=80&text=Book4",
      price: "$10",
    },
  ]

  const container = document.getElementById("books-container")
  container.innerHTML = books
    .map(
      (book) => `
        <div class="book-card">
            <div class="mb-3">
                <img src="${book.image}" alt="${book.title}" class="rounded-3 w-100 border">
            </div>
            <h4 class="small fw-semibold mb-2 text-truncate">${book.title}</h4>
            <p class="small text-muted mb-2">${book.author}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="fw-bold mb-0">${book.price}</p>
                <button class="btn btn-gold btn-sm rounded-3">Buy</button>
            </div>
        </div>
    `,
    )
    .join("")
}

function populateAudio() {
  const audioItems = [
    {
      id: 1,
      title: "SENT AS A WITNESS",
      date: "2026-03-01",
      dayOfWeek: "Sun 1st, March",
      image: "/placeholder.svg?height=60&width=60&text=Audio1",
    },
    {
      id: 2,
      title: "THE OUTWORKING OF THE WORD IN YOU",
      date: "2026-03-02",
      dayOfWeek: "Mon 2nd, March",
      image: "/placeholder.svg?height=60&width=60&text=Audio2",
    },
    {
      id: 3,
      title: "GOD'S ALWAYS WATCHING",
      date: "2026-03-03",
      dayOfWeek: "Tue 3rd, March",
      image: "/placeholder.svg?height=60&width=60&text=Audio3",
    },
    {
      id: 4,
      title: "WE DON'T CLAP TO PRAISE GOD",
      date: "2026-03-04",
      dayOfWeek: "Wed 4th, March",
      image: "/placeholder.svg?height=60&width=60&text=Audio4",
    },
    {
      id: 5,
      title: "DON'T SPEAK AGAINST GOD",
      date: "2026-03-05",
      dayOfWeek: "Thu 5th, March",
      image: "/placeholder.svg?height=60&width=60&text=Audio5",
    },
    {
      id: 6,
      title: "RIGHTEOUSNESS CONSCIOUSNESS",
      date: "2026-03-06",
      dayOfWeek: "Fri 6th, March",
      image: "/placeholder.svg?height=60&width=60&text=Audio6",
    },
  ]

  const container = document.getElementById("audio-container")
  container.innerHTML = audioItems
    .map(
      (item) => `
        <div class="col-md-6">
            <div class="audio-item">
                <img src="${item.image}" alt="${item.title}" class="audio-thumbnail">
                <div class="flex-grow-1">
                    <p class="small text-muted mb-1">${item.date}</p>
                    <h5 class="small fw-semibold mb-1">${item.title}</h5>
                    <p class="small text-muted mb-0">${item.dayOfWeek}</p>
                </div>
                <button class="play-btn" onclick="playAudio('${item.title}')">
                    <i data-lucide="play" style="width: 18px; height: 18px;"></i>
                </button>
            </div>
        </div>
    `,
    )
    .join("")

  lucide.createIcons()
}

function populateLibrary() {
  const libraryItems = [
    {
      id: 1,
      title: "Now That You Are Born Again",
      author: "By Pastor Chris Oyakhilome D.Sc., D.D.",
      image: "/images/power-of-tongues.webp",
      price: "$10",
    },
  ]

  const container = document.getElementById("library-container")
  container.innerHTML = libraryItems
    .map(
      (item) => `
        <div class="col-12">
            <div class="library-item">
                <img src="${item.image}" alt="${item.title}" class="library-thumbnail">
                <div class="library-content">
                    <h5 class="library-title">${item.title}</h5>
                    <p class="library-author">${item.author}</p>
                    <p class="fw-bold mb-0">${item.price}</p>
                </div>
                <div class="d-flex gap-2">
                    <button class="library-action" onclick="downloadItem('${item.id}')">
                        <i data-lucide="download" class="me-1" style="width: 14px; height: 14px;"></i>
                        Download
                    </button>
                    <button class="library-action" onclick="shareItem('${item.id}')">
                        <i data-lucide="arrow-up-right" class="me-1" style="width: 14px; height: 14px;"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  lucide.createIcons()
}

function populateTestimonies() {
  const testimonies = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=45&width=45&text=Sarah",
      date: "2 days ago",
      content: "The daily devotionals have transformed my spiritual journey. I feel more connected to my faith than ever before. Truly grateful for this platform!",
      likes: 245,
      comments: 18,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=45&width=45&text=Michael",
      date: "4 days ago",
      content: "Amazing community here. Found answers to questions I've been asking for years. Highly recommend to anyone seeking spiritual growth and guidance.",
      likes: 192,
      comments: 24,
    },
    {
      id: 3,
      name: "Amara Williams",
      avatar: "/placeholder.svg?height=45&width=45&text=Amara",
      date: "1 week ago",
      content: "The audio teachings are incredible. I listen during my commute and it keeps me grounded throughout the day. Life-changing content!",
      likes: 318,
      comments: 31,
    },
  ]

  const container = document.getElementById("testimonies-container")
  container.innerHTML = testimonies
    .map(
      (testimony) => `
        <div class="col-md-6 col-lg-4">
            <div class="testimony-card">
                <div class="testimony-header">
                    <img src="${testimony.avatar}" alt="${testimony.name}" class="testimony-avatar">
                    <div class="testimony-meta">
                        <div class="testimony-name">${testimony.name}</div>
                        <div class="testimony-date">${testimony.date}</div>
                    </div>
                </div>
                <p class="testimony-content">${testimony.content}</p>
                <div class="testimony-actions">
                    <button class="testimony-action" onclick="likeTestimony('${testimony.id}')">
                        <i data-lucide="heart" style="width: 16px; height: 16px;"></i>
                        <span class="ms-1">${testimony.likes}</span>
                    </button>
                    <button class="testimony-action" onclick="commentTestimony('${testimony.id}')">
                        <i data-lucide="message-circle" style="width: 16px; height: 16px;"></i>
                        <span class="ms-1">${testimony.comments}</span>
                    </button>
                    <button class="testimony-action" onclick="shareTestimony('${testimony.id}')">
                        <i data-lucide="share-2" style="width: 16px; height: 16px;"></i>
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  lucide.createIcons()
}

function setupEventListeners() {
  // Mute toggle for video
  const muteToggle = document.getElementById("mute-toggle")
  const video = document.getElementById("rhapsody-video")
  let isMuted = true

  muteToggle.addEventListener("click", () => {
    isMuted = !isMuted
    video.muted = isMuted

    const icon = muteToggle.querySelector("i")
    icon.setAttribute("data-lucide", isMuted ? "volume-x" : "volume-2")
    lucide.createIcons()
  })

  // Tab switching for articles
  const tabButtons = document.querySelectorAll(".btn-link")
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all tabs
      tabButtons.forEach((tab) => {
        tab.classList.remove("active-tab")
        tab.classList.add("text-muted")
        tab.classList.remove("text-warning", "border-warning", "border-3")
      })

      // Add active class to clicked tab
      this.classList.add("active-tab")
      this.classList.remove("text-muted")
      this.classList.add("text-warning", "border-bottom", "border-warning", "border-3")
    })
  })
}

// Utility functions
function playAudio(title) {
  console.log("Playing: " + title)
  alert("Now playing: " + title)
}

function downloadItem(id) {
  console.log("Downloading item: " + id)
  alert("Item download started")
}

function shareItem(id) {
  if (navigator.share) {
    navigator.share({
      title: "Check out this resource!",
      text: "I found this amazing resource on Rhapsody.",
      url: window.location.href,
    })
  } else {
    alert("Share this item!")
  }
}

function likeTestimony(id) {
  console.log("Liked testimony: " + id)
  alert("Thank you for your support!")
}

function commentTestimony(id) {
  console.log("Commenting on testimony: " + id)
  alert("Comment feature coming soon!")
}

function shareTestimony(id) {
  if (navigator.share) {
    navigator.share({
      title: "Check out this testimony!",
      text: "I found this inspiring testimony on Rhapsody.",
      url: window.location.href,
    })
  } else {
    alert("Share this testimony!")
  }
}
