import { z } from "zod";
import { WebsiteStatus } from "store/client";


export const ZWebsite = z.object({
    url: z.string().url()
})


export const ZWebsiteTick = z.object({
    response_time_ms: z.number(),
    status: z.nativeEnum(WebsiteStatus),
    region: z.string()
})
export const ZWebsiteId = z.object({
    websiteId: z.string()
})
export const ZRegion = z.object({
    name: z.string()
})
