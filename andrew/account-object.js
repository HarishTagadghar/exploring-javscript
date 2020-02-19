let myAccount = {
    name:'harish',
    income:0,
    expenses:0
}

function addamount(account,add) {
    account.income = account.income + add;
}
function expenseamount(account, expense) {
 account.expenses = account.expenses + expense
}
function resetaccount(account) {
    account.income = 0;
    account.expense = 0;
}

function statement(account) {
    return `${myAccount.name} your monthly income is ${myAccount.income}$ and your monthly expense is ${myAccount.expenses}$ and your remaining is ${myAccount.income - myAccount.expenses}$ `
}
addamount(myAccount,2000)
expenseamount(myAccount,200)
console.log(statement());
