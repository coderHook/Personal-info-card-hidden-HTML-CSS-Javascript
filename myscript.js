let count = 0;
function myFunction(){
  count += 1;
  return $('#counter').empty().append('+ '+count);
}
