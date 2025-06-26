export class TextHeatReveal {
  constructor(canvas, imgSrc, options = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d", { willReadFrequently: true });
    this.W = canvas.width;
    this.H = canvas.height;

    this.settings = {
      res: options.resolution || 96,
      characters: options.characters || "GSAPHEATEFFECT!@#$%&*()_+",
      fontSize: options.fontSize || 10,
      fontFamily: options.fontFamily || "monospace",
      grid: {
        size: options.gridSize || 20,
        weight: options.textWeight || 1,
        contrast: options.contrast || 1.2,
        minBrightness: options.minBrightness || 0.25,
        textOpacity: options.textOpacity || 0.85,
      },
      effect: {
        strength: options.strength || 16.5,
        diffusion: options.diffusion || 0.92,
        decay: options.decay || 0.98,
        threshold: options.threshold || 0.04,
      },
      image: {
        brightness: options.imageBrightness || 1.2,
        contrast: options.imageContrast || 1.3,
      },
      scramble: {
        interval: options.scrambleInterval || 500,
        amount: options.scrambleAmount || 0.08,
      },
    };

    this.words = options.words || [
      "CREATE",
      "INSPIRE",
      "DESIGN",
      "IMAGINE",
      "VISION",
      "IDEA",
      "DREAM",
    ];

    this.heat = {
      current: new Float32Array(this.settings.res * this.settings.res).fill(0),
      active: false,
      maxValue: 0,
      mousePosition: null,
    };

    this.initElements();
    this.loadImage(imgSrc);
    this.container = document.getElementById("canvas-container");
  }

  initElements() {
    this.coverCanvas = document.createElement("canvas");
    this.coverCanvas.width = this.W;
    this.coverCanvas.height = this.H;
    this.coverCtx = this.coverCanvas.getContext("2d");

    this.staticCanvas = document.createElement("canvas");
    this.staticCanvas.width = this.W;
    this.staticCanvas.height = this.H;
    this.staticCtx = this.staticCanvas.getContext("2d");

    this.charGrid = [];
    this.lowPerformanceMode = false;
    this.staticRendered = false;
  }

  loadImage(src) {
    this.img = new Image();
    this.img.crossOrigin = "anonymous";
    this.img.onload = () => this.prepareCover();
    this.img.onerror = () => {
      this.img.src = "https://assets.codepen.io/7558/bw-spheres-003.jpg";
    };
    this.img.src = src;
  }

  getCharForBrightness(brightness) {
    const chars = " .:-=+*#%@";
    const index = Math.floor((brightness / 255) * (chars.length - 1));
    return chars[index];
  }

  prepareCover() {
    const scale = Math.max(this.W / this.img.width, this.H / this.img.height);
    const sw = this.img.width * scale;
    const sh = this.img.height * scale;
    const ox = (this.W - sw) / 2;
    const oy = (this.H - sh) / 2;

    this.coverCtx.drawImage(this.img, ox, oy, sw, sh);

    const imageData = this.coverCtx.getImageData(0, 0, this.W, this.H);

    this.coverData = imageData;

    this.clearHeat();
    this.generateCharGrid();
    this.placeWordsInGrid();
    this.renderStaticGrid();
    this.render();
    this.bindEvents();
    this.startScrambling();
    this.monitorPerformance();

    setTimeout(() => this.container.classList.add("visible"), 100);
    this.createInitialAnimation();
  }

  createInitialAnimation() {
    const originalGrid = this.charGrid.map((cell) => ({ ...cell }));

    this.charGrid.forEach((cell) => {
      if (!cell.isWordChar) {
        cell.char = " ";
        cell.brightness = 0;
      } else {
        cell.brightness = 0.25;
      }
    });

    this.renderStaticGrid();
    this.render();

    const indices = this.createAnimationIndices();
    const startTime = performance.now();
    const duration = 800;

    const animate = () => {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const visibleCount = Math.floor(progress * this.charGrid.length);

      for (let i = 0; i < visibleCount; i++) {
        const idx = indices[i];
        if (!this.charGrid[idx].isWordChar) {
          this.charGrid[idx].char = this.getRandomChar();
          this.charGrid[idx].brightness =
            originalGrid[idx].brightness * Math.min(1, progress * 1.5);
        }
      }

      if (progress >= 1) {
        this.charGrid.forEach((cell, i) => {
          if (!cell.isWordChar) this.charGrid[i] = { ...originalGrid[i] };
        });
        this.renderStaticGrid();
        this.render();
        return;
      }

      this.renderStaticGrid();
      this.render();
      requestAnimationFrame(animate);
    };

    animate();
  }

  createAnimationIndices() {
    const nonWord = [],
      word = [];
    this.charGrid.forEach((cell, i) =>
      cell.isWordChar ? word.push(i) : nonWord.push(i)
    );
    this.shuffleArray(nonWord);
    return [...nonWord, ...word];
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getRandomChar() {
    return this.settings.characters.charAt(
      Math.floor(Math.random() * this.settings.characters.length)
    );
  }

  monitorPerformance() {
    let frameCount = 0,
      lastTime = 0;

    const check = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        const fps = frameCount;
        frameCount = 0;
        lastTime = now;

        if (fps < 30 && !this.lowPerformanceMode) {
          this.lowPerformanceMode = true;
          this.settings.scramble.interval = 1000;
          this.settings.scramble.amount = 0.05;
          this.restartScrambling();
        } else if (fps > 50 && this.lowPerformanceMode) {
          this.lowPerformanceMode = false;
          this.settings.scramble.interval = 500;
          this.settings.scramble.amount = 0.08;
          this.restartScrambling();
        }
      }
      requestAnimationFrame(check);
    };
    check();
  }

  placeWordsInGrid() {
    const { W, H, settings } = this;
    const gridSize = settings.grid.size;
    const cols = Math.floor(W / gridSize);
    const rows = Math.floor(H / gridSize);

    this.charGrid.forEach((cell) => {
      cell.isWordChar = false;
    });

    this.words.forEach((word) => {
      const placementCount = Math.max(1, Math.floor(Math.random() * 2) + 1);

      for (let placement = 0; placement < placementCount; placement++) {
        const direction = Math.floor(Math.random() * 3);

        let startX,
          startY,
          valid = false;
        let attempts = 0;

        while (!valid && attempts < 20) {
          attempts++;

          startX = Math.floor(Math.random() * cols);
          startY = Math.floor(Math.random() * rows);

          valid = true;

          if (direction === 0) {
            if (startX + word.length > cols) valid = false;
          } else if (direction === 1) {
            if (startY + word.length > rows) valid = false;
          } else {
            if (startX + word.length > cols || startY + word.length > rows)
              valid = false;
          }

          if (valid) {
            for (let i = 0; i < word.length; i++) {
              let x, y;

              if (direction === 0) {
                x = (startX + i) * gridSize;
                y = startY * gridSize;
              } else if (direction === 1) {
                x = startX * gridSize;
                y = (startY + i) * gridSize;
              } else {
                x = (startX + i) * gridSize;
                y = (startY + i) * gridSize;
              }

              const cellIndex = this.charGrid.findIndex(
                (cell) => cell.x === x && cell.y === y
              );

              if (cellIndex !== -1) {
                this.charGrid[cellIndex].char = word[i];
                this.charGrid[cellIndex].isWordChar = true;
                this.charGrid[cellIndex].brightness = Math.max(
                  this.charGrid[cellIndex].brightness,
                  0.65
                );
              }
            }
          }
        }
      }
    });
  }

  generateCharGrid() {
    const gridSize = this.settings.grid.size;

    for (let y = 0; y < this.H; y += gridSize) {
      for (let x = 0; x < this.W; x += gridSize) {
        const pi = (Math.floor(y) * this.W + Math.floor(x)) * 4;
        const r = this.coverData.data[pi];
        const g = this.coverData.data[pi + 1];
        const b = this.coverData.data[pi + 2];
        const a = this.coverData.data[pi + 3] / 255;

        let gray = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
        gray = Math.max(
          this.settings.grid.minBrightness,
          Math.min(1, (gray - 0.5) * this.settings.grid.contrast + 0.5)
        );

        const isForeground = a > 0.1;

        this.charGrid.push({
          x,
          y,
          char: this.getRandomChar(),
          weight: gray * this.settings.grid.weight,
          brightness: gray,
          isForeground: isForeground,
          isWordChar: false,
        });
      }
    }
  }

  renderStaticGrid() {
    const gridSize = this.settings.grid.size;

    this.staticCtx.clearRect(0, 0, this.W, this.H);
    this.staticCtx.fillStyle = "black";
    this.staticCtx.fillRect(0, 0, this.W, this.H);

    this.charGrid.forEach((cell) => {
      if (!cell.isForeground) return;

      const size =
        this.settings.fontSize *
        ((cell.isWordChar ? 0.8 : 0.5) + cell.brightness * 0.8);
      this.staticCtx.font = `${cell.isWordChar ? "bold" : ""} ${size}px ${
        this.settings.fontFamily
      }`;

      const brightnessAlpha =
        Math.min(1, cell.brightness * (cell.isWordChar ? 1.3 : 1.1)) *
        this.settings.grid.textOpacity;

      this.staticCtx.fillStyle = `rgba(255, 255, 255, ${brightnessAlpha})`;

      this.staticCtx.fillText(
        cell.char,
        cell.x + gridSize / 2,
        cell.y + gridSize / 2
      );
    });

    this.staticRendered = true;
  }

  startScrambling() {
    this.scrambleTimer = setInterval(() => {
      if (
        this.scrambleActive &&
        (!this.heat.active || this.lowPerformanceMode)
      ) {
        this.scrambleRandomChars();
      }
    }, this.settings.scramble.interval);
  }

  restartScrambling() {
    clearInterval(this.scrambleTimer);
    this.startScrambling();
  }

  scrambleRandomChars() {
    if (this.heat.active && this.heat.maxValue > 0.5) return;

    const numChars = Math.floor(
      this.charGrid.length * this.settings.scramble.amount
    );

    for (let i = 0; i < numChars; i++) {
      const idx = Math.floor(Math.random() * this.charGrid.length);
      if (!this.charGrid[idx].isWordChar) {
        this.charGrid[idx].char = this.getRandomChar();
      }
    }

    this.renderStaticGrid();
    if (!this.heat.active) this.render();
  }

  bindEvents() {
    const c = this.canvas;
    c.addEventListener("pointermove", (e) => this.setMousePosition(e));
    c.addEventListener("pointerenter", (e) => {
      this.setMousePosition(e);
      this.start();
    });
    c.addEventListener("pointerleave", () => {
      this.heat.mousePosition = null;
      this.clearHeat();
    });
    document.addEventListener("visibilitychange", () => {
      this.scrambleActive = !document.hidden;
    });
  }

  setMousePosition(e) {
    const { x, y } = this.getCoords(e);
    this.heat.mousePosition = { x, y };
  }

  move(e) {
    const now = performance.now();
    this.lastEventTime = now;

    const { x, y } = this.getCoords(e);
    const d = Math.hypot(x - this.lastX, y - this.lastY);
    this.addHeat(x, y, Math.min(d * 0.03, 0.8));
    this.lastX = x;
    this.lastY = y;
  }

  leave() {
    this.lastX = this.lastY = null;
  }

  getCoords(e) {
    const r = this.canvas.getBoundingClientRect();
    const cx = (e.clientX ?? e.touches[0].clientX) - r.left;
    const cy = (e.clientY ?? e.touches[0].clientY) - r.top;
    return {
      x: cx * (this.W / r.width),
      y: cy * (this.H / r.height),
    };
  }

  addHeat(px, py, amount = 1) {
    const nx = (px / this.W) * this.settings.res;
    const ny = (py / this.H) * this.settings.res;
    const rad = this.lowPerformanceMode ? 8 : 12;

    for (let i = -rad; i <= rad; i++) {
      for (let j = -rad; j <= rad; j++) {
        const x = Math.floor(nx + i);
        const y = Math.floor(ny + j);
        if (x < 0 || x >= this.settings.res || y < 0 || y >= this.settings.res)
          continue;

        const d = Math.hypot(i, j);
        if (d <= rad) {
          const idx = y * this.settings.res + x;
          const intensity = amount * Math.pow(1 - d / rad, 1.5);
          this.heat.current[idx] = Math.min(
            1,
            this.heat.current[idx] + intensity
          );
          this.heat.maxValue = Math.max(
            this.heat.maxValue,
            this.heat.current[idx]
          );
        }
      }
    }

    this.start();
  }

  start() {
    if (!this.heat.active) {
      this.heat.active = true;
      this.animate();
    }
  }

  stop() {
    this.heat.active = false;
    cancelAnimationFrame(this.raf);
    this.render();
  }

  animate = () => {
    this.update();
    this.render();
    if (this.heat.active) this.raf = requestAnimationFrame(this.animate);
  };

  render() {
    this.ctx.clearRect(0, 0, this.W, this.H);
    this.ctx.drawImage(this.coverCanvas, 0, 0);

    if (this.heat.active || this.heat.maxValue > 0) {
      const gridSize = this.settings.grid.size;
      const threshold = this.settings.effect.threshold;

      for (let y = 0; y < this.H; y += gridSize) {
        for (let x = 0; x < this.W; x += gridSize) {
          const idx =
            Math.floor((y / this.H) * this.settings.res) * this.settings.res +
            Math.floor((x / this.W) * this.settings.res);

          if (this.heat.current[idx] > threshold) {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(x, y, gridSize, gridSize);
            this.ctx.clip();
            this.ctx.drawImage(this.staticCanvas, 0, 0);
            this.ctx.restore();
          }
        }
      }
    }
  }

  update() {
    const now = performance.now();
    if (!this.heat.lastTime) {
      this.heat.lastTime = now;
      return;
    }

    if (this.heat.mousePosition) {
      this.addHeat(this.heat.mousePosition.x, this.heat.mousePosition.y, 0.5);
    }

    this.heat.lastTime = now;
    this.heat.maxValue = 0;

    const tempGrid = new Float32Array(this.settings.res * this.settings.res);
    const res = this.settings.res;
    const P = this.settings.effect;

    for (let y = 0; y < res; y++) {
      for (let x = 0; x < res; x++) {
        const idx = y * res + x;

        if (
          this.heat.current[idx] < P.threshold &&
          (y === 0 || this.heat.current[idx - res] < P.threshold) &&
          (y === res - 1 || this.heat.current[idx + res] < P.threshold) &&
          (x === 0 || this.heat.current[idx - 1] < P.threshold) &&
          (x === res - 1 || this.heat.current[idx + 1] < P.threshold)
        )
          continue;

        const up = y > 0 ? this.heat.current[idx - res] : 0;
        const down = y < res - 1 ? this.heat.current[idx + res] : 0;
        const left = x > 0 ? this.heat.current[idx - 1] : 0;
        const right = x < res - 1 ? this.heat.current[idx + 1] : 0;
        const upLeft = y > 0 && x > 0 ? this.heat.current[idx - res - 1] : 0;
        const upRight =
          y > 0 && x < res - 1 ? this.heat.current[idx - res + 1] : 0;
        const downLeft =
          y < res - 1 && x > 0 ? this.heat.current[idx + res - 1] : 0;
        const downRight =
          y < res - 1 && x < res - 1 ? this.heat.current[idx + res + 1] : 0;

        const neighbors =
          (up + down + left + right) * 0.15 +
          (upLeft + upRight + downLeft + downRight) * 0.05;

        tempGrid[idx] =
          this.heat.current[idx] * (1 - P.diffusion) + neighbors * P.diffusion;
        tempGrid[idx] *= P.decay;

        if (tempGrid[idx] >= P.threshold) {
          this.heat.maxValue = Math.max(this.heat.maxValue, tempGrid[idx]);
        } else {
          tempGrid[idx] = 0;
        }
      }
    }

    this.heat.current.set(tempGrid);

    if (this.heat.maxValue <= P.threshold && !this.heat.mousePosition)
      this.stop();
  }

  clearHeat() {
    this.heat.current.fill(0);
    this.heat.lastTime = 0;
    this.heat.maxValue = 0;
  }

  destroy() {
    clearInterval(this.scrambleTimer);
    this.stop();
    const c = this.canvas;
    c.removeEventListener("pointermove", this.move);
    document.removeEventListener("visibilitychange", this.visibilityChange);
  }
}
