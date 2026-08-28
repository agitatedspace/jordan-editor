const WORK = {
  minecraft: [
    {
      id: "zwfuAnr-AVU",
      kind: "youtube",
      title: "Create FREE Add-On (MCPE) Bedrock Minecraft",
      channel: "Vatonage",
      credit: "Edit",
      aspect: "landscape",
    },
    {
      id: "VvYMY1NobCY",
      kind: "youtube",
      title: "Stonefactory | Minecraft Marketplace — Official Trailer",
      channel: "Vatonage",
      credit: "Edit",
      aspect: "landscape",
    },
    {
      id: "Bje-EvjPC4Q",
      kind: "youtube",
      title: "Furnaces & Chests | Minecraft Marketplace Add-On — Official Trailer",
      channel: "Vatonage",
      credit: "Edit",
      aspect: "landscape",
    },
  ],
  shorts: [
    {
      id: "F1aTz_3n4qw",
      kind: "youtube",
      title: "Why Are We Focusing on These Two Strategic Minerals?",
      channel: "M2i Global",
      credit: "Edit · full Shorts side of the channel",
      aspect: "portrait",
    },
    {
      id: "X-KYJw7Fkx0",
      kind: "youtube",
      title: "Ch.2 PART 2: Graphite’s Powerful Purpose",
      channel: "M2i Global",
      credit: "Edit · full Shorts side of the channel",
      aspect: "portrait",
    },
    {
      id: "qcG8FtIQrWk",
      kind: "youtube",
      title: "Ch.1 PART 1: Introduction to Gallium",
      channel: "M2i Global",
      credit: "Edit · full Shorts side of the channel",
      aspect: "portrait",
    },
    {
      id: "g_UHyO0D_sI",
      kind: "youtube",
      title: "Ch.3 PART 1: A Study in Contradictions",
      channel: "M2i Global",
      credit: "Edit · full Shorts side of the channel",
      aspect: "portrait",
    },
    {
      id: "I8goBFFUf8I",
      kind: "youtube",
      title: "Ch.5 PART 2 (Lithium): The Global Processing Gap",
      channel: "M2i Global",
      credit: "Edit · full Shorts side of the channel",
      aspect: "portrait",
    },
    {
      id: "QIrE_mTMzFM",
      kind: "youtube",
      title: "Ch.6 PART 2 (Titanium): Forging the Future",
      channel: "M2i Global",
      credit: "Edit · full Shorts side of the channel",
      aspect: "portrait",
    },
  ],
  longform: [
    {
      id: "XvsoIbwbX8k",
      kind: "youtube",
      title: "The INSANE Comeback of Minecraft Speedrunning",
      channel: "XL2",
      credit: "Edit · entire channel",
      aspect: "landscape",
    },
    {
      id: "Bds6VLOBzb0",
      kind: "youtube",
      title: "It Took South Korea 30 Years To Catch This Criminal | Lee Chun-Jae",
      channel: "Uncanny Archives",
      credit: "Edit + voiceover",
      aspect: "landscape",
    },
    {
      id: "4MtDTS5vKvI",
      kind: "youtube",
      title: "Season One Wrap Up — What’s Next?",
      channel: "M2i Global",
      credit: "Edit",
      aspect: "landscape",
    },
  ],
  commercial: [
    {
      id: "1wZrmsJEm7fZYpmPFTRxJv5cVAPH-qAA9",
      kind: "drive",
      title: "Rheem Product Launch",
      channel: "Rheem",
      credit: "Edit",
      aspect: "landscape",
    },
    {
      id: "13QIo9fEdX_9lArgLSborcG7R_SN4XJuu",
      kind: "drive",
      title: "Rheem Motion Graphic",
      channel: "Rheem",
      credit: "Edit",
      aspect: "portrait",
    },
    {
      id: "1CdVpLMc7DBOuX9dwizazxv8qygK6BfLI",
      kind: "drive",
      title: "Turtlecorn",
      channel: "BTCS",
      credit: "Edit · animated",
      aspect: "landscape",
    },
  ],
  ads: [
    {
      id: "1ppow9kyP3gEkqZXDPbXKQVCVS3s1qXsC",
      kind: "drive",
      title: "Why This Company Will Be Critical",
      channel: "",
      credit: "Edit · dramatic short",
      aspect: "portrait",
    },
    {
      id: "19c8ucpQLDThvh0MCWPzNQoNv6Qgq5MK8",
      kind: "drive",
      title: "Let’s 1v1",
      channel: "",
      credit: "Edit · sport short",
      aspect: "landscape",
    },
    {
      id: "1CrJr0LWR0BsCLtB5p6MbhCHJxldmvJZ9",
      kind: "drive",
      title: "Social Commentary Ad",
      channel: "",
      credit: "Edit",
      aspect: "portrait",
    },
    {
      id: "15eTSIThJ5j1nKAZ7fk_z7EcrFGZDdjIA",
      kind: "drive",
      title: "M2i Press Release",
      channel: "M2i Global",
      credit: "Edit · AI UGC",
      aspect: "portrait",
    },
    {
      id: "1rzqPQUczYGnt4-VDNTzDMvBBkp9Zt2Yd",
      kind: "drive",
      title: "Critical Minerals Industry News",
      channel: "M2i Global",
      credit: "Edit · AI UGC",
      aspect: "portrait",
    },
  ],
  story: [
    {
      id: "1rVVXjpp-54oYVP6NN5QmcgAVbUuOKxKE",
      kind: "drive",
      title: "Experimental Nonsense",
      channel: "",
      credit: "Edit · liminal music video",
      aspect: "landscape",
    },
    {
      id: "1d6hQBufU7gmAxmsd4rZODuT-x90BAGKa",
      kind: "drive",
      title: "Rosie’s Pink Shoe",
      channel: "",
      credit: "Edit · children’s",
      aspect: "landscape",
    },
  ],
};

const LANES = {
  minecraft: "Minecraft",
  shorts: "Shorts",
  longform: "Long form",
  commercial: "Commercial",
  ads: "Ads",
  story: "Story",
};

const player = document.getElementById("player");
const tape = document.getElementById("tape");
const gate = document.getElementById("gate");
const captionTitle = document.getElementById("caption-title");
const captionMeta = document.getElementById("caption-meta");
const watchOut = document.getElementById("watch-out");
const live = document.getElementById("live");
const localFile = window.location.protocol === "file:";

let seated = { lane: "minecraft", id: "zwfuAnr-AVU" };

function allCuts() {
  return Object.entries(WORK).flatMap(([lane, cuts]) =>
    cuts.map((cut, index) => ({ ...cut, lane, index }))
  );
}

function findCut(id) {
  return allCuts().find((cut) => cut.id === id);
}

function openHref(cut) {
  if (cut.kind === "drive") {
    return `https://drive.google.com/file/d/${cut.id}/view`;
  }
  return `https://youtu.be/${cut.id}`;
}

function driveFile(id) {
  return `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=t`;
}

function drivePreview(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}

function renderStrips() {
  for (const [lane, cuts] of Object.entries(WORK)) {
    const mount = document.querySelector(`[data-lane-frames="${lane}"]`);
    if (!mount) continue;
    mount.replaceChildren(
      ...cuts.map((cut, index) => {
        const link = document.createElement("a");
        link.className = "frame";
        link.href = openHref(cut);
        link.title = cut.title;
        link.dataset.id = cut.id;
        link.dataset.lane = lane;
        link.setAttribute("role", "listitem");
        const edge = String(index + 1).padStart(2, "0");
        link.innerHTML = `
          <span class="sprocket" aria-hidden="true"></span>
          <img src="assets/thumbs/${cut.id}.jpg" alt="" width="480" height="360">
          <span class="frame-meta">
            <span class="edge-no">${edge}</span>
            <span class="frame-title">${cut.title}</span>
          </span>
          <span class="sprocket sprocket-end" aria-hidden="true"></span>
        `;
        link.addEventListener("click", (event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
            return;
          }
          event.preventDefault();
          seat(cut.id);
        });
        return link;
      })
    );
  }
  markSeated();
}

function markSeated() {
  document.querySelectorAll(".frame").forEach((frame) => {
    const on = frame.dataset.id === seated.id;
    frame.classList.toggle("is-seated", on);
    frame.setAttribute("aria-current", on ? "true" : "false");
  });
  document.querySelectorAll(".film").forEach((film) => {
    film.classList.toggle("is-active", film.dataset.lane === seated.lane);
  });
}

function clearTape() {
  tape.pause();
  tape.removeAttribute("src");
  tape.load();
}

function youtubeEmbed(id) {
  const origin = localFile ? "" : `&origin=${encodeURIComponent(window.location.origin)}`;
  return `https://www.youtube.com/embed/${id}?rel=0${origin}`;
}

function showYoutube(cut) {
  clearTape();
  tape.hidden = true;
  player.hidden = false;
  player.title = cut.title;
  player.src = youtubeEmbed(cut.id);
  if (watchOut) {
    watchOut.hidden = false;
    watchOut.textContent = "Watch on YouTube";
    watchOut.href = `https://youtu.be/${cut.id}`;
  }
}

function showDrive(cut) {
  clearTape();
  player.hidden = true;
  player.removeAttribute("src");
  tape.hidden = false;
  tape.poster = `assets/thumbs/${cut.id}.jpg`;
  tape.title = cut.title;
  tape.src = driveFile(cut.id);
  if (watchOut) {
    watchOut.hidden = false;
    watchOut.textContent = "Open in Drive";
    watchOut.href = openHref(cut);
  }
  tape.onerror = () => {
    tape.hidden = true;
    clearTape();
    player.hidden = false;
    player.title = cut.title;
    player.src = drivePreview(cut.id);
  };
}

function seat(id, { silent = false } = {}) {
  const cut = findCut(id);
  if (!cut) return;
  const changed = cut.id !== seated.id;
  seated = { lane: cut.lane, id: cut.id };

  gate.dataset.aspect = cut.aspect;
  captionTitle.textContent = cut.title;
  captionMeta.textContent = [LANES[cut.lane], cut.credit, cut.channel]
    .filter(Boolean)
    .join(" · ");
  live.textContent = silent ? "" : `Seated: ${cut.title}`;
  markSeated();

  if (cut.kind === "drive") showDrive(cut);
  else showYoutube(cut);

  if (changed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gate.classList.remove("is-seating");
    void gate.offsetWidth;
    gate.classList.add("is-seating");
  }
}

function seatFromHash() {
  const hash = window.location.hash.replace("#", "");
  const laneMap = {
    "lane-minecraft": WORK.minecraft[0].id,
    "lane-shorts": WORK.shorts[0].id,
    "lane-longform": WORK.longform[0].id,
    "lane-commercial": WORK.commercial[0].id,
    "lane-ads": WORK.ads[0].id,
    "lane-story": WORK.story[0].id,
  };
  if (laneMap[hash]) seat(laneMap[hash], { silent: true });
}

document.querySelectorAll(".lanes a").forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").replace("#", "");
    const lane = id.replace("lane-", "");
    const first = WORK[lane]?.[0];
    if (first) seat(first.id);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
  if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
  const cuts = allCuts();
  const at = cuts.findIndex((cut) => cut.id === seated.id);
  if (at < 0) return;
  const next = event.key === "ArrowRight"
    ? cuts[(at + 1) % cuts.length]
    : cuts[(at - 1 + cuts.length) % cuts.length];
  seat(next.id);
  document.querySelector(`.frame[data-id="${next.id}"]`)?.focus();
});

if (localFile) {
  const note = document.createElement("p");
  note.className = "file-note";
  note.textContent = "YouTube previews need a real web address. Open this folder with a local server or host it — a file:// page is what throws Error 153.";
  document.querySelector(".table")?.prepend(note);
}

renderStrips();
seatFromHash();
window.addEventListener("hashchange", seatFromHash);
