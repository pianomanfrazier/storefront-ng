import { Attribute } from "./attribute";
import { ComponentTypeNestedModel } from "./component-type-nested-model";
import { ComponentTypeFull } from "./component-type-full";
import { Media } from "./media";
import { Contact } from "./contact";
import { Resource } from "./resource";

export class ComponentDetailView {
    public type	: string;
    public dataSensitivity	: string;
    public dataSensitivityDescription	: string;
    public activeStatus	: string;
    public approvalState	: string;
    public approvalStateLabel	: string;
    public approvedDate	: Date;
    public approvedUser	: string;
    public attributes: Attribute[];
    public componentId	: string;
    public componentMedia: Media[];
    public componentType	: string;
    public componentTypeFull: ComponentTypeFull;
    public componentTypeLabel	: string;
    public componentTypeNestedModel: ComponentTypeNestedModel;
    public componentViews: number;
    public contacts: Contact[];
    public createDts	: Date;
    public createUser	: string;
    public dependencies: string[];
    public description	: string;
    // evaluation: 
    // fullEvaluations	[]
    public lastActivityDts	: Date;
    // metadata	[]
    public name	: string;
    public organization	: string;
    // questions	[]
    public recordVersion: number;
    // relationships	[]
    public resources: Resource[];
    // reviews	[]
    public storageVersion	: string;
    public tags: string[];
    public today	: Date;
}