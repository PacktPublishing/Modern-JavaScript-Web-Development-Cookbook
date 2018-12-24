/* @flow */
"use strict";

const { deleteRegion } = require("./restful_regions");

const mockRes = require("node-mocks-http");

describe("deleteRegion", () => {
    let mDb;
    let mRes;
    beforeEach(() => {
        mDb = { query: jest.fn() };
        mRes = new mockRes.createResponse();
    });

    it("should not delete a region with cities", async () => {
        mDb.query.mockReturnValueOnce(Promise.resolve([1]));
        await deleteRegion(mRes, mDb, "FK", "22");
        expect(mRes.statusCode).toBe(405);
    });

    it("should delete a region without cities", async () => {
        mDb.query
            .mockReturnValueOnce(Promise.resolve([]))
            .mockReturnValueOnce(
                Promise.resolve({
                    info: { affectedRows: 1 }
                })
            );
        await deleteRegion(mRes, mDb, "ST", "12");
        expect(mRes.statusCode).toBe(204);
    });

    it("should produce a 404 for non-existing region", async () => {
        mDb.query
            .mockReturnValueOnce(Promise.resolve([]))
            .mockReturnValueOnce(
                Promise.resolve({
                    info: { affectedRows: 0 }
                })
            );
        await deleteRegion(mRes, mDb, "IP", "24");
        expect(mRes.statusCode).toBe(404);
    });
});
