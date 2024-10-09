"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'mongo',
    connector: 'mongodb',
    url: 'mongodb+srv://pos_test:DoUkMVzOYjEiUWky@pos.osekwof.mongodb.net/pos?retryWrites=true&w=majority&appName=pos',
    useNewUrlParser: true,
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
let MongoDataSource = class MongoDataSource extends repository_1.juggler.DataSource {
    static dataSourceName = 'mongo';
    static defaultConfig = config;
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.MongoDataSource = MongoDataSource;
exports.MongoDataSource = MongoDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.mongo', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongoDataSource);
//# sourceMappingURL=mongo.datasource.js.map