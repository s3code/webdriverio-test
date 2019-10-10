var assert = require('assert');
var title = null;
var searchBox = $('//*[@id="container"]/div/div[1]/div[1]/div[2]/div[2]/form/div/div/input');
var popup= $('/html/body/div[2]/div/div/button');
browser.deleteAllCookies();

describe('Loading the url of flipkart', () => {
 
  it('User opens the browser and enters the url', () => {
    console.log("*********************  it-url ***************************************");
    browser.url('https://www.flipkart.com');
    title = browser.getTitle();
 
  });
  it('User verifies the title', () => {
       assert.strictEqual(title, 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
  });

  it('to enter realme mobile in the search box',()=>{

    var windows = browser.getWindowHandles();
    console.log("********************************* The list of windows. = "+ windows.length);

    /***
     * two ways to enter text in input box
     * using setValue() & addValue()
     *$("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input").setValue("Test User"); 
     $("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input").addValue('Test User');
     */
    //$("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input").setValue("Test User");
    $("/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/input").addValue('Test User');
//browser.pause(20000);
//    $('/html/body/div[2]/div/div/button').click();
   // popup.click();
    browser.pause(5000);
  //  popup.click();
   // searchBox.setValue('realme');
 });

 it('to get the text of the name text field',()=>{
   var text1 =$('/html/body/div[2]/div/div/div/div/div[2]/div/form/div[1]/label/span').getText();
   assert.strictEqual(text1,'Enter Email/Mobile number');
   browser.pause(10000);
 });
});