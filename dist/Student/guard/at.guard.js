"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtAuthGuad = void 0;
const passport_1 = require("@nestjs/passport");
class AtAuthGuad extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super();
    }
}
exports.AtAuthGuad = AtAuthGuad;
//# sourceMappingURL=at.guard.js.map