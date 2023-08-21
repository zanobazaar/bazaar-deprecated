export namespace main {
	
	export class Addresses {
	    address: string;
	    alias: string;
	
	    static createFrom(source: any = {}) {
	        return new Addresses(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.address = source["address"];
	        this.alias = source["alias"];
	    }
	}

}

