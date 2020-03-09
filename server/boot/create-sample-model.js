'use strict';

var async = require('async');

module.exports = function(app) {
    var postgresDB = app.dataSources.postgresDB;
    console.log("Calling createOrderHeaders");
    async.parallel({
        orderHeaders: async.apply(createOrderHeaders)
    }, function(err, results){
        if(err) throw err;
        console.log('Models created successfully');
        
    });
    

    function createOrderHeaders(cb){
        postgresDB.automigrate('OrderHeader', function(err){
            if(err) throw cb(err);

            var OrderHeader = app.models.OrderHeader;
            OrderHeader.create([
                {
                    dPk: 1,
                    sourceOrderNum: 'Ord-1',
                    orderNum: '1',
                    customerName: 'Galaxy',
                    inventoryOrgCode: 'BAR-GX'
                }, 
                {
                    dPk: 2,
                    sourceOrderNum: 'Ord-2',
                    orderNum: '2',
                    customerName: 'Galaxy',
                    inventoryOrgCode: 'BAR-GX2'
                  }, 
                {
                    dPk: 3,
                    sourceOrderNum: 'Ord-3',
                    orderNum: '3',
                    customerName: 'Galaxy',
                    inventoryOrgCode: 'BAR-GX3'
                }, 
                  
            ], cb);
        });
    }
};
