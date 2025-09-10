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
