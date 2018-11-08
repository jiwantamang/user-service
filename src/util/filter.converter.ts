import { Filter } from "@loopback/repository";

export class FilterConverter{
    static convert(rest?: Filter): Filter{
        let custom: Filter = {};
        if(!rest){
            custom.where = {
                deleted_at: null
            }
            return custom;
        }
        if(rest.fields){
            custom.fields = rest.fields;
        }

        if(rest.include){
            custom.include = rest.include;
        }

        if(rest.limit){
            custom.limit = rest.limit;
        }

        if(rest.offset){
            custom.offset = rest.offset;
        }

        if(rest.order){
            custom.order = rest.order;
        }

        if(rest.skip){
            custom.skip = rest.skip;
        }

        if(rest.where){
            custom.where = rest.where;
        }
        return custom;
    }
}