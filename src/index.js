import platformSrc from './assets/platform.png';
import backgroundSrc from './assets/background.png';
import hillsSrc from './assets/hills.png';

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = 1;

class Player {
  constructor() {
    (this.position = {
      x: 100,
      y: 100,
    }),
      (this.velocity = {
        x: 0,
        y: 0,
      });
    (this.width = 30), (this.height = 30);
  }
  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    }

    this.draw();
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObjects {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image ? image.width : 0;
    this.height = image ? image.height : 0;
  }

  draw() {
    if (this.image && this.image.complete) {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }
}

let player = new Player();
let platforms = [];
let genericObjects = [];

const createImage = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;

  return image;
};

const bgImage = createImage(backgroundSrc);
const hillsImage = createImage(hillsSrc);
const platformImage = createImage(platformSrc);

bgImage.onload = () => {
  genericObjects.push(new GenericObjects({ x: -1, y: -1, image: bgImage }));
};

hillsImage.onload = () => {
  genericObjects.push(
    new GenericObjects({ x: -1, y: -1, image: hillsImage }),
    new GenericObjects({ x: 1200, y: -1, image: hillsImage }),
  );
};

platformImage.onload = () => {
  platforms.push(
    new Platform({ x: -2, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width - 4, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width * 2 + 200, y: 470, image: platformImage }),
  );
};

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

const init = () => {
  player = new Player();
  genericObjects = [
    new GenericObjects({ x: -1, y: -1, image: bgImage }),
    new GenericObjects({ x: 1200, y: -1, image: hillsImage }),
    new GenericObjects({ x: -1, y: -1, image: hillsImage }),
  ];

  platforms = [
    new Platform({ x: -2, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width - 4, y: 470, image: platformImage }),
    new Platform({ x: platformImage.width * 2 + 200, y: 470, image: platformImage }),
  ];

  scrollOffset = 0;
};

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => platform.draw());
  player.update();

  //change velocity
  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = 7;
  } else if (keys.left.pressed && player.position.x > 100) {
    player.velocity.x = -7;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 7;
      platforms.forEach((platform) => (platform.position.x -= 7));
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= 2;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 7;
      genericObjects.forEach((genericObject) => {
        genericObject.position.x += 2;
      });
      platforms.forEach((platform) => (platform.position.x += 7));
    }
  }

  // platform collision
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >= platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });

  //win condition
  if (scrollOffset > 2000) {
    console.log('you win');
  }
  //lose condition
  if (player.position.y > canvas.height) {
    init();
  }
}

animate();

window.addEventListener('keydown', ({ code }) => {
  switch (code) {
    case 'ArrowUp':
      player.velocity.y -= 20;
      break;
    case 'ArrowDown':
      console.log('Вниз');
      break;
    case 'ArrowLeft':
      keys.left.pressed = true;
      break;
    case 'ArrowRight':
      keys.right.pressed = true;
      break;
  }
});

window.addEventListener('keyup', ({ code }) => {
  switch (code) {
    case 'ArrowLeft':
      keys.left.pressed = false;
      break;
    case 'ArrowRight':
      keys.right.pressed = false;
      break;
  }
});
