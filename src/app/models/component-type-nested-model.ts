import { ComponentType } from "./component-type";

export class ComponentTypeNestedModel {
    public children: ComponentTypeNestedModel[];
    public componentType: ComponentType;
}