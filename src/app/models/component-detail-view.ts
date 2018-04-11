import { Attribute } from "./attribute";
import { ComponentTypeNestedModel } from "./component-type-nested-model";
import { ComponentTypeFull } from "./component-type-full";
import { Media } from "./media";
import { Contact } from "./contact";
import { Resource } from "./resource";

export class ComponentDetailView {
    type	: string;
    dataSensitivity	: string;
    dataSensitivityDescription	: string;
    activeStatus	: string;
    approvalState	: string;
    approvalStateLabel	: string;
    approvedDate	: Date;
    approvedUser	: string;
    attributes: Attribute[];
    componentId	: string;
    componentMedia: Media[];
    componentType	: string;
    componentTypeFull: ComponentTypeFull;
    componentTypeLabel	: string;
    componentTypeNestedModel: ComponentTypeNestedModel;
    componentViews: number;
    contacts: Contact[];
    createDts	: Date;
    createUser	: string;
    dependencies: string[];
    description	: string;
    // evaluation: 
    // fullEvaluations	[]
    lastActivityDts	: Date;
    // metadata	[]
    name	: string;
    organization	: string;
    // questions	[]
    recordVersion: number;
    // relationships	[]
    resources: Resource[];
    // reviews	[]
    storageVersion	: string;
    tags: string[];
    today	: Date;
}