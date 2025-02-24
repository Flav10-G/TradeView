fetch("https://www.okanebox.com.br/api/acoes/hist/PETR4/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("PETR4").textContent = `PETR4: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("PETR4").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/MXRF11/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("MXRF11").textContent = `MXRF11: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("MXRF11").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/VALE3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("VALE3").textContent = `VALE3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("VALE3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/ITUB4/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("ITUB4").textContent = `ITUB4: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("ITUB4").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/ELET3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("ELET3").textContent = `ELET3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("ELET3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/EMBR3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("EMBR3").textContent = `EMBR3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("EMBR3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/MGLU3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("MGLU3").textContent = `MGLU3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("MGLU3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/BBDC4/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("BBDC4").textContent = `BBDC4: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("BBDC4").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/SBSP3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("SBSP3").textContent = `SBSP3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("SBSP3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/CRFB3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("CRFB3").textContent = `CRFB3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("CRFB3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/ASAI3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("ASAI3").textContent = `ASAI3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("ASAI3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/ABEV3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("ABEV3").textContent = `ABEV3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("ABEV3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/ELET6/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("ELET6").textContent = `ELET6: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("ELET6").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/TOTS3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("TOTS3").textContent = `TOTS3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("TOTS3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

fetch("https://www.okanebox.com.br/api/acoes/hist/BBDC3/20220101/20220201/")
  .then(res => res.json())
  .then(data => {
    // Verifica se há dados na resposta
    if (Array.isArray(data) && data.length > 0) {
      // Pega o último preço (PREULT)
      let ultimoPreco = data[data.length - 1].PREULT;

      // Exibe o preço no HTML
      document.getElementById("BBDC3").textContent = `BBDC3: R$ ${ultimoPreco.toFixed(2)}`;
    } else {
      document.getElementById("BBDC3").textContent = "Dados não encontrados";
    }
  })
  .catch(err => {
    document.body.innerHTML = `<p>Erro ao buscar dados: ${err}</p>`;
  });

































6