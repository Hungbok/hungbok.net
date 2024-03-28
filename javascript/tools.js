// Text Converter

$.fn.copyTo = function(selector) {
    $(selector).val($(this[0]).val().replace(/[ä@]/g, "a").replace(/[éē]/g, "e").replace(/[Ⓖ]/g, "g").replace(/[ōØ]/g, "o").replace(/[×]/g, " x ").replace(/[&]/g, " and ").replace(/[']/g, "").replace(/[`~∽☆★♪!#♯$%^*()_|+\-–−=?;:",.<>\{\}\[\]\\\/\n ]/g, "-").replace(/--------/g, "-").replace(/-------/g, "-").replace(/------/g, "-").replace(/-----/g, "-").replace(/----/g, "-").replace(/---/g, "-").replace(/--/g, "-").replace(/^-+/g, "").replace(/^-+/g, "").replace(/-+$/g, ""));
};

$(document).ready(function() {
    $("#generate-btn").click(function() {
        $("#textinput").copyTo("#textoutput");
    });
});

// Short URL Generator

function randomString() {
    var charsNumber = "0123456789";
    var charsLower = "abcdefghijklmnopqrstuvwxyz";
    var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
    var charsSpecial = "!@#$%^&*()-_=+,<.>?|";
    var charsAll = [charsNumber, charsLower, charsUpper]; //  Include special character by default but allow checkbox to toggle option
    var specialCB = document.getElementById("specialCharsCB").checked;
    if (specialCB == true) { //  Evaluate checkbox status
        charsAll = [charsNumber, charsLower, charsUpper, charsSpecial];
    }
    var chars = charsAll.join('');
    // Check for number of characters to generate. Defauts to 8 characters
    var stringLength = document.querySelector('input[name="numbers"]:checked').value;
    var randomString = '';
    for (var i = 0; i < stringLength; i++) { // Get string length
        var randNum = Math.floor(Math.random() * chars.length); // and then
        randomString += chars.substring(randNum, randNum + 1); // randomize it
    }
    //  Adjust the size of the box based on the string. There must be a better way to do this.
    //  Perhaps to actually get the physical width of the string of characters? This is my
    //  temporary solution below.
    document.theForm.theField.size = stringLength = 20;
    // Print the string to the textfield
    document.theForm.theField.value = randomString;
}

// URL to QR Code

// QR 코드를 생성할 요소
var qrcodeElement = document.getElementById("qrcode");
var linkInput = document.getElementById("linkInput");
var generateButton = document.getElementById("generateButton");
var saveButton = document.getElementById("qrcode");

// 로고 이미지를 미리 로드
var logoImage = new Image();
logoImage.src = 'img/hungbok/hb_circle_outline.svg'; // 로고 이미지 파일의 경로
logoImage.onload = function() {
    // 로고 이미지 로드가 완료되면 generateQRCode 함수를 호출하여 QR 코드를 생성
    generateQRCode();
};

generateButton.addEventListener("click", function() {
    // 이전 QR 코드 제거
    clearQRCode();
    // QR 코드 생성
    generateQRCode();
});

saveButton.addEventListener("click", function() {
    saveQRCode();
});

function generateQRCode() {
    // 입력된 링크 주소 가져오기
    var link = linkInput.value;

    // 링크가 비어있는지 확인
    if (link === "") {
        var link = "https://hgbk.me/Lvdr78bE"
    }

    // QR 코드 생성
    var qrcode = new QRCode(qrcodeElement, {
        text: link,
        width: 512,
        height: 512,
        correctLevel: QRCode.CorrectLevel.H, // 에러 수정 수준을 선택 (L, M, Q, H 중 선택)
        colorDark: "#000000", // 전경색 (검은색)
        // colorLight: "rgba(0, 0, 0, 0)", // 배경색 (투명)
    });

    // 로고 이미지를 추가
    var canvas = qrcodeElement.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var logoSize = canvas.width / 4; // 로고의 크기

    ctx.drawImage(logoImage, centerX - logoSize / 2, centerY - logoSize / 2, logoSize, logoSize);
}

function clearQRCode() {
    // 이전 QR 코드 제거
    while (qrcodeElement.firstChild) {
        qrcodeElement.removeChild(qrcodeElement.firstChild);
    }
}

function saveQRCode() {
    // QR 코드 이미지를 canvas에 그린 후, 이미지로 저장
    var canvas = qrcodeElement.querySelector("canvas");
    var link = document.createElement('a');
    link.download = 'hb_' + linkInput.value + '.png';
    link.href = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    link.click();
}

// Text to Image

const availableFonts = [
    "Open Sans"
];

// Make the browser load the fonts if the API is available
if (window.document.fonts && window.document.fonts.load) {
    availableFonts.forEach((font) => window.document.fonts.load(`16px ${font}`));
}

document.getElementById("app").innerHTML = `
<div class="header">
    <h1 class="title" onClick="window.location.reload()">TTI</h1>
</div>
<div class="container">
    <div class="top-box">
        <textarea type="text" id="text-input" placeholder="https://hgbk.me/Lvdr78bE" style="color: black;" autocomplete='off'></textarea>
        <div id="text-color">
            <input type="radio" id="fontcolor-b" name="fontcolor" value="black" checked>
            <label for="fontcolor-b"> </label>
            <input type="radio" id="fontcolor-w" name="fontcolor" value="white">
            <label for="fontcolor-w"> </label>
        </div>
        <div id="text-count">(0 / 100)</div>
        <select id="font-select">
            ${availableFonts.map((font) => `<option>${font}</option>`).join("\n")}
        </select>
    </div>
    <div class="middle-box">
        <button type="button" id="generate-btn" class="execute">Generate</button>
    </div>
    <div class="bottom-box">
        <div id="image-wrapper">
            <img src="/img/hungbok/tti.png" style="height: 0px;">
        </div>
    </div>
</div>
`;

const btn = document.getElementById("generate-btn");

btn.addEventListener("click", async () => {
    btn.setAttribute("disabled", "true");
    await generateImage();
    btn.removeAttribute("disabled");
});

const dpr = window.devicePixelRatio || 1;

async function generateImage() {
    const text = document.getElementById("text-input").value;
    const font = document.getElementById("font-select").selectedOptions[0]
        .textContent;

    const imageWrapper = document.getElementById("image-wrapper");

    if (!text) {
        return;
    }

    const imageBlob = await textToBitmap(text, font);

    const imageUrl = URL.createObjectURL(imageBlob);

    const image = new Image();
    image.src = imageUrl;
    imageWrapper.replaceChildren(image);

    requestAnimationFrame(() => {
        // scale down the rendered image based on the display DPR
        const currentHeight = image.getBoundingClientRect().height;
        image.style.height = `${currentHeight / dpr}px`;
    }, 0);
}

/**
 * To properly render the given text across different browser engines,
 * we initially set a large enough canvas and then vertically trim
 * the empty space.
 */
async function textToBitmap(text, font) {
    let canvas;
    let convertToBlob;

    const FONT_SIZE = 100;
    const VERTICAL_EXTRA_SPACE = 5;
    const HORIZONTAL_EXTRA_SPACE = 2;

    if ("OffscreenCanvas" in window) {
        canvas = new window.OffscreenCanvas(200, 200);
        convertToBlob = canvas.convertToBlob.bind(canvas);
    } else {
        canvas = window.document.createElement("canvas");

        convertToBlob = () =>
            new Promise((resolve) => {
                if (canvas.msToBlob && !canvas.toBlob) {
                    // Edge and IE11

                    const blob = canvas.msToBlob();

                    resolve(blob);
                } else {
                    canvas.toBlob(resolve);
                }
            });
    }

    const ctx = canvas.getContext("2d");

    ctx.textBaseline = "top";

    var fontcolor = document.querySelector('input[name="fontcolor"]:checked').value;
    const color = fontcolor;
    // scale up the font size by the DPR factor. When
    // rendering, we'll scale down the image by the same
    // amount.
    ctx.font = `${FONT_SIZE * dpr}px "${font}"`;

    // IE and Edge only returns width as part of measureText
    const {
        actualBoundingBoxLeft,
        actualBoundingBoxRight,
        fontBoundingBoxAscent,
        fontBoundingBoxDescent,
        actualBoundingBoxAscent,
        actualBoundingBoxDescent,
        width
    } = ctx.measureText(text);

    // Render a large canvas to handle edge cases with some cases with large
    // ascenders and descender strokes that otherwise could end up cropped out
    // 5 is chosen as a multiplier after trying out rendering multiple fonts on different
    // browser engines while keeping the necessary room before vertically trimming the
    // canvas to ensure proper rendering of text (VERTICAL_EXTRA_SPACE).
    // Horizontal trimming is also applied with a similar logic to handle edge cases there.
    const canvasHeight =
        Math.max(
            Math.abs(actualBoundingBoxAscent) + Math.abs(actualBoundingBoxDescent),
            (Math.abs(fontBoundingBoxAscent) || 0) +
            (Math.abs(fontBoundingBoxDescent) || 0)
        ) * VERTICAL_EXTRA_SPACE;
    canvas.height = canvasHeight;

    const canvasWidth =
        Math.max(width, Math.abs(actualBoundingBoxLeft) + actualBoundingBoxRight) *
        HORIZONTAL_EXTRA_SPACE;
    canvas.width = canvasWidth;
    ctx.textBaseline = "top";
    ctx.font = `${FONT_SIZE * dpr}px "${font}"`;
    // Do not start rendering the text at the very top of the canvas to
    // prevent cutting out ascender strokes on certain fonts.
    // 4 is chosen so that text starts being rendered at the upper half of
    // the canvas
    ctx.fillStyle = color;
    ctx.fillText(text, canvasWidth / 4, canvasHeight / 4);
    trimCanvas(canvas);

    return convertToBlob({
        type: "image/png"
    });
}

/*
 * Remove empty regions on a canvas
 *
 * Based on https://ourcodeworld.com/articles/read/683/how-to-remove-the-transparent-pixels-that-surrounds-a-canvas-in-javascript
 */
function trimCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const length = pixels.data.length;
    let topCoord = null;
    let bottomCoord = null;
    let leftCoord = null;
    let rightCoord = null;
    let x = 0;
    let y = 0;

    // Iterate over every pixel to find the highest
    // and where it ends on the vertical axis
    // Each pixel is represented as RGBA
    for (let i = 0; i < length; i += 4) {
        // We inspect the alpha channel to check
        // if the pixel is fully transparent or not
        if (pixels.data[i + 3] !== 0) {
            x = (i / 4) % canvas.width;
            y = Math.trunc(i / 4 / canvas.width);

            if (topCoord === null) {
                // Since we inspect from top to bottom,
                // the initial not-transparent pixel must
                // be the topBound one.
                topCoord = y;
            }

            if (leftCoord === null || x < leftCoord) {
                // Since we walk in the left-right top-bottom
                // direction, we need to find the lowest
                // x coordinate as the leftCoord
                leftCoord = x;
            }

            if (rightCoord === null || x > rightCoord) {
                // Since we walk in the left-right top-bottom
                // direction, we need to find the highest
                // x coordinate as the rightCoord
                rightCoord = x;
            }

            if (bottomCoord === null || bottomCoord < y) {
                bottomCoord = y;
            }
        }
    }

    // If some value was left as null we use 0
    topCoord = topCoord || 0;
    bottomCoord = bottomCoord || 0;
    leftCoord = leftCoord || 0;
    rightCoord = rightCoord || 0;

    // Calculate height and width. Add 20 pixels
    // for some negative space (i.e. padding) around
    // the canvas edges
    const trimHeight = bottomCoord - topCoord + 20;
    const trimWidth = rightCoord - leftCoord + 20;
    const trimmed = ctx.getImageData(leftCoord, topCoord, trimWidth, trimHeight);

    canvas.width = trimWidth;
    canvas.height = trimHeight;
    ctx.putImageData(trimmed, 10, 10);
}

$(document).ready(function() {
    $('#text-input').on('keyup', function() {
        $('#text-count').html("(" + $(this).val().length + " / 100)");

        if ($(this).val().length > 100) {
            $(this).val($(this).val().substring(0, 100));
            $('#text-count').html("(100 / 100)");
        }
    });
});

$("#text-color").click(function() {
    var fontcolor = document.querySelector('input[name="fontcolor"]:checked').value;
    $('#text-input').css('color', fontcolor);
});

// Hax to Filter

'use strict';

class Color {
  constructor(r, g, b) {
    this.set(r, g, b);
  }
  
  toString() {
    return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
  }

  set(r, g, b) {
    this.r = this.clamp(r);
    this.g = this.clamp(g);
    this.b = this.clamp(b);
  }

  hueRotate(angle = 0) {
    angle = angle / 180 * Math.PI;
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);

    this.multiply([
      0.213 + cos * 0.787 - sin * 0.213,
      0.715 - cos * 0.715 - sin * 0.715,
      0.072 - cos * 0.072 + sin * 0.928,
      0.213 - cos * 0.213 + sin * 0.143,
      0.715 + cos * 0.285 + sin * 0.140,
      0.072 - cos * 0.072 - sin * 0.283,
      0.213 - cos * 0.213 - sin * 0.787,
      0.715 - cos * 0.715 + sin * 0.715,
      0.072 + cos * 0.928 + sin * 0.072,
    ]);
  }

  grayscale(value = 1) {
    this.multiply([
      0.2126 + 0.7874 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 + 0.2848 * (1 - value),
      0.0722 - 0.0722 * (1 - value),
      0.2126 - 0.2126 * (1 - value),
      0.7152 - 0.7152 * (1 - value),
      0.0722 + 0.9278 * (1 - value),
    ]);
  }

  sepia(value = 1) {
    this.multiply([
      0.393 + 0.607 * (1 - value),
      0.769 - 0.769 * (1 - value),
      0.189 - 0.189 * (1 - value),
      0.349 - 0.349 * (1 - value),
      0.686 + 0.314 * (1 - value),
      0.168 - 0.168 * (1 - value),
      0.272 - 0.272 * (1 - value),
      0.534 - 0.534 * (1 - value),
      0.131 + 0.869 * (1 - value),
    ]);
  }

  saturate(value = 1) {
    this.multiply([
      0.213 + 0.787 * value,
      0.715 - 0.715 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 + 0.285 * value,
      0.072 - 0.072 * value,
      0.213 - 0.213 * value,
      0.715 - 0.715 * value,
      0.072 + 0.928 * value,
    ]);
  }

  multiply(matrix) {
    const newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
    const newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
    const newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
    this.r = newR;
    this.g = newG;
    this.b = newB;
  }

  brightness(value = 1) {
    this.linear(value);
  }
  contrast(value = 1) {
    this.linear(value, -(0.5 * value) + 0.5);
  }

  linear(slope = 1, intercept = 0) {
    this.r = this.clamp(this.r * slope + intercept * 255);
    this.g = this.clamp(this.g * slope + intercept * 255);
    this.b = this.clamp(this.b * slope + intercept * 255);
  }

  invert(value = 1) {
    this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
    this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
    this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
  }

  hsl() {
    // Code taken from https://stackoverflow.com/a/9493060/2688027, licensed under CC BY-SA.
    const r = this.r / 255;
    const g = this.g / 255;
    const b = this.b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: h * 100,
      s: s * 100,
      l: l * 100,
    };
  }

  clamp(value) {
    if (value > 255) {
      value = 255;
    } else if (value < 0) {
      value = 0;
    }
    return value;
  }
}

class Solver {
  constructor(target, baseColor) {
    this.target = target;
    this.targetHSL = target.hsl();
    this.reusedColor = new Color(0, 0, 0);
  }

  solve() {
    const result = this.solveNarrow(this.solveWide());
    return {
      values: result.values,
      loss: result.loss,
      filter: this.css(result.values),
    };
  }

  solveWide() {
    const A = 5;
    const c = 15;
    const a = [60, 180, 18000, 600, 1.2, 1.2];

    let best = { loss: Infinity };
    for (let i = 0; best.loss > 25 && i < 3; i++) {
      const initial = [50, 20, 3750, 50, 100, 100];
      const result = this.spsa(A, a, c, initial, 1000);
      if (result.loss < best.loss) {
        best = result;
      }
    }
    return best;
  }

  solveNarrow(wide) {
    const A = wide.loss;
    const c = 2;
    const A1 = A + 1;
    const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
    return this.spsa(A, a, c, wide.values, 500);
  }

  spsa(A, a, c, values, iters) {
    const alpha = 1;
    const gamma = 0.16666666666666666;

    let best = null;
    let bestLoss = Infinity;
    const deltas = new Array(6);
    const highArgs = new Array(6);
    const lowArgs = new Array(6);

    for (let k = 0; k < iters; k++) {
      const ck = c / Math.pow(k + 1, gamma);
      for (let i = 0; i < 6; i++) {
        deltas[i] = Math.random() > 0.5 ? 1 : -1;
        highArgs[i] = values[i] + ck * deltas[i];
        lowArgs[i] = values[i] - ck * deltas[i];
      }

      const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
      for (let i = 0; i < 6; i++) {
        const g = lossDiff / (2 * ck) * deltas[i];
        const ak = a[i] / Math.pow(A + k + 1, alpha);
        values[i] = fix(values[i] - ak * g, i);
      }

      const loss = this.loss(values);
      if (loss < bestLoss) {
        best = values.slice(0);
        bestLoss = loss;
      }
    }
    return { values: best, loss: bestLoss };

    function fix(value, idx) {
      let max = 100;
      if (idx === 2 /* saturate */) {
        max = 7500;
      } else if (idx === 4 /* brightness */ || idx === 5 /* contrast */) {
        max = 200;
      }

      if (idx === 3 /* hue-rotate */) {
        if (value > max) {
          value %= max;
        } else if (value < 0) {
          value = max + value % max;
        }
      } else if (value < 0) {
        value = 0;
      } else if (value > max) {
        value = max;
      }
      return value;
    }
  }

  loss(filters) {
    // Argument is array of percentages.
    const color = this.reusedColor;
    color.set(0, 0, 0);

    color.invert(filters[0] / 100);
    color.sepia(filters[1] / 100);
    color.saturate(filters[2] / 100);
    color.hueRotate(filters[3] * 3.6);
    color.brightness(filters[4] / 100);
    color.contrast(filters[5] / 100);

    const colorHSL = color.hsl();
    return (
      Math.abs(color.r - this.target.r) +
      Math.abs(color.g - this.target.g) +
      Math.abs(color.b - this.target.b) +
      Math.abs(colorHSL.h - this.targetHSL.h) +
      Math.abs(colorHSL.s - this.targetHSL.s) +
      Math.abs(colorHSL.l - this.targetHSL.l)
    );
  }

  css(filters) {
    function fmt(idx, multiplier = 1) {
      return Math.round(filters[idx] * multiplier);
    }
    return `filter: invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%);`;
  }
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16),
    ]
    : null;
}

$(document).ready(() => {
  $('button.execute').click(() => {
    const rgb = hexToRgb($('input.target').val());
    if (rgb.length !== 3) {
      alert('Invalid format!');
      return;
    }

    const color = new Color(rgb[0], rgb[1], rgb[2]);
    const solver = new Solver(color);
    const result = solver.solve();

    let lossMsg;
    if (result.loss < 0.5) {
      lossMsg = '<img class="great" src="//media.hungbok.net/image/icon/verified.svg">';
    } else if (result.loss < 1) {
      lossMsg = '<img class="success" src="//media.hungbok.net/image/icon/check.svg">';
    } else if (result.loss < 5) {
      lossMsg = '<img class="warning" src="//media.hungbok.net/image/icon/error.svg">';
    } else {
      lossMsg = '<img class="danger" src="//media.hungbok.net/image/icon/cancel.svg">';
    }

    $('.realPixel').css('background-color', color.toString());
    $('.filterPixel').attr('style', result.filter);
    $('.filterDetail').html(`${result.filter}`);
    $('.lossDetail').html(`${lossMsg}<p>${result.loss.toFixed(1)}</p>`);
  });
});
