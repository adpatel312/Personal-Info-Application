#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

/**
 * cli utility that gathers name, age then tells your magic number
 *
*/

program
  .version('0.0.1')
  .option('-f, --first-name [value]', 'First name')
  .option('-l, --last-name [value]', 'Last name')
  .option('-y, --age <n>', 'Age',parseInt)
  .option('-s, --social-security', 'Social Security Number')
  .parse(process.argv);

console.log('Velcome to our little program:');
if (!program.socialSecurity) {

if (program.firstName) console.log ('  First Name: %j',program.firstName);
if (program.lastName) console.log ('  Last Name: %j',program.lastName);
if (program.age) console.log ('  Age: %j',program.age);
function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, "").
      replace(/\*\/[^\/]+$/, "");
}
}
var letterBody = hereDoc(function() {/*!
Dear friend,

I am Prince Fayed W. Bolkiah, the eldest son of Prince Jeffrey Bolkiah former finance minister of Brunei, the tiny oil-rich sultanate on the Gulf Island of Borneo. I save your time by not amplifying my extended royal family history, which has already been disseminated by the international media during the controversial dispute that erupted between my father and his tepbrother, the sultan of Brunei Sheik Muda Hassanal Bolkiah.

As you may know from the international media,The sultan had accused my father of financial mismanagement and impropriety of us$14.8 billion dollars this was as a result of the Asian Financial crisis that made my father company Amedeo Development Company and government owned Brunei investment company to be declared bankrupt during his tenure in the office. However my father was kept under house arrest, his bank account and private properties including a crude oil export refinery were later confiscated by the sultanate to avoid further prosecution from the sultan and his security operatives, but before I could do that I was placed under house arrest by the sultan and not have access to phone but I have a palm V hand -held computer from which I am sending you this mail. Some of the guard here are still loyal to me, so they would be my contact with you if there is any documents I need to send to you to enable you have access to this funds and invest it for me.

Before my in-castration, I went ahead to dispatch the sum of five undred million United States Dollars {USD$500,000,000.00} in cash under special arrangement into the custody of different private Banks and trust company's for safe keeping abroad. The money where splited and kept in the following countries, : in Canada, France, Spain, Holland andin London. Firstly, you will be required to travel to London to claim the money there before prceeding to other countries.

I seek your good assistance to invest these funds into a profitable investment in your country to facilitate future survival for my family abroad. After due deliberation with my aids we decides to offer a certain percentage to you as compensation for your co-operation and kind sincerity to carry out this assignment.

Since there will be an expenditure from your side, I will advice you not to worry about it because you will be reimburse any amount you may spend as to enable this transaction get to it's final dream, for both local and international expenses will be given to you back while you will be part of the beneficiary of any investment made with this cash, to add to that, I will like to let to your understand that all this is not part of your financial compensation that will be given to you.

During this dispensation Please I count on your absolute confidentiality, transparency and trust while looking forward to your prompt reply towards a swift conclusion of this transaction. Many thanks and blessing remains with you.

Finally, your financial compensation will be the 15% of the total cash. That is 15% of ( u.s $500,000,000.00 ).

Thanks.
Prince Fayed.W. Bolkiah.
Please reply here: princefayed@todito.com
*/});
if (program.socialSecurity) process.stdout.write ( letterBody);
