Vue.component('prop-item', {
    props: ['item'],
    template: `
    <div class="col-12 border-top border-bottom py-5" data-aos="fade" data-aos-delay="200">
    <div class="row align-items-stretch">
      <div class="col-md-3 text-white mb-3 mb-md-0">

        <div>
          <div style="display:inline-block; vertical-align:middle">

            <svg height="50" width="50" viewBox="0 0 20 20">
              <circle r="10" cx="10" cy="10" fill="red" />
              <circle r="5" cx="10" cy="10" fill="transparent" stroke="green" stroke-width="10" :stroke-dasharray="item.chartvalue"
                transform="rotate(-90) translate(-20)" />
            </svg>


          </div>

          <div style="display:inline-block; vertical-align:middle">
            <span class="h4 positivo">{{item.ppositivo}}%</span>
            <br/>
            <span class="h4 negativo">{{item.pnegativo}}%</span>
            <br/>
          </div>
        </div>
        <span class="votos">{{item.nvotos}} votos</span>
      </div>
      <div class="col-md-7">
        <h2 class="text-white aporte">{{item.text}}</h2>

      </div>

      <div class="col-md-2">
        <p>
          <a data-toggle="modal" data-target="#mymodal" class="votosi"> SI </a>
        </p>
        <p>
          <a data-toggle="modal" data-target="#mymodal" class="votono"> NO </a>
        </p>
      </div>

      <div class="col-md-12">
        <div class="share"></div>
      </div>



    </div>
  </div>
    `
  });


var cv = (80 * 31.4 / 100)+" 31.4";

  var ge = new Vue({
    el: '#ge',
    data: {
      proplist: [
        { id: 0, text: 'No + AFP', ppositivo: 80, pnegativo: 20, nvotos: 8000, chartvalue: cv},
        { id: 1, text: 'Reforma constitucional', ppositivo: 80, pnegativo: 20, nvotos: 8000, chartvalue: cv},
        { id: 2, text: 'Cambio de gabinete AHORA!', ppositivo: 80, pnegativo: 20, nvotos: 8000, chartvalue: cv},
        { id: 3, text: 'Más trabajo para los mineros de Antofagasta que tienen problemas de disfunción erectil. No aguantamos más! Siete palabras', ppositivo: 80, pnegativo: 20, nvotos: 8000, chartvalue: cv},
        { id: 4, text: 'No + AFP', ppositivo: 80, pnegativo: 20, nvotos: 8000, chartvalue: cv},
        { id: 5, text: 'Reforma constitucional', ppositivo: 80, pnegativo: 20, nvotos: 8000, chartvalue: cv},
      ]
    }
  })