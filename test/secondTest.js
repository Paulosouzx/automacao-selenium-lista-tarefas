const {Builder, By, Key} = require ("selenium-webdriver")
const assert = require ("assert")
const should = require ("chai").should()


//Bloco Describe - Agrupamento de casos de teste. Funcionalidade a ser testada.
describe("Segundo teste", function(){
    //Bloco IT - Teste Individual
    it("Primeiro caso de teste", async function(){

        //Abrir o navegador
        let driver = await new Builder().forBrowser("firefox").build()
        
        //Navegar ate o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")
        
        //Dar uma pausa na execucao da funcao
        await driver.sleep(2000)
        
        //Digitar a nova tarefa e enter
        
        let itens = ("Aprender automacao com selenium")
        
        //Item 1
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender automacao com selenium", Key.RETURN)
        
        //Assertion
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
            return value
        })  
        
        //Assertion usando o node puro
        assert.strictEqual(seleniumText, ("Aprender automacao com selenium"))
        
        //Assertion usando Chai
        seleniumText.should.equal("Aprender automacao com selenium")
        
        //Fechar o navegador
         await driver.quit()
    
    });
    it("Segundo caso de teste", async function(){

        //Abrir o navegador
        let driver = await new Builder().forBrowser("firefox").build()
        
        //Navegar ate o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")
        
        //Dar uma pausa na execucao da funcao
        await driver.sleep(2000)
        
        //Digitar a nova tarefa e enter
        
        let itens = ("Aprender automacao com selenium")
        
        //Item 1
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender automacao com selenium", Key.RETURN)
        
        //Assertion
        let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
            return value
        })  
        
        //Assertion usando o node puro
        assert.strictEqual(seleniumText, ("Aprender automacao com selenium"))
        
        //Assertion usando Chai
        seleniumText.should.equal("Aprender automacao no JS")
        
        //Fechar o navegador
         await driver.quit()
    
    })

})