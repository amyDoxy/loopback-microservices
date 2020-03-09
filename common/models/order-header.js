'use strict';

module.exports = function(Orderheader) {
    Orderheader.beforeRemote('find', function(context, user, next){
        console.log(context);
        next();
        
    });
    
    Orderheader.getOrderHeader = function(cb){
        cb(null, 'test');
        
    };

    Orderheader.remoteMethod(
        'getOrderHeader', {
            http:{
                path: '/test',
                verb: 'get'
            },
            returns: {arg: 'test', type: 'string'}
    });

};
