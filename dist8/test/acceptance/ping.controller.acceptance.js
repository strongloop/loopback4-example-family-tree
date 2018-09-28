"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testlab_1 = require("@loopback/testlab");
const __1 = require("../..");
describe('PingController', () => {
    let app;
    let client;
    before(givenAnApplication);
    before(async () => {
        await app.boot();
        await app.start();
    });
    before(() => {
        client = testlab_1.createRestAppClient(app);
    });
    after(async () => {
        await app.stop();
    });
    it('invokes GET /ping', async () => {
        const res = await client.get('/ping?msg=world').expect(200);
        testlab_1.expect(res.body).to.containEql({ greeting: 'Hello from LoopBack' });
    });
    function givenAnApplication() {
        app = new __1.FamilyTreeApplication({
            rest: testlab_1.givenHttpServerConfig(),
        });
    }
});
//# sourceMappingURL=ping.controller.acceptance.js.map