const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{

    await page.goto('https://8081-fabbcafddfabcdefabebcfadeaccebbacdbbfb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h2');
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{

    await page.goto('https://8081-fabbcafddfabcdefabebcfadeaccebbacdbbfb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const result2 = await page.evaluate(()=>{
      let heading = document.querySelector("#heading");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{

    await page.goto('https://8081-fabbcafddfabcdefabebcfadeaccebbacdbbfb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    const href1 = await page.evaluate(()=>{
      let heading = document.querySelector("a[href]#login");
      return heading.innerHTML;
    })
    
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fabbcafddfabcdefabebcfadeaccebbacdbbfb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
   
    const href2 = await page.evaluate(()=>{
      let heading = document.querySelector("a[href]#table");
      return heading.innerHTML;
    })

    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fabbcafddfabcdefabebcfadeaccebbacdbbfb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
   
    const href3 = await page.evaluate(()=>{
      let heading = document.querySelector("a[href]#about");
      return heading.innerHTML;
    })
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

