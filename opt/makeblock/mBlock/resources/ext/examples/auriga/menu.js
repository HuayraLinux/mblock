const path  = require('path');
const menu = [
    {
        name:'机器人1111',
        type:'group',
        children:[
            {
                name:'auriga',
                type:'submenu',
                children:[
                    {
                        name:'打个招呼11111',
                        type:'item',
                        value:path.resolve(__dirname,'./arg.sb2')
                    }
                ]
            }
        ]
    }
];
module.exports = menu;