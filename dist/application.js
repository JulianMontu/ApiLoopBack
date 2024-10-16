"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apiloopback27Application = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const rest_explorer_1 = require("@loopback/rest-explorer");
const service_proxy_1 = require("@loopback/service-proxy");
const path_1 = tslib_1.__importDefault(require("path"));
const sequence_1 = require("./sequence");
const admin_strategy_1 = require("./strategies/admin.strategy");
const datasources_1 = require("./datasources"); // Asegúrate de que la ruta sea correcta
class Apiloopback27Application extends (0, boot_1.BootMixin)((0, service_proxy_1.ServiceMixin)((0, repository_1.RepositoryMixin)(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path_1.default.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.configure(rest_explorer_1.RestExplorerBindings.COMPONENT).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        // Registra la fuente de datos MongoDB
        this.dataSource(datasources_1.MongoDataSource);
        // Registra la estrategia
        (0, authentication_1.registerAuthenticationStrategy)(this, admin_strategy_1.AdministradorStrategy);
        this.component(authentication_1.AuthenticationComponent);
    }
}
exports.Apiloopback27Application = Apiloopback27Application;
//# sourceMappingURL=application.js.map