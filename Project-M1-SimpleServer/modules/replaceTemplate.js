
module.exports = (htmlStr, loan)=>{ // fat arrow function or lambda
    let output = htmlStr.replace(/{%customerName%}/g, loan.customerName);
    output = output.replace(/{%phoneNumber%}/g, loan.phoneNumber);
    output = output.replace(/{%address%}/g, loan.address);
    output = output.replace(/{%loanAmount%}/g, loan.loanAmount);
    output = output.replace(/{%interest%}/g, loan.interest);
    output = output.replace(/{%loanTermYears%}/g, loan.loanTermYears);
    output = output.replace(/{%loanType%}/g, loan.loanType);
    output = output.replace(/{%description%}/g, loan.description);
    output = output.replace(/{%amount%}/g, ((loan.loanAmount * (loan.interest/100)) * loan.loanTermYears) + loan.loanAmount);
    return output;
}