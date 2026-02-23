let jobs = [
  {
    id: 1,
    company: "Mobile Frist Crop",
    role: "React Native Developer",
    meta: "Remote • Full-time • $130,000 - $175,000",
    desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "NOT APPLIED",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    meta: "Los Angeles, CA • Part-time • $80,000 - $120,000",
    desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "NOT APPLIED",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    meta: "Boston, MA • Full-time • $125,000 - $165,000",
    desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "NOT APPLIED",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    role: "Data Visualization Specialist",
    meta: "Boston, MA • Full-time • $125,000 - $165,000",
    desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "NOT APPLIED",
  },
  {
    id: 5,
    company: "Innovation Labs",
    role: "UI/UX Engineer",
    meta: "Austin, TX • Full-time • $110,000 - $150,000",
    desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "NOT APPLIED",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    meta: "New York, NY • Full-time • $130,000 - $170,000",
    desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "NOT APPLIED",
  },
  {
    id: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    meta: "Remote • Full-time • $120,000 - $160,000",
    desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "NOT APPLIED",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    meta: "San Francisco, CA • Full-time • $130,000 - $175,000",
    desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "NOT APPLIED",
  },
];

// ====== State ======
let activeTab = "ALL";

// ====== Elements ======
const totalCountEl = document.getElementById("totalCount");
const interviewCountEl = document.getElementById("interviewCount");
const rejectedCountEl = document.getElementById("rejectedCount");
const tabCountRightEl = document.getElementById("tabCountRight");

const jobsContainer = document.getElementById("jobsContainer");

const tabAllBtn = document.getElementById("tabAll");
const tabInterviewBtn = document.getElementById("tabInterview");
const tabRejectedBtn = document.getElementById("tabRejected");

// ====== Helpers ======
function setActiveButton() {
  // Reset styles (simple)
  tabAllBtn.classList.remove("bg-blue-600", "text-white");
  tabInterviewBtn.classList.remove("bg-blue-600", "text-white");
  tabRejectedBtn.classList.remove("bg-blue-600", "text-white");

  tabAllBtn.classList.add("bg-white", "text-[#64748B]");
  tabInterviewBtn.classList.add("bg-white", "text-[#64748B]");
  tabRejectedBtn.classList.add("bg-white", "text-[#64748B]");

  // Active
  if (activeTab === "ALL") {
    tabAllBtn.classList.remove("bg-white", "text-[#64748B]");
    tabAllBtn.classList.add("bg-blue-600", "text-white");
  } else if (activeTab === "INTERVIEW") {
    tabInterviewBtn.classList.remove("bg-white", "text-[#64748B]");
    tabInterviewBtn.classList.add("bg-blue-600", "text-white");
  } else {
    tabRejectedBtn.classList.remove("bg-white", "text-[#64748B]");
    tabRejectedBtn.classList.add("bg-blue-600", "text-white");
  }
}

function getFilteredJobs() {
  if (activeTab === "ALL") return jobs;
  return jobs.filter((j) => j.status === activeTab);
}

function updateCounts() {
  const total = jobs.length;
  const interview = jobs.filter((j) => j.status === "INTERVIEW").length;
  const rejected = jobs.filter((j) => j.status === "REJECTED").length;

  totalCountEl.textContent = total;
  interviewCountEl.textContent = interview;
  rejectedCountEl.textContent = rejected;

  const filtered = getFilteredJobs().length;
  tabCountRightEl.textContent = `${filtered} Jobs`;
}

function badgeClass(status) {
  if (status === "INTERVIEW") return "bg-green-50 text-[#10B981]";
  if (status === "REJECTED") return "bg-red-50 text-[#EF4444]";
  return "bg-[#EEF4FF] text-[#002C5C]";
}

function renderJobs() {
  const list = getFilteredJobs();

  jobsContainer.innerHTML = list
    .map(
      (job) => `
      <div class="rounded-xl border border-gray-200 bg-white p-5 md:p-6">
        <div class="flex items-start justify-between gap-4">
          <div class="min-w-0">
            <h3 class="text-lg font-bold text-gray-800">${job.company}</h3>
            <p class="mt-1 text-[#64748B] text-[16px]">${job.role}</p>
            <p class="mt-3 text-[14px] text-[#64748B]">${job.meta}</p>

            <span class="mt-4 inline-block rounded-md px-4 py-2 text-[14px] font-bold ${badgeClass(job.status)}">
              ${job.status}
            </span>

            <p class="mt-4 text-[14px] text-[#323B49] leading-relaxed">
              ${job.desc}
            </p>

            <div class="mt-5 flex flex-wrap gap-3">
              <button data-action="interview" data-id="${job.id}"
                class="px-5 py-2 rounded-md border border-[#10B981] text-[#10B981] font-semibold text-sm hover:bg-green-50">
                INTERVIEW
              </button>

              <button data-action="rejected" data-id="${job.id}"
                class="px-5 py-2 rounded-md border border-[#EF4444] text-[#EF4444] font-semibold text-sm hover:bg-red-50">
                REJECTED
              </button>
            </div>
          </div>

          <div class="border border-slate-400 rounded-3xl p-2">
            <button data-action="delete" data-id="${job.id}">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      </div>
    `
    )
    .join("");
}

function renderAll() {
  setActiveButton();
  updateCounts();
  renderJobs();
}

// ====== Events ======
tabAllBtn.addEventListener("click", () => {
  activeTab = "ALL";
  renderAll();
});

tabInterviewBtn.addEventListener("click", () => {
  activeTab = "INTERVIEW";
  renderAll();
});

tabRejectedBtn.addEventListener("click", () => {
  activeTab = "REJECTED";
  renderAll();
});

// Event Delegation for buttons inside cards
jobsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = Number(btn.dataset.id);

  if (!action || !id) return;

  if (action === "delete") {
    jobs = jobs.filter((j) => j.id !== id);
  }

  if (action === "interview") {
    jobs = jobs.map((j) => (j.id === id ? { ...j, status: "INTERVIEW" } : j));
  }

  if (action === "rejected") {
    jobs = jobs.map((j) => (j.id === id ? { ...j, status: "REJECTED" } : j));
  }

  renderAll();
});

// ====== Init ======
renderAll();