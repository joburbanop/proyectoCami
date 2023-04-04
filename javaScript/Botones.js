        const infoBtn = document.querySelector('#MasinformacionBTN1');
        const infoBtn2 = document.querySelector('#MasinformacionBTN2');
        const infoBtn3 = document.querySelector('#MasinformacionBTN3');
        const infoBtn4 = document.querySelector('#MasinformacionBTN4');
        infoBtn.addEventListener('click', toggleInfo);
        infoBtn2.addEventListener('click',toggleInfo2);
        infoBtn3.addEventListener('click',toggleInfo3);
        infoBtn4.addEventListener('click',toggleInfo4);

        function toggleInfo() {
          if (infoBtn.textContent === 'Más Información' ) {
            infoBtn.textContent = 'Menos Información';
            //console.log(infoBtn.textContent+'aqui arriba el if');
          } else {
            infoBtn.textContent = 'Más Información';
            console.log(infoBtn.textContent);
          }

        }

        function toggleInfo2() {
          if (infoBtn2.textContent === 'Más Información' ) {
            infoBtn2.textContent = 'Menos Información';
            //console.log(infoBtn2.textContent+'aqui arriba el if');
          } else {
            infoBtn2.textContent = 'Más Información';
            //console.log(infoBtn2.textContent);
          }

        }

        function toggleInfo3() {
          if (infoBtn3.textContent === 'Más Información' ) {
            infoBtn3.textContent = 'Menos Información';
            //console.log(infoBtn3.textContent+'aqui arriba el if');
          } else {
            infoBtn3.textContent = 'Más Información';
            //console.log(infoBtn3.textContent);
          }

        }
        function toggleInfo3() {
          if (infoBtn4.textContent === 'Más Información' ) {
            infoBtn4.textContent = 'Menos Información';
            //console.log(infoBtn3.textContent+'aqui arriba el if');
          } else {
            infoBtn4.textContent = 'Más Información';
            //console.log(infoBtn3.textContent);
          }

        }
     
        