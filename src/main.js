import Canvas2Image from './canvas2image';

document.addEventListener('DOMContentLoaded', () => {

  // Canvas to Image
  function canvasToImage(canvas) {
    const filename = 'LetsWrite_Demo_' + new Date().getTime();
    Canvas2Image.saveAsPNG(canvas, canvas.width, canvas.height, filename);
  }

  // HTML to Canvas
  function htmlToCanvas(id) {
    const el = document.getElementById(id);
    const config = {
      useCORS: true,
      backgroundColor: '#262626'
    };
    html2canvas(el, config).then(canvas => {
      canvasToImage(canvas);
      if (id === 'section3') {
        setTimeout(() => {
          document.getElementById('section3').innerHTML = '';
        }, 1000)
      }
    });
  }

  const btnSection1 = document.getElementById('capture1');
  btnSection1.addEventListener('click', e => {
    e.preventDefault();
    htmlToCanvas('section1');
  });

  const btnSection2 = document.getElementById('capture2');
  btnSection2.addEventListener('click', e => {
    e.preventDefault();
    htmlToCanvas('section2');
  });

  const btnSection3 = document.getElementById('capture3');
  btnSection3.addEventListener('click', e => {
    const s1 = document.getElementById('section1').outerHTML;
    const s2 = document.getElementById('section2').outerHTML;
    const s3 = document.getElementById('section3');
    s3.innerHTML = s1 + '<hr class="my-8 mx-auto max-w-3xl border-t border-gray-500 border-dashed"/>' + s2;
    e.preventDefault();
    htmlToCanvas('section3');
  });

})