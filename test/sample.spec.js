describe('show todo', function () {
  let page;

  before (async function () {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  after (async function () {
    await page.close();
  });
  //测试题目
  it('should have correct title', async function() {
    expect(await page.title()).to.eql('Todolist');
})
  //测试待办事项
  it('should show todo correct', async function() {
    let todoList = await page.waitFor('#todolist');
    const expectundoneContent1 = await page.evaluate(todoList => todoList.querySelector('#item').textContent,todoList);
    const expectundoneContent2 = await page.evaluate(todoList => todoList.querySelector('#item').nextSibling.textContent, todoList);
    expect(expectundoneContent1).to.eql('game time');
    expect(expectundoneContent2).to.eql('sleep time');
  }) 
});

describe('add todo', function () {
  let page;

  before (async function () {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  after (async function () {
    await page.close();
  });
  //测试新增待办事项
  it('should new todo correct', async function() {
    await page.click('#new-todo', {delay: 500});
    await page.type('#new-todo', 'reading time', {delay: 50});
    await page.click('#Add',{delay: 50});
    let todoList = await page.waitFor('#todolist');
    const expectInputContent = await page.evaluate(todoList => todoList.querySelector('p:last-child').textContent, todoList);
    expect(expectInputContent).to.eql('reading time');
  }) 

});

describe('change todo', function () {
  let page;

  before (async function () {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  after (async function () {
    await page.close();
  });
  //测试待办事项变为已完成事项
  it('should new todo correct', async function() {
    let oldtodoList = await page.waitFor('#todolist');
    const oldContent= await page.evaluate(todoList => todoList.querySelector('p:last-child').textContent, oldtodoList);
    await page.click('p:last-child', {delay: 500})
    let newtodoList = await page.waitFor('#todolist');
    const expectChangeContent = await page.evaluate(todoList => todoList.querySelector('pre:last-child').textContent, newtodoList);
    expect(expectChangeContent).to.eql(oldContent);
  }) 
});
