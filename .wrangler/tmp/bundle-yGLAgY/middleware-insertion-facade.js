				import worker, * as OTHER_EXPORTS from "D:\\Boomi\\ratelimited-api\\index.ts";
				import * as __MIDDLEWARE_0__ from "D:\\Boomi\\ratelimited-api\\node_modules\\wrangler\\templates\\middleware\\middleware-ensure-req-body-drained.ts";
import * as __MIDDLEWARE_1__ from "D:\\Boomi\\ratelimited-api\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				
				worker.middleware = [
					__MIDDLEWARE_0__.default,__MIDDLEWARE_1__.default,
					...(worker.middleware ?? []),
				].filter(Boolean);
				
				export * from "D:\\Boomi\\ratelimited-api\\index.ts";
				export default worker;