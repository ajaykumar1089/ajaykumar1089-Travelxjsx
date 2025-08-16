import React, { useEffect, useRef, useState } from "react";
import "./Status.css";

/**
 * Sample stories data
 */
const STORIES = [
  {
    id: 1,
    name: "Ava",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    items: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Liam",
    avatar: "https://images.unsplash.com/photo-1527980965255-7c6b70f1f2f1?q=80&w=400&auto=format&fit=crop",
    items: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Mia",
    avatar: "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=400&auto=format&fit=crop",
    items: [
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1455659754334-3710db5306d7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];

/**
 * Main App
 */
const App = () => {
  return (
    <div className="app">     
      <StoryList stories={STORIES} />
    </div>
  );
};

export default App;

/**
 * Story List (grid of circular avatars)
 */
const StoryList = ({ stories }) => {
  const [viewer, setViewer] = useState({
    open: false,
    storyIndex: 0,
    itemIndex: 0,
    progress: 0,
    paused: false,
  });

  // Track which stories already seen
  const [seen, setSeen] = useState(() => new Set());

  // Aggregate progress (for circle ring): 0–100 across ALL items in the active story
  const aggregatePercent = () => {
    if (!viewer.open) return 0;
    const total = stories[viewer.storyIndex].items.length;
    const pct = ((viewer.itemIndex + viewer.progress / 100) / total) * 100;
    return Math.max(0, Math.min(100, pct));
    // returns 0..100
  };

  const openViewer = (idx) => {
    setViewer({
      open: true,
      storyIndex: idx,
      itemIndex: 0,
      progress: 0,
      paused: false,
    });
  };

  const markSeenAndClose = (idx) => {
    setSeen((prev) => new Set(prev).add(stories[idx].id));
    setViewer((v) => ({ ...v, open: false, progress: 0 }));
  };

  return (
    <>
      <div className="story-grid">
        {stories.map((s, i) => {
          const isActive = viewer.open && viewer.storyIndex === i;
          const ringPct = isActive ? aggregatePercent() : seen.has(s.id) ? 100 : 0;

          return (
            <button
              key={s.id}
              className="story-btn"
              onClick={() => openViewer(i)}
              aria-label={`Open story by ${s.name}`}
              // ring uses conic-gradient progress
              style={{
                background: `conic-gradient(var(--accent) ${ringPct * 3.6}deg, var(--ring-bg) 0)`,
              }}
            >
              <img src={s.avatar} alt={s.name} className="story-avatar" />
              <span className="story-name">{s.name}</span>
            </button>
          );
        })}
      </div>

      {viewer.open && (
        <StoryViewer
          stories={stories}
          viewer={viewer}
          setViewer={setViewer}
          onFinish={() => markSeenAndClose(viewer.storyIndex)}
        />
      )}
    </>
  );
};

/**
 * Full-screen viewer with segmented progress and controls
 */
const StoryViewer = ({ stories, viewer, setViewer, onFinish }) => {
  const { storyIndex, itemIndex, progress, paused } = viewer;
  const story = stories[storyIndex];
  const total = story.items.length;

  const intervalRef = useRef(null);
  const DURATION = 3000; // ms per item
  const TICK = 50; // ms update

  // start/stop timer
  const startTimer = () => {
    stopTimer();
    intervalRef.current = setInterval(() => {
      setViewer((v) => {
        if (v.paused) return v;
        const nextProgress = Math.min(v.progress + (TICK / DURATION) * 100, 100);
        if (nextProgress >= 100) {
          // advance item or finish
          if (v.itemIndex < total - 1) {
            return { ...v, itemIndex: v.itemIndex + 1, progress: 0 };
          } else {
            stopTimer();
            onFinish();
            return { ...v, open: false };
          }
        }
        return { ...v, progress: nextProgress };
      });
    }, TICK);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyIndex]); // start when new story opens

  useEffect(() => {
    // restart timer when item index changes (fresh progress)
    stopTimer();
    startTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemIndex]);

  // Keyboard close/prev/next
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key.toLowerCase() === " ") togglePause();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewer]);

  const handleClose = () => {
    stopTimer();
    onFinish();
  };

  const togglePause = () => {
    setViewer((v) => ({ ...v, paused: !v.paused }));
  };

  const goNext = () => {
    setViewer((v) => {
      if (v.itemIndex < total - 1) {
        return { ...v, itemIndex: v.itemIndex + 1, progress: 0 };
      } else {
        stopTimer();
        onFinish();
        return { ...v };
      }
    });
  };

  const goPrev = () => {
    setViewer((v) => {
      if (v.itemIndex > 0) {
        return { ...v, itemIndex: v.itemIndex - 1, progress: 0 };
      }
      return v;
    });
  };

  return (
    <div className="viewer" onClick={togglePause}>
      {/* Segmented progress bars on top */}
      <div className="segments">
        {story.items.map((_, i) => (
          <div className="seg" key={i}>
            <div
              className="seg-fill"
              style={{
                width:
                  i < itemIndex ? "100%" : i === itemIndex ? `${progress}%` : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="viewer-header">
        <div className="viewer-user">
          <div
            className="viewer-ring"
            style={{
              background: `conic-gradient(var(--accent) ${
                ((itemIndex + progress / 100) / total) * 360
              }deg, var(--ring-bg) 0)`,
            }}
          >
            <img src={story.avatar} alt={story.name} className="viewer-avatar" />
          </div>
          <div className="viewer-meta">
            <div className="viewer-name">{story.name}</div>
            <div className="viewer-sub">{paused ? "Paused" : "Playing"}</div>
          </div>
        </div>

        <button className="close-btn" onClick={(e) => { e.stopPropagation(); handleClose(); }}>
          ✕
        </button>
      </div>

      {/* Image area */}
      <div className="viewer-stage">
        <img
          src={story.items[itemIndex]}
          alt={`Story ${story.name} ${itemIndex + 1}`}
          className={`viewer-image ${paused ? "paused" : ""}`}
          draggable="false"
        />
        {/* Click zones for prev/next (don’t bubble to toggle pause) */}
        <div className="zone zone-left" onClick={(e) => { e.stopPropagation(); goPrev(); }} />
        <div className="zone zone-right" onClick={(e) => { e.stopPropagation(); goNext(); }} />
      </div>

      {/* Footer hint */}
      <div className="viewer-footer">
        <span>Click anywhere to {paused ? "resume" : "pause"} • ←/→ to navigate • ESC to close</span>
      </div>
    </div>
  );
};
