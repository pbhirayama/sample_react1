import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });
// global.TextEncoder = TextEncoder;
// // // @ts-expect-error
// global.TextDecoder = TextDecoder;
