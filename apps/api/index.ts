import express from "express"
import { prismaClient } from "store/client";
import { ZWebsite, ZWebsiteId } from "./zod.schema";


const app = express();
app.use(express.json());



app.post("/website", async (req, res) => {
    try {
        const { url } = ZWebsite.parse(req.body);
        const website = await prismaClient.website.create({ data: { url } })

        res.json({
            id: website.id
        })
    } catch (error: any) {
        res.status(500).json({
            error: error.message
        })
    }
});

app.get("/status/:websiteId", async (req, res) => {     
    try {
        const { websiteId } = ZWebsiteId.parse(req.params);
        const website = await prismaClient.website.findUnique({ where: { id: websiteId } })
        if (!website) {
            res.status(404).json({
                error: "Website not found"
            })
            return
        }
        const ticks = await prismaClient.websiteTick.findMany({ where: { website_id: websiteId } })
        res.json({
            ticks
        })
        
    } catch (error: any) {
        res.status(500).json({
            error: error.message
        })
    }
})

app.listen(process.env.PORT || 3001, () => {
    console.log(`Server is running on port ${process.env.PORT || 3001}`);
})
