const path  = require('path');
const menu = [
    {
        name:'机器人',
        type:'group',
        children:[
            {
                name:'mbot',
                type:'submenu',
                children:[
                    {
                        name:'打个招呼',
                        type:'item',
                        value:path.resolve(__dirname,'./test.sb2')
                    }
                ]
            }
        ]
    }
];
module.exports = menu;