"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local_Auth_Strategy = void 0;
const passport_1 = require("@nestjs/passport");
class Local_Auth_Strategy extends (0, passport_1.AuthGuard)('local') {
    constructor() {
        super();
    }
}
exports.Local_Auth_Strategy = Local_Auth_Strategy;
//# sourceMappingURL=local-auth.guard.js.map