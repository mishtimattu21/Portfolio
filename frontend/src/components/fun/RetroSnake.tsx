import { useCallback, useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

type Point = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const GRID = 16;
const TICK_MS = 130;
const HIGH_SCORE_KEY = "mishti-snake-high";

const DIR_DELTA: Record<Direction, Point> = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const OPPOSITE: Record<Direction, Direction> = {
  UP: "DOWN",
  DOWN: "UP",
  LEFT: "RIGHT",
  RIGHT: "LEFT",
};

const randomFood = (snake: Point[]): Point => {
  let spot: Point;
  do {
    spot = { x: Math.floor(Math.random() * GRID), y: Math.floor(Math.random() * GRID) };
  } while (snake.some((s) => s.x === spot.x && s.y === spot.y));
  return spot;
};

const initialSnake = (): Point[] => [
  { x: 8, y: 8 },
  { x: 7, y: 8 },
  { x: 6, y: 8 },
];

const RetroSnake = () => {
  const [snake, setSnake] = useState<Point[]>(initialSnake);
  const [food, setFood] = useState<Point>(() => randomFood(initialSnake()));
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem(HIGH_SCORE_KEY);
    return saved ? Number.parseInt(saved, 10) : 0;
  });
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);

  const directionRef = useRef<Direction>("RIGHT");
  const pendingDirRef = useRef<Direction | null>(null);
  const foodRef = useRef(food);

  foodRef.current = food;

  const resetGame = useCallback(() => {
    const startSnake = initialSnake();
    setSnake(startSnake);
    setFood(randomFood(startSnake));
    setDirection("RIGHT");
    directionRef.current = "RIGHT";
    pendingDirRef.current = null;
    setScore(0);
    setGameOver(false);
    setPaused(false);
    setStarted(true);
  }, []);

  const queueDirection = useCallback((next: Direction) => {
    const current = pendingDirRef.current ?? directionRef.current;
    if (OPPOSITE[next] === current) return;
    pendingDirRef.current = next;
  }, []);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (!started || gameOver || paused) return;

    const id = window.setInterval(() => {
      if (pendingDirRef.current) {
        setDirection(pendingDirRef.current);
        directionRef.current = pendingDirRef.current;
        pendingDirRef.current = null;
      }

      setSnake((prev) => {
        const dir = directionRef.current;
        const delta = DIR_DELTA[dir];
        const head = prev[0];
        const nextHead = {
          x: (head.x + delta.x + GRID) % GRID,
          y: (head.y + delta.y + GRID) % GRID,
        };

        if (prev.some((s) => s.x === nextHead.x && s.y === nextHead.y)) {
          setGameOver(true);
          return prev;
        }

        const currentFood = foodRef.current;
        const ate = nextHead.x === currentFood.x && nextHead.y === currentFood.y;
        const next = [nextHead, ...prev];
        if (!ate) next.pop();
        else {
          setScore((s) => {
            const updated = s + 10;
            setHighScore((h) => {
              if (updated > h) {
                localStorage.setItem(HIGH_SCORE_KEY, String(updated));
                return updated;
              }
              return h;
            });
            return updated;
          });
          setFood(randomFood(next));
        }
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(id);
  }, [started, gameOver, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el?.closest("input, textarea, select, [contenteditable='true']")) {
        return;
      }

      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === " " && !gameOver) {
        if (!started) resetGame();
        else setPaused((p) => !p);
        return;
      }
      if (gameOver && e.key === "Enter") {
        resetGame();
        return;
      }
      const map: Record<string, Direction> = {
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",
        w: "UP",
        s: "DOWN",
        a: "LEFT",
        d: "RIGHT",
      };
      const next = map[e.key];
      if (next) queueDirection(next);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameOver, started, resetGame, queueDirection]);

  const cells = Array.from({ length: GRID * GRID }, (_, i) => {
    const x = i % GRID;
    const y = Math.floor(i / GRID);
    const isHead = snake[0]?.x === x && snake[0]?.y === y;
    const isBody = snake.some((s, idx) => idx > 0 && s.x === x && s.y === y);
    const isFood = food.x === x && food.y === y;
    let cellClass = "snake-cell snake-cell--empty";
    if (isFood) cellClass = "snake-cell snake-cell--food";
    else if (isHead) cellClass = "snake-cell snake-cell--head";
    else if (isBody) cellClass = "snake-cell snake-cell--body";
    return <div key={`${x}-${y}`} className={cellClass} aria-hidden />;
  });

  return (
    <div className="snake-arcade">
      <div className="snake-hud">
        <div>
          <span className="snake-hud-label">SCORE</span>
          <span className="snake-hud-value">{String(score).padStart(4, "0")}</span>
        </div>
        <div>
          <span className="snake-hud-label">HIGH</span>
          <span className="snake-hud-value">{String(highScore).padStart(4, "0")}</span>
        </div>
        <div className="snake-hud-status">
          {!started && "PRESS SPACE TO START"}
          {started && paused && "PAUSED"}
          {started && gameOver && "GAME OVER — ENTER TO RETRY"}
          {started && !paused && !gameOver && "▶ PLAYING"}
        </div>
      </div>

      <div
        className="snake-board"
        style={{ gridTemplateColumns: `repeat(${GRID}, 1fr)` }}
        role="img"
        aria-label="Snake game board"
      >
        {cells}
      </div>

      <div className="snake-controls">
        <div className="snake-dpad">
          <button type="button" className="snake-btn snake-btn--dir" onClick={() => queueDirection("UP")} aria-label="Up">
            ▲
          </button>
          <div className="snake-dpad-mid">
            <button type="button" className="snake-btn snake-btn--dir" onClick={() => queueDirection("LEFT")} aria-label="Left">
              ◀
            </button>
            <button
              type="button"
              className="snake-btn snake-btn--action"
              onClick={() => {
                if (!started) resetGame();
                else if (gameOver) resetGame();
                else setPaused((p) => !p);
              }}
            >
              {gameOver ? "↻" : paused ? "▶" : "Ⅱ"}
            </button>
            <button type="button" className="snake-btn snake-btn--dir" onClick={() => queueDirection("RIGHT")} aria-label="Right">
              ▶
            </button>
          </div>
          <button type="button" className="snake-btn snake-btn--dir" onClick={() => queueDirection("DOWN")} aria-label="Down">
            ▼
          </button>
        </div>

        <div className="snake-side-actions">
          <button type="button" className="snake-btn snake-btn--reset" onClick={resetGame}>
            <RotateCcw size={12} />
            New game
          </button>
          <p className="snake-hint font-pixel text-[7px]">
            Arrows / WASD · Space pause · Wraps edges
          </p>
        </div>
      </div>
    </div>
  );
};

export default RetroSnake;
