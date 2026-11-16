import type {MetadataRoute} from "next";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",allow:"/",disallow:["/checkout","/cart","/search"]},sitemap:"https://valart.com.au/sitemap.xml",host:"https://valart.com.au"}}
