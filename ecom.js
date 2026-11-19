/* function that takes in the price of an item, 
the item name, and output final price considering things,
 like tax rate,discount,deliverable fees as well as item price name. 
*/

   function calculateFinalPrice(price, itemName){
    let taxRate = 0.1; 
    let discount = 0.2; 
    let deliveryFee = 5; 

    let total= (price * (1-discount)) * (1+taxRate) + deliveryFee;

  console.log(`The final price of ${itemName } is $${total.toFixed(2)}`);
   }

   calculateFinalPrice(80, "Shoes");