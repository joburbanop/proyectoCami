const infoBtn = document.querySelector('#MasinformacionBTN5');
const infoBtn2 = document.querySelector('#MasinformacionBTN6');

const maquillajeBasico=document.querySelector('#maquillajeBasico');
const maquillajeAvanzado=document.querySelector('#maquillajeAvanzado');

infoBtn.addEventListener('click', toggleInfo);
infoBtn2.addEventListener('click',toggleInfo2);

function toggleInfo() {
    if (infoBtn.textContent === 'Más Información' ) {
        maquillajeBasico.classList.remove('cero')
        infoBtn.textContent = 'Menos Información';
      //console.log(infoBtn.textContent+'aqui arriba el if');
    } else {
        maquillajeBasico.classList.add('cero')
        infoBtn.textContent = 'Más Información';
      //console.log(infoBtn.textContent);
    }

  }

  function toggleInfo2() {
    if (infoBtn2.textContent === 'Más Información' ) {
        maquillajeAvanzado.classList.remove('cero');
        infoBtn2.textContent = 'Menos Información';
      //console.log(infoBtn2.textContent+'aqui arriba el if');
    } else {
        maquillajeAvanzado.classList.add('cero');
        infoBtn2.textContent = 'Más Información';
      //console.log(infoBtn2.textContent);
    }

  }