import {Distillation} from '../models/Distillation/Distillation';

export class Action {
    type: string;
    payload?: {[payloadName: string]: any}; 
    payloadName: string;
    loading?: boolean;

    constructor(type: string, payloadName: string, payloadContent: any, loading?: boolean){
        this.type = type;
        if(payloadName){
            this.payload = {[payloadName]: payloadContent};
            this.payloadName = payloadName;
        }
        if(loading) {
            this.loading = loading;
        }
    }
}

//TODO: Any should be changed.
export const ActionFactory = (type: Type, typeContent?: any) => {
    const typeName = type.typeName;
    const payloadName = type.payloadName || null;
    const payloadContent = typeContent || null;
    if(type instanceof ReduxType) {
        const loading = type.asyncType == AsyncTypes.startType;
        return new Action(typeName, payloadName, payloadContent, loading);
    }
    return new Action(typeName, payloadName, payloadContent);
}