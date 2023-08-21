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

}

