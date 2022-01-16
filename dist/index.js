"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs/yargs"));
const generateKey = __importStar(require("./commands/generateKey"));
const signToken = __importStar(require("./commands/generateToken"));
const verifyToken = __importStar(require("./commands/verifyToken"));
const convertKey = __importStar(require("./commands/convertKey"));
const argsIndex = 2;
void yargs_1.default(process.argv.slice(argsIndex))
    .option('progress', { boolean: true, default: true, description: 'show progress of running commands' })
    .command(generateKey)
    .command(signToken)
    .command(verifyToken)
    .command(convertKey)
    //.command(convert)
    .strict()
    .usage('Usage: $0 <command> [options] :: note - each nested command got its own help page')
    .demandCommand(1, 'You need at least one command before moving on')
    .help().argv;
//# sourceMappingURL=index.js.map