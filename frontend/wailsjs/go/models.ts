export namespace main {
	
	export class Addresses {
	    connected: boolean;
	    alias: boolean;
	
	    static createFrom(source: any = {}) {
	        return new Addresses(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.connected = source["connected"];
	        this.alias = source["alias"];
	    }
	}
	export class Balance {
	    balance: number;
	    unlocked_balance: number;
	
	    static createFrom(source: any = {}) {
	        return new Balance(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.balance = source["balance"];
	        this.unlocked_balance = source["unlocked_balance"];
	    }
	}

}

export namespace market {
	
	export class Offers {
	    id: string;
	    jsonrpc: string;
	    // Go type: struct { Offers []struct { Ap string "json:\"ap\""; At string "json:\"at\""; B string "json:\"b\""; Cat string "json:\"cat\""; Cnt string "json:\"cnt\""; Com string "json:\"com\""; Do string "json:\"do\""; Et int "json:\"et\""; Fee int64 "json:\"fee\""; IndexInTx int "json:\"index_in_tx\""; Lci string "json:\"lci\""; Lco string "json:\"lco\""; Ot int "json:\"ot\""; P string "json:\"p\""; Pt string "json:\"pt\""; Security string "json:\"security\""; T string "json:\"t\""; Timestamp int "json:\"timestamp\""; TxHash string "json:\"tx_hash\""; TxOriginalHash string "json:\"tx_original_hash\""; Url string "json:\"url\"" } "json:\"offers\""; Status string "json:\"status\""; TotalOffers int "json:\"total_offers\"" }
	    result: any;
	
	    static createFrom(source: any = {}) {
	        return new Offers(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.jsonrpc = source["jsonrpc"];
	        this.result = this.convertValues(source["result"], Object);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

