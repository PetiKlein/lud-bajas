document.addEventListener('DOMContentLoaded', function() {
    cargarDeportes();
});

document.getElementById('tipoSancion').onchange = tipoSancionCambiado;

function cargarDeportes() {
    fetch(`api.php?action=cargarDeportes`)
        .then(response => response.json())
        .then(data => {
            const selectDeporte = document.getElementById('deporte');
            data.forEach(deporte => {
                let option = document.createElement('option');
                option.value = deporte.nombre;
                option.textContent = deporte.nombre;
                selectDeporte.appendChild(option);
            });
            selectDeporte.onchange = cargarTorneos;
        })
        .catch(error => console.error('Error al cargar deportes:', error));
}

function cargarTorneos() {
    let deporte = document.getElementById('deporte').value;
    fetch(`api.php?action=cargarTorneos&deporte=${deporte}`)
        .then(response => response.json())
        .then(data => {
            const selectTorneo = document.getElementById('torneo');
            selectTorneo.innerHTML = '<option value="">Selecciona un Torneo</option>';
            data.forEach(torneo => {
                let option = document.createElement('option');
                option.value = torneo.nombre;
                option.textContent = torneo.nombre;
                selectTorneo.appendChild(option);
            });
            selectTorneo.disabled = false;
            selectTorneo.onchange = cargarFechas;
        })
        .catch(error => {
            console.error('Error al cargar torneos:', error);
            document.getElementById('torneo').disabled = true;
        });
}

function cargarFechas() {
    let deporte = document.getElementById('deporte').value;
    let torneo = document.getElementById('torneo').value;
    fetch(`api.php?action=cargarFechas&deporte=${deporte}&torneo=${torneo}`)
        .then(response => response.json())
        .then(data => {
            const selectFecha = document.getElementById('fecha');
            const selectTipoSancion = document.getElementById('tipoSancion');

            selectFecha.innerHTML = '<option value="">Selecciona una Fecha</option>';
            data.forEach(fecha => {
                let option = document.createElement('option');
                option.value = fecha.fecha_fallo;
                option.textContent = fecha.fecha_fallo;
                selectFecha.appendChild(option);
            });
            selectFecha.disabled = false;
            selectFecha.onchange = function() {
                selectTipoSancion.innerHTML = '<option value="">Selecciona el Tipo de Sanción</option>' +
                    '<option value="sanciones">Sanciones Automáticas</option>' +
                    '<option value="fallos">Fallos de Jugadores</option>' +
                    '<option value="fallos-personas">Fallos de Personas</option>' +
                    '<option value="amonestaciones">Amonestaciones</option>' +
                    '<option value="fallos-instituciones">Fallos de Instituciones</option>'

                selectTipoSancion.disabled = !this.value;
            };
        })
        .catch(error => {
            console.error('Error al cargar fechas:', error);
            document.getElementById('fecha').disabled = true;
            document.getElementById('tipoSancion').disabled = true;
        });
}

function tipoSancionCambiado() {
    const tipoSancion = document.getElementById('tipoSancion').value;
    switch (tipoSancion) {
        case 'sanciones':
            cargarPartidos();
            break;
        case 'fallos':
            cargarFallos();
            break;
        case 'fallos-personas':
            cargarFallosPersonas();
            break;
        case 'fallos-instituciones':
            cargarFallosInstituciones();
            break;
        case 'amonestaciones':
            cargarAmonestaciones();
            break;
    }
}

function cargarPartidos() {
    const deporte = document.getElementById('deporte').value;
    const torneo = document.getElementById('torneo').value;
    const fecha = document.getElementById('fecha').value;    if (!deporte || !torneo || !fecha) {
        alert("Por favor, selecciona todos los filtros antes de cargar los partidos.");
        return;
    }

    console.log("Cargando partidos para", deporte, torneo, fecha);

    // Mostrar mensaje de carga
    const resultadosPartidos = document.getElementById('resultadosPartidos');
    resultadosPartidos.innerHTML = `
        <div style="text-align: center; padding: 40px; font-size: 16px; color: #666;">
            <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #1f468d; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
            <div>Cargando sanciones automáticas...</div>
            <div style="font-size: 14px; margin-top: 10px;">Por favor aguarde un momento</div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    fetch(`api.php?action=cargarPartidos&deporte=${deporte}&torneo=${torneo}&fecha=${fecha}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })        .then(data => {
            resultadosPartidos.innerHTML = '';

            const table = document.createElement('table');
            table.className = 'results-table';

            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            ['Fecha Fallo', 'Nro Partido', 'Serie', 'Nombre Jugador', 'Institución', 'Carné', 'Cantidad Sanción', 'Sanción'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');

            data.forEach(partido => {
                const tr = document.createElement('tr');
                ['fecha_fallo', 'nro_partido', 'cd_serie', 'nombre_jugador', 'insa', 'carne', 'cant_sansion', 'sancion'].forEach(field => {
                    const td = document.createElement('td');
                    td.textContent = partido[field];
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });

            table.appendChild(tbody);
            resultadosPartidos.appendChild(table);
        })
        .catch(error => {
            console.error('Error al cargar partidos:', error);
            alert("Hubo un error al cargar los partidos. Por favor, intenta de nuevo.");
        });
}

function cargarFallos() {
    const deporte = document.getElementById('deporte').value;
    const torneo = document.getElementById('torneo').value;
    const fecha = document.getElementById('fecha').value;    if (!deporte || !torneo || !fecha) {
        alert("Por favor, selecciona todos los filtros antes de cargar los fallos.");
        return;
    }

    // Mostrar mensaje de carga
    const resultadosFallos = document.getElementById('resultadosPartidos');
    resultadosFallos.innerHTML = `
        <div style="text-align: center; padding: 40px; font-size: 16px; color: #666;">
            <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #1f468d; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
            <div>Cargando fallos de jugadores...</div>
            <div style="font-size: 14px; margin-top: 10px;">Por favor aguarde un momento</div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    fetch(`api.php?action=cargarFallos&deporte=${deporte}&torneo=${torneo}&fecha=${fecha}`)        .then(response => response.json())
        .then(data => {
            resultadosFallos.innerHTML = '';

            const table = document.createElement('table');
            table.className = 'results-table';

            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');            ['Fecha Fallo', 'Nro Partido', 'Rueda', 'Serie', 'Nombre Jugador', 'Institución', 'Carné', 'Cant. Sanción', 'Artículos'].forEach((text, index) => {
                const th = document.createElement('th');
                th.textContent = text;
                if (index === 0 || index === 5) { // Ocultar Fecha Fallo (0) e Institución (5) en móvil
                    th.classList.add('hide-mobile');
                }
                headerRow.appendChild(th);
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);            const tbody = document.createElement('tbody');

            data.forEach(fallo => {
                const tr = document.createElement('tr');
                // Asegúrate de que los nombres de los campos coincidan con los de tu API
                const celdas = [
                    { texto: fallo.fecha_fallo ? fallo.fecha_fallo : 'Fecha no disponible', clase: 'hide-mobile' },
                    fallo.nro_partido,
                    fallo.cd_rueda,
                    fallo.cd_serie,
                    fallo.nombre_jugador,
                    { texto: fallo.insa, clase: 'hide-mobile' }, // Institución oculta en móvil
                    fallo.carne,
                    fallo.cant_sansion,
                    fallo.articulos
                ];

                celdas.forEach(celda => {
                    const td = document.createElement('td');
                    if (typeof celda === 'object') {
                        td.textContent = celda.texto;
                        if (celda.clase) {
                            td.classList.add(celda.clase);
                        }
                    } else {
                        td.textContent = celda;
                    }
                    tr.appendChild(td);
                });

                tbody.appendChild(tr);
            });

            table.appendChild(tbody);
            resultadosFallos.appendChild(table);
        })
        .catch(error => {
            console.error('Error al cargar fallos:', error);
            alert("Hubo un error al cargar los fallos. Por favor, intenta de nuevo.");
        });
}

function cargarFallosPersonas() {
    const deporte = document.getElementById('deporte').value;
    const torneo = document.getElementById('torneo').value;
    const fecha = document.getElementById('fecha').value;    if (!deporte || !torneo || !fecha) {
        alert("Por favor, selecciona todos los filtros antes de cargar los fallos.");
        return;
    }

    // Mostrar mensaje de carga
    const resultadosFallosPersonas = document.getElementById('resultadosPartidos');
    resultadosFallosPersonas.innerHTML = `
        <div style="text-align: center; padding: 40px; font-size: 16px; color: #666;">
            <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #1f468d; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
            <div>Cargando fallos de personas...</div>
            <div style="font-size: 14px; margin-top: 10px;">Por favor aguarde un momento</div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    fetch(`api.php?action=cargarFallosPersonas&deporte=${deporte}&torneo=${torneo}&fecha=${fecha}`)        .then(response => response.json())
        .then(data => {
            resultadosFallosPersonas.innerHTML = '';

            const table = document.createElement('table');
            table.className = 'results-table2';

            // Crear el encabezado de la tabla
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            ['Fecha Fallo', 'Nombres', 'Institución', 'Documento', 'Sanción', 'Cant. Sanción', 'Observaciones'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Crear el cuerpo de la tabla
            const tbody = document.createElement('tbody');
            data.forEach(fallo => {
                const tr = document.createElement('tr');
                const celdas = [
                    fallo.fecha_fallo,
                    fallo.nombres,
                    fallo.institucion,
                    fallo.documento,
                    fallo.sancion,
                    fallo.cant_sansion,
                    fallo.observaciones,
                ];
                celdas.forEach(celda => {
                    const td = document.createElement('td');
                    td.textContent = celda;
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            resultadosFallosPersonas.appendChild(table);
        })
        .catch(error => {
            console.error('Error al cargar fallos:', error);
            alert("Hubo un error al cargar los fallos. Por favor, intenta de nuevo.");
        });
}

function cargarFallosInstituciones() {
    const deporte = document.getElementById('deporte').value;
    const torneo = document.getElementById('torneo').value;
    const fecha = document.getElementById('fecha').value;    if (!deporte || !torneo || !fecha) {
        alert("Por favor, selecciona todos los filtros antes de cargar los fallos.");
        return;
    }

    // Mostrar mensaje de carga
    const resultadosFallosInstituciones = document.getElementById('resultadosPartidos');
    resultadosFallosInstituciones.innerHTML = `
        <div style="text-align: center; padding: 40px; font-size: 16px; color: #666;">
            <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #1f468d; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
            <div>Cargando fallos de instituciones...</div>
            <div style="font-size: 14px; margin-top: 10px;">Por favor aguarde un momento</div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;    fetch(`api.php?action=cargarFallosInstituciones&deporte=${deporte}&torneo=${torneo}&fecha=${fecha}`)
        .then(response => response.json())
        .then(data => {
            resultadosFallosInstituciones.innerHTML = '';

            const table = document.createElement('table');
            table.className = 'results-table2';

            // Crear el encabezado de la tabla
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            ['Temporada', 'Rueda', 'Serie', 'Nro Partido', 'Sanción', 'Fecha Fallo', 'Institución', 'Cantidad Sanción', 'Observaciones'].forEach(text => {
                const th = document.createElement('th');
                th.textContent = text;
                headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Crear el cuerpo de la tabla
            const tbody = document.createElement('tbody');
            data.forEach(fallo => {
                const tr = document.createElement('tr');
                const celdas = [
                    fallo.temporada,
                    fallo.rueda,
                    fallo.serie,
                    fallo.nro_partido,
                    fallo.sancion,
                    fallo.fecha_fallo,
                    fallo.institucion,
                    fallo.cant_sansion,
                    fallo.observaciones
                ];
                celdas.forEach(celda => {
                    const td = document.createElement('td');
                    td.textContent = celda;
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            table.appendChild(tbody);
            resultadosFallosInstituciones.appendChild(table);
        })
        .catch(error => {
            console.error('Error al cargar fallos:', error);
            alert("Hubo un error al cargar los fallos. Por favor, intenta de nuevo.");
        });
}

function cargarAmonestaciones() {
    const deporte = document.getElementById('deporte').value;
    const torneo  = document.getElementById('torneo').value;
    const fecha   = document.getElementById('fecha').value;    if (!deporte || !torneo || !fecha) {
        alert("Por favor, selecciona todos los filtros antes de cargar las amonestaciones.");
        return;
    }

    // Mostrar mensaje de carga
    const cont = document.getElementById('resultadosPartidos');
    cont.innerHTML = `
        <div style="text-align: center; padding: 40px; font-size: 16px; color: #666;">
            <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #1f468d; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            </div>
            <div>Cargando amonestaciones...</div>
            <div style="font-size: 14px; margin-top: 10px;">Por favor aguarde un momento</div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    fetch(`api.php?action=cargarAmonestaciones&deporte=${deporte}&torneo=${torneo}&fecha=${fecha}`)
        .then(r => {
            if (!r.ok) {
                throw new Error(`HTTP ${r.status}: ${r.statusText}`);
            }
            return r.json();
        })
        .then(data => {
            // Verificar si hay un error en la respuesta
            if (data.error) {
                console.error('Error SQL:', data.message);
                console.error('Query:', data.query);
                alert(`Error en consulta SQL: ${data.message}`);
                return;            }
            
            // Limpiar mensaje de carga y mostrar resultados
            cont.innerHTML = '';

            const tbl = document.createElement('table');
            tbl.className = 'results-table';

            const thead = document.createElement('thead');
            const trh = document.createElement('tr');            ['Fecha Fallo','Nro Partido','Rueda','Serie','Nombre Persona','Institución','Documento','Sanción','Cant. Sanción','Artículos','Cargo']
            .forEach((t, index) => {
                const th = document.createElement('th');
                th.textContent = t;
                if (index === 0 || index === 5) { // Ocultar Fecha Fallo (0) e Institución (5) en móvil
                    th.classList.add('hide-mobile');
                }
                trh.appendChild(th);
            });
            thead.appendChild(trh);
            tbl.appendChild(thead);

            const tbody = document.createElement('tbody');            data.forEach(row => {
                const tr = document.createElement('tr');
                [
                    row.fecha_fallo,      row.nro_partido,  row.cd_rueda, row.cd_serie,
                    row.nombre_persona,   row.insa,         row.documento,
                    row.sancion,          row.cant_sansion, row.articulos,
                    row.cargo
                ].forEach((val, index) => {
                    const td = document.createElement('td');
                    td.textContent = val ?? '';
                    if (index === 0 || index === 5) { // Ocultar Fecha Fallo (0) e Institución (5) en móvil
                        td.classList.add('hide-mobile');
                    }
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
            tbl.appendChild(tbody);
            cont.appendChild(tbl);
        })
        .catch(err => {
            console.error('Error al cargar amonestaciones:', err);
            alert("No se pudieron cargar las amonestaciones.");
        });
}
