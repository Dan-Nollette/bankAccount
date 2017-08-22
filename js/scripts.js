//Business Logic
function Account(name, firstDeposit){
  this.name = "name";
  this.balance = firstDeposit;
}

Account.prototype.deduct = function(withdrawal){
  this.balance -= withdrawal;
}

Account.prototype.credit = function(deposit){
  this.balance += deposit;
}

Account.prototype.displayPrice = function(){
  return "$&nbsp;" + this.balance;
}

//User Interface Logic

$(document).ready(function(){
  var newAccount = new Account("", 0);

  $("#new-account").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var firstDeposit = parseFloat($("#deposit1").val());
    newAccount.name = name;
    newAccount.balance = firstDeposit;
    $(".output").append(newAccount.displayPrice());
  });

  $("#manage").submit(function(event){
    event.preventDefault();
    var deposit = parseFloat($("#deposit").val());
    var withdrawal = parseFloat($("#withdrawal").val());
    if (deposit) {
      newAccount.credit(deposit);
    }
    if (withdrawal) {
      newAccount.deduct(withdrawal);
    }
    $(".output").text("");
    $(".output").append(newAccount.displayPrice());
  });
});
