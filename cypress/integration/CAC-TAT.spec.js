/// <reference types="cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {

  const THREE_SECONDS_IN_MS = 3000

  beforeEach('verifica o título da aplicação', function () {
    cy.visit('./src/index.html')
  })
  //aula 1
  it('Title', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  });

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = 'Lorem ipsum purus faucibus tempor, aliquet inceptos pellentesque. odio ipsum orci luctus eu per et imperdiet, fusce cursus taciti pretium et enim non porttitor, luctus ut commodo cras mattis tellus. proin viverra at odio libero cras purus convallis taciti aenean, diam etiam porta feugiat aenean leo volutpat cubilia hendrerit, sodales vivamus venenatis aliquam sit elementum hendrerit donec. platea nisi posuere mollis per litora senectus, consectetur venenatis non suscipit posuere hendrerit, habitasse diam in orci lacus. non mauris habitant suscipit hac molestie in sociosqu dolor vulputate imperdiet turpis facilisis pharetra vehicula, ultricies fringilla sociosqu arcu scelerisque habitant lobortis cursus lobortis est vitae ultricies.'

    cy.clock()

    cy.get('#firstName').type('Isadora Laís')
    cy.get('#lastName').type('Louise Lima')
    cy.get('#email').type('isadora-lima75#andrade,com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('.button').click()

    cy.get('#white-background').should('be.visible')

    cy.tick(3000)

    cy.get('.success').should('not.be.visible', '')
  });
  //aula 2
  it('Exercício extra 1', () => {
    const longText = 'Lorem ipsum purus faucibus tempor, aliquet inceptos pellentesque. odio ipsum orci luctus eu per et imperdiet, fusce cursus taciti pretium et enim non porttitor, luctus ut commodo cras mattis tellus. proin viverra at odio libero cras purus convallis taciti aenean, diam etiam porta feugiat aenean leo volutpat cubilia hendrerit, sodales vivamus venenatis aliquam sit elementum hendrerit donec. platea nisi posuere mollis per litora senectus, consectetur venenatis non suscipit posuere hendrerit, habitasse diam in orci lacus. non mauris habitant suscipit hac molestie in sociosqu dolor vulputate imperdiet turpis facilisis pharetra vehicula, ultricies fringilla sociosqu arcu scelerisque habitant lobortis cursus lobortis est vitae ultricies.'
    cy.get('#open-text-area').type(longText, {delay: 0})
  });

  it('Exercício extra 2 - email com formatação inválida', () => {

    cy.clock()

    cy.get('#firstName').type('Isadora Laís')
    cy.get('#lastName').type('Louise Lima')
    cy.get('#email').type('isadora-lima75#andrade,com')
    cy.get('#open-text-area').type('Lorem ipsum litora aenean donec consectetur varius accumsan praesent diam')
    cy.get('.button').click()
    cy.get('.error > strong').should('be.visible', '')

    cy.tick(THREE_SECONDS_IN_MS)

    cy.get('.error').should('not.be.visible')
  });

  it('Exercício extra 3 - passar letras no campo telefone', () => {
    cy.get('#phone').type('asaddsfdf').should('have.value', '')
  });

  it('Exercício extra 4 - exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    
    cy.clock()

    cy.get('#firstName').type('Isadora Laís')
    cy.get('#lastName').type('Louise Lima')
    cy.get('#email').type('isadora-lima75@andrade.com')
    cy.get('#open-text-area').type('Lorem ipsum litora aenean donec consectetur varius accumsan praesent diam')
    cy.get('#phone-checkbox').click()
    cy.get('.button').click()
    cy.get('.error > strong').should('be.visible', '')

    cy.tick(THREE_SECONDS_IN_MS)

    cy.get('.error').should('not.be.visible')
  });

  it('Exercício extra 5 - Usar clear ', () => {
    cy.get('#firstName').type('Isadora Laís').should('have.value', 'Isadora Laís')
    cy.get('#firstName').clear().should('have.value', '')
    cy.get('#lastName').type('Louise Lima').should('have.value', 'Louise Lima')
    cy.get('#lastName').clear().should('have.value', '')
    cy.get('#email').type('isadora-lima75@andrade.com').should('have.value', 'isadora-lima75@andrade.com')
    cy.get('#email').clear().should('have.value', '')
    cy.get('#phone').type('1234567890').should('have.value', '1234567890')
    cy.get('#phone').clear().should('have.value', '')
  });

  it('Exercício extra 6 - exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    
    cy.clock()
    
    cy.get('.button').click()
    cy.get('.error > strong').should('be.visible', '')

    cy.tick(THREE_SECONDS_IN_MS)

    cy.get('.error').should('not.be.visible')
  });

  it('Exercício extra 7 - envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
  });

  it('Exercício extra 8 - cy.contains()', () => {
    cy.get('#firstName').type('Isadora Laís')
    cy.get('#lastName').type('Louise Lima')
    cy.get('#email').type('isadora-lima75@andrade.com')
    cy.get('#open-text-area').type('teste')
    
    cy.contains('.button','Enviar').click()
  });
  //aula 3
  //Selecionando opções em campos de seleção suspensa
  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product').select('youtube')
    cy.get('#product').should('have.value', 'youtube')
  });
  //Exercício extra 1
  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product').select('mentoria')
    cy.get('#product').should('have.value', 'mentoria')
  });
  //Exercício extra 2
  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product').select(1)
    cy.get('#product').should('have.value', 'blog')
  });
  //aula 4
  //Marcando inputs do tipo radio
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]').check()
    cy.get(':nth-child(4) > input').should('have.value', 'feedback')
  });

  //Exercício extra
  it('marca cada tipo de atendimento', () => {
    cy.get('input[type="radio"]')
    .should('have.length',3)
    .each(function($radio) {
      cy.wrap($radio).check()
      cy.wrap($radio) .should('be.checked')
    })
  });
  //aula 5
  //Marcando (e desmarcando) inputs do tipo checkbox
  //Exercício
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]').check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
  });
  //Exercício extra
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    
    cy.clock()
    
    cy.get('#firstName').type('Isadora Laís')
    cy.get('#lastName').type('Louise Lima')
    cy.get('#email').type('isadora-lima75@andrade.com')
    cy.get('#open-text-area').type('Lorem ipsum litora aenean donec consectetur varius accumsan praesent diam')
    cy.get('#phone-checkbox').check()
    cy.get('.button').click()
    cy.get('.error > strong').should('be.visible', '')

    cy.tick(THREE_SECONDS_IN_MS)

    cy.get('.error').should('not.be.visible')
  });
    //aula 6
    //Fazendo upload de arquivos com Cypress
    //Exercício
  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
    .should('not.have.value')
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
  });
  //Exercício extra 1
  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
    .should('not.have.value')
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json',{action:'drag-drop'})
    .should(function($input){
      expect($input[0].files[0].name).to.equal('example.json')
    })
  });
  //Exercício extra 2
  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
      cy.fixture('example.json').as('sampleFile')
      cy.get('input[type="file"]')
      .selectFile('@sampleFile')
      .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
      })
  });
  //aula 7
  //Lidando com links que abrem em outra aba
  //Exercício
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.get('#privacy a').should('have.attr','target','_blank')
  });
//Exercício extra 1
  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.get('#privacy a').invoke('removeAttr','target').click()
    cy.contains('Talking About Testing').should('be.visible')
  });
  

  //aula 11
  //funcionalidade Cypress._.times()
  //Use para rodar um mesmo teste várias vezes.
  Cypress._.times(5, () => {
    it('funcionalidade Cypress._.times()', () => {
    
      cy.clock()
  
      cy.get('#firstName').type('Isadora Laís')
      cy.get('#lastName').type('Louise Lima')
      cy.get('#email').type('isadora-lima75@andrade.com')
      cy.get('#open-text-area').type('Lorem ipsum litora aenean donec consectetur varius accumsan praesent diam')
      cy.get('#phone-checkbox').click()
      cy.get('.button').click()
      cy.get('.error > strong').should('be.visible', '')
  
      cy.tick(THREE_SECONDS_IN_MS)
  
      cy.get('.error').should('not.be.visible')
    });
  
    });

    //Cypress._.repeat
    it('simulates sending a CTRL+V command to paste a long text on a textarea field', () => {

        const longText = Cypress._.repeat('Lorem ip@1', 20)

      cy.clock()
  
      cy.get('#firstName').type('Isadora Laís')
      cy.get('#lastName').type('Louise Lima')
      cy.get('#email').type('isadora-lima75#andrade,com')
      cy.get('#open-text-area').invoke('val', longText).should('have.value', longText)
      cy.get('.button').click()
      cy.get('.error > strong').should('be.visible', '')
  
      cy.tick(THREE_SECONDS_IN_MS)
  
      cy.get('.error').should('not.be.visible')
    });

   //Invoque atributos e métodos de elementos com o comando .invoke()
   it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  //Crie um teste chamado preenche a area de texto usando o comando invoke
  it('preenche a area de texto usando o comando invoke', () => {
    const longText = Cypress._.repeat('1234567890', 20)

    cy.get('#open-text-area').invoke('val', longText).should('have.value', longText)
  });

  //cy.request()
  //executar requisições HTTP
  //possibilidade de executar comandos à nível de rede
  //inspecionar > console
  it('faz uma requisição HTTP', () => {
      cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html').should(function(response){
        const {status, statusText, body} = response
        expect(response.status).to.equal(200)
        expect(response.statusText).to.equal('OK')
        expect(body).to.include('CAC TAT')
      })
  });

  //aula 12
  //Desafio (encontre o gato) 🐈
  it.only('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('#cat')
      .invoke('show')
      .should('be.visible')
      cy.get('#title')
      .invoke('text', 'CAT TAT')
      cy.get('#subtitle')
      .invoke('text', 'Eu 💖 gatos!')

  })
})