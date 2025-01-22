//'use strict';
// - Sai lầm: nghĩ rằng con trỏ this sẽ trỏ đến đối tượng nằm trong phạm vi khai báo
this.x = 9; // this nayf laf cuar moduel
const test = function() {
    //x = 3; 
    // khi không khai báo let, var, const thì trong JS nó sẽ mặc định là biến toàn cục global
    // khắc phục trường hợp khai báo biến toàn cục ngầm thì sử dụng 'use strict'; vì nó không cho tạo biến toàn cục ngầm định
    this.a = 3; 
    //=> khi khia báo var như thế này thì khai báo value cho biến x 
    //chứ không phải khai báo thuộc tính và value cho object this
    //this.x = 4;

    const fn = ()=>{
   
        console.log(this.a, 'fn'); 
        // tóm lại:  this là một object , x là thuộc tính property, còn 4 là value của thuộc tính
        // => khi khai báo this.x nghĩa là nó sẽ kiểm tra trong đối tượng (như window, global, hoặc undefined) 
        // this có thuộc tính x hay ko
        // nếu không không nó sẽ trả về là undefined
        // Giải quyết gán x làm thuộc tính của this ở trong hàm test
        // => this.x = 4;
    }
    const fn1 = function(){
        console.log(this.a, 'fn1');
    }

   fn();
   fn1();

    return fn;

}
//module.exports.a = 1;
// this.x=8;
// this.y=7;
// this.z=6;
test()
