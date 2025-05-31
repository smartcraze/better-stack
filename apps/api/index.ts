
import express from "express"
const app = express();
import { prismaClient } from "store/client";

app.use(express.json());

app.post("/website", async (req, res) => {
    if (!req.body.url) {
        res.status(411).json({});
        return
    }
    const website = await prismaClient.website.create({
        data: {
            url: req.body.url,
            timeAdded: new Date()
        }
    })

    res.json({
        id: website.id
    })
});

app.get("/status/:websiteId", (req, res) => {


})

app.listen(process.env.PORT || 3001);