//Color const
const c_reset = '\u001b[0m';
const c_red = '\u001b[31m';
const c_green = '\u001b[32m';

//Declare
let quest_count = 0;
let INIT_PHASE = false;

//Quest basic object
let quest_1 = {
    count: 0,
    objective: Math.random() * 10,
    command: 'Alt + Whatever',
    description: 'This should be auto-filled',
    logo: 'img/Firefox_logo.png'
}
let quest_2 = {
    count: 0,
    objective: Math.random() * 10,
    command: 'Alt + Whatever',
    description: 'This should be auto-filled',
    logo: 'img/Firefox_logo.png'

}
let quest_3 = {
    count: 0,
    objective: Math.random() * 10,
    command: 'Alt + Whatever',
    description: 'This should be auto-filled',
    logo: 'img/Firefox_logo.png'

}
let quest_4 = {
    count: 0,
    objective: Math.random() * 10,
    command: 'Alt + Whatever',
    description: 'This should be auto-filled',
    logo: 'img/Firefox_logo.png'

}
let quest_5 = {
    count: 0,
    objective: Math.random() * 10,
    command: 'Alt + Whatever',
    description: 'This should be auto-filled',
    logo: 'img/Firefox_logo.png'

}

//Init
if (INIT_PHASE === false) {
    //Date init
    let today = new Date()
    document.getElementById('today').innerHTML = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(`INIT_PHASE : today_date : ${c_green}✓${c_reset}`);
    INIT_PHASE = true;

    //Daily quest init
    document.getElementById('quest_1_command').innerHTML = quest_1.command;
    document.getElementById('quest_1_logo').src = quest_1.logo;
    document.getElementById('quest_1_description').innerHTML = quest_1.description;
    document.getElementById('quest_2_command').innerHTML = quest_2.command;
    document.getElementById('quest_2_logo').src = quest_2.logo;
    document.getElementById('quest_2_description').innerHTML = quest_2.description;
    document.getElementById('quest_3_command').innerHTML = quest_3.command;
    document.getElementById('quest_3_logo').src = quest_3.logo;
    document.getElementById('quest_3_description').innerHTML = quest_3.description;
    document.getElementById('quest_4_command').innerHTML = quest_4.command;
    document.getElementById('quest_4_logo').src = quest_4.logo;
    document.getElementById('quest_4_description').innerHTML = quest_4.description;
    document.getElementById('quest_5_command').innerHTML = quest_5.command;
    document.getElementById('quest_5_logo').src = quest_5.logo;
    document.getElementById('quest_5_description').innerHTML = quest_5.description;
}




