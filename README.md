Configurar projeto:
====================

- Clonar projeto
- Acessar o projeto
- Criar arquivo **.env** baseado no arquivo **.env.example**
- Executar o comando: **docker-compose build**
- Executar o comando: **docker-compose up** irá processar o arquivo **log.txt** na raiz do projeto.


Observações sobre o projeto:
============================
- Esse projeto foi construído de forma que permite transformar em uma ferramenta cli para que seja possível adicionar em máquinas para processar logs de tempo em tempo. Como configurar:
    - Clonar projeto
    - Acessar o projeto
    - Criar arquivo **.env** baseado no arquivo **.env.example**
    - Executar o comando: **npm i**
    - Executar o comando: **npm i -g .**
    - Adicionar o comando no cronjob: **collect-metrics --path=./logs.txt**

Documentos sobre arquitetura:
==============================
- Imagem da arquitetura: [arquivo](https://github.com/tiago123456789/challenge-api-melhor-envio/blob/master/arquitetura.png)
- Documento que descreve os detalhes sobre a arquitetura: [arquivo](https://github.com/tiago123456789/challenge-api-melhor-envio/blob/master/descricao_arquitetura.pdf)