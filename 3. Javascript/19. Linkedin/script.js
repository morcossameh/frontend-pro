const persons = [
  {
    name: "Bellinda Mesbah",
    profilePicture: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    title: "Software Engineer & AI Scientist | Building AI for Real-World"
  },
  {
    name: "Alex Rodriguez",
    profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    title: "Senior Product Manager at Microsoft | Ex-Google | Building the future of AI"
  },
  {
    name: "John Doe",
    profilePicture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    title: "Software Engineer at Meta"
  }
]


const posts = [
  {
    id: 0,
    person: persons[0],
    content: "<p><strong>You'll be working on:</strong></p><ul><li>FastAPI microservices for ERP application</li><li>Integrating proprietary LLMs and other machine learning applications</li><li>Third-party API integrations - logs, identity, payments, bookings etc.</li><li>Async orchestration, structured data extraction, and real-time APIs (WebSockets, queues, gRPC)</li><li>Working across PostgreSQL, Redis, and GCP with CI/CD pipelines</li></ul><p>This is not a training role. You'll own features, write and read production code, and be trusted to deliver fast. If you're not confident debugging your own bugs or navigating a codebase solo, don't apply.</p><p><strong>You should be able to:</strong></p><ul><li>Debug your own code and read others</li><li>Write clean, async-ready Python with proper type hints</li><li>Know basic commands of Git</li><li>Know REST deeply, including when not to use it</li></ul><p>You'll join a team of engineers who don't believe in fluff. Just commits, ownership, and results.</p><p>DM only if you can code. If you've built anything and you're proud of it (even a side project), send it over. Fresh grads welcome.</p>",
    reactions: [
      {
        type: "thumbs-up",
        count: 20
      },
    ],
    date: "2025-07-20",
    time: "12:50:30",
    comments: {
      numberOfComments: 1,
    },
    reposts: 2
  },
  {
    id: 1,
    person: persons[1],
    content: "<p>🚀 Excited to share that our team just launched a game-changing AI feature that's already improving productivity by 40% for our enterprise clients!</p><p><strong>Key achievements this quarter:</strong></p><ul><li>Successfully deployed machine learning models across 15+ markets</li><li>Reduced customer onboarding time from 2 weeks to 3 days</li><li>Achieved 98.5% uptime across all services</li><li>Led a cross-functional team of 12 engineers and designers</li></ul><p>Big thanks to my amazing team who made this possible. Innovation happens when talented people collaborate with a shared vision. 💪</p><p>What's next? We're exploring how generative AI can revolutionize user experiences in ways we never imagined. The future is incredibly exciting!</p><p>#ProductManagement #AI #Microsoft #Innovation #TeamWork</p>",
    reactions: [
      {
        type: "thumbs-up",
        count: 10
      },
      {
        type: "heart",
        count: 5
      },
      {
        type: "lightbulb",
        count: 2
      }
    ],
    date: "2025-01-20",
    time: "12:50:30",
    comments: {
      numberOfComments: 20,
    },
    reposts: 12
  }
]

function getDateString(date, time) {
  const now = new Date();
  const postDate = new Date(`${date} ${time}`);
  const diffTime = Math.abs(now - postDate);
  const diffSeconds = Math.floor(diffTime / 1000);
  const diffYears = Math.floor(diffSeconds / (60 * 60 * 24 * 365));
  const diffDays = Math.floor(diffSeconds / (60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffHours = Math.floor(diffSeconds / (60 * 60));
  const diffMinutes = Math.floor(diffSeconds / 60);

  if (diffYears >= 1) {
    return `${diffYears}y`;
  }
  if (diffMonths >= 1) {
    return `${diffMonths} ${diffMonths === 1 ? "month" : "months"} ago`;
  }
  if (diffDays >= 1) {
    return `${diffDays}d`;
  }
  if (diffHours >= 1) {
    return `${diffHours}h`;
  }
  if (diffMinutes >= 1) {
    return `${diffMinutes}m`;
  }
  if (diffSeconds >= 1) {
    return `${diffSeconds}s`;
  }
  return "just now";
}

function buildPostElement(post) {
  const draftPost = document.getElementById("draft-post")

  const newPost = draftPost.cloneNode(true)
  newPost.removeAttribute('id')

  const profilePicElement = newPost.querySelector(".profile-pic-small");
  profilePicElement.src = post.person.profilePicture;
  profilePicElement.alt = post.person.name;

  const personName = newPost.querySelector(".post-author-info h3")
  personName.textContent = post.person.name;

  const personTitle = newPost.querySelector(".post-author-info p")
  personTitle.textContent = post.person.title

  const postDate = newPost.querySelector(".post-time")
  postDate.textContent = getDateString(post.date, post.time)

  const postContent = newPost.querySelector(".post-content")
  postContent.innerHTML = post.content;

  const reactionsElement = newPost.querySelector(".reaction-count")
  for (const reaction of post.reactions) {
    const reactionIcon = document.createElement("span");
    reactionIcon.classList.add("fas", `fa-${reaction.type}`);
    reactionsElement.appendChild(reactionIcon)
  }

  const totalReactions = post.reactions.reduce((acc, curr) => acc + curr.count, 0);
  const totalReactionsSpan = document.createElement("span")
  totalReactionsSpan.textContent = totalReactions || "";
  reactionsElement.appendChild(totalReactionsSpan)

  // x comments • y reposts
  let commentsRepostsStr = ""
  if (post.comments.numberOfComments > 0) {
    commentsRepostsStr += `${post.comments.numberOfComments} comments`
  }
  if (post.comments.numberOfComments > 0 && post.reposts > 0) {
    commentsRepostsStr += " • "
  }
  if (post.reposts > 0) {
    commentsRepostsStr += `${post.reposts} reposts`
  }

  const commentsRepostsElement = newPost.querySelector(".comment-count")
  commentsRepostsElement.textContent = commentsRepostsStr

  if(!post.comments.numberOfComments && !post.reposts && !post.reactions.length) {
    const postEngElement = newPost.querySelector(".post-engagement")
    const engStatsElement = newPost.querySelector(".engagement-stats")
    postEngElement.removeChild(engStatsElement);

    const postEngActions = newPost.querySelector(".engagement-actions")
    postEngActions.style.borderTop = "none"
    postEngActions.style.paddingTop = "0px"
  }

  return newPost;
}

for (const post of posts) {
  // create post 
  const postElement = buildPostElement(post)


  // append post to container
  const container = document.querySelector(".posts-container")
  container.appendChild(postElement)
}


const postInputElement = document.querySelector(".post-input")

postInputElement.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    e.preventDefault();

    const content = postInputElement.value.trim()
    if (content === "") {
      return
    }

    const post = {
      id: posts.length + 1,
      person: persons[2],
      content: content,
      reactions: [],
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      comments: {
        numberOfComments: 0,
      },
      reposts: 0
    }

    posts.unshift(post)

    const postElement = buildPostElement(post)
    const container = document.querySelector(".posts-container")
    container.prepend(postElement)

    postInputElement.value = ""
  }
})

