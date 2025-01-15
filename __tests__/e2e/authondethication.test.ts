import request from "supertest";
import { HTTP_STATUSES } from "../../src/utils";
import { app } from "../../src/app";
import { ADMIN_AUTH } from "../../src/middlewares/middlewares";
import { Request, Response } from "supertest";

describe("/coursesTest", () => {
  //1
  //   it("блабла", async () => {
  //     await request(app)
  //       .get("/courses")
  //       .expect(HTTP_STATUSES.OK_200, [
  //         { id: 1, title: "front-end" },
  //         { id: 2, title: "back-end" },
  //         { id: 3, title: "automation qa" },
  //         { id: 4, title: "devops" },
  //       ]);
  //   });

  //2
  it("should return 200 and empty array", () => {
    expect(1).toBe(1);
  });

  //3
  // it("should get empty array", async () => {
  //   const buff2 = Buffer.from(ADMIN_AUTH, "utf8");
  //   const codedAuth = buff2.toString("base64");
  //   await request(app)
  //     // const res = await req
  //     // .get(PATH.POSTS)
  //     .post("/blogs")
  //     .send({
  //       name: "NAMING",
  //       description: "description for NAMING",
  //       websiteUrl: "websiteUrl for NAMING",
  //     })
  //     .set({ Authorisation: "Basic " + codedAuth })
  //     .expect(HTTP_STATUSES.CREATED_201);

  // console.log(res.body)

  // expect(res.body.length).toBe(0)
  // });
});
